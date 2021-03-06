import React, { useEffect, useState } from 'react';
import { sortByField } from 'Utils/sorting/sorting.js';
import PropTypes from 'prop-types';
import './FileUploader.scss';
import ImageView from 'Components/Form/ImageView/ImageView.jsx';
import RemoveIcon from 'Assets/tableview/delete.inline.svg';
import DownloadIcon from 'Assets/download.inline.svg';
import { downloadImage, getFileExtension } from '../ImageView/functions';

const FileUploader = ({
  regex = /.+\.(jpeg|jpg|png|img)/,
  type = 'files',
  onChange,
  maxSize = 5,
  uniqueId = 0,
  error = false,
  hideError,
  multipleFiles = false,
  defaultValue,
}) => {
  const [data, setData] = useState([]);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  let dragCounter = 0;
  const [hasError, setHasError] = useState(false);
  const dropRef = React.createRef();

  const formats = {
    '/.+\\.(jpeg|jpg|png|img)/': {
      text: 'Форматы JPEG, PNG, IMG',
    },
    '/.+\\.(xlsx|csv)/': {
      text: 'Форматы XLSX и CSV',
    },
    '/.+\\.(docx)/': {
      text: 'Формат DOCX',
    },
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDraggingOver(true);
    }
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter--;
    if (dragCounter === 0) {
      setIsDraggingOver(false);
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const getFileData = (file) => {
    return new Promise((resolve) => {
      let reader = new FileReader();
      reader.onload = (loadEvent) => resolve(loadEvent.target.result);
      if (type === 'readAsArrayBuffer') return reader.readAsArrayBuffer(file);
      if (type === 'readAsDataURL') return reader.readAsDataURL(file);
      return reader.readAsDataURL(file);
    });
  };

  const handleDropFile = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDraggingOver(false);
    dragCounter = 0;
    const files =
      event?.dataTransfer?.files && event?.dataTransfer?.files?.length > 0
        ? event.dataTransfer.files
        : event.target.files;
    console.log(files, data);

    setHasError(false);
    let errorMessage = null;
    const filteredFiles = Array.from(files).filter((item) => {
      if (item.name.match(regex) === null) {
        errorMessage = 'Некорректный формат файла!';
        return false;
      }
      const { size } = item;
      if (size / 1024 / 1024 > maxSize) {
        errorMessage = `Файл превышает ${maxSize} МБайт`;
        return false;
      }
      return true;
    });
    if (errorMessage) setHasError(errorMessage);
    if (type === 'files') {
      setData((data) => [...data, ...filteredFiles]);
      onChange([...data, ...filteredFiles]);
      return;
    }

    let temp = [];
    return await Promise.all(
      filteredFiles.map(async (fileItem) =>
        temp.push(await getFileData(fileItem)),
      ),
    ).then(() => {
      setData((data) => [...data, ...temp]);
      onChange([...data, ...temp]);
      return;
    });
  };

  const handleDeleteFile = (event, index) => {
    event.preventDefault();
    let temp = data;
    temp.splice(index, 1);
    setData([...temp]);
    onChange([...temp]);
  };

  useEffect(() => {
    if (!dropRef.current) return;
    const div = dropRef.current;
    div.addEventListener('dragenter', onDragEnter);
    div.addEventListener('dragleave', onDragLeave);
    div.addEventListener('dragover', onDragOver);
    div.addEventListener('drop', handleDropFile);

    return () => {
      div.removeEventListener('dragenter', onDragEnter);
      div.removeEventListener('dragleave', onDragLeave);
      div.removeEventListener('dragover', onDragOver);
      div.removeEventListener('drop', handleDropFile);
    };
  }, []);

  useEffect(() => {}, [isDraggingOver, data]);

  useEffect(() => {
    if (
      defaultValue &&
      defaultValue.length > 0 &&
      data.length === 0 &&
      defaultValue[0] !== '' &&
      defaultValue[0] !== undefined
    ) {
      setData([...defaultValue]);
    }
  }, [defaultValue]);

  const getFileName = (item) => {
    const isBase64 =
      (typeof item === 'string' && item.length > 1000) ||
      (typeof item === 'string' && item.length === 0);
    const isLocalPath = typeof item === 'string' && item.length <= 200;
    const isRemoteFile =
      typeof item === 'object' && item?.url !== undefined && item?.url !== null;
    const isRawFile =
      typeof item === 'object' &&
      item?.name !== undefined &&
      item?.name !== null &&
      item?.size !== undefined &&
      item?.size !== null;
    if (isRemoteFile)
      return item?.url?.split(/\/fileWithoutDB\/downloadFile\//)[1];
    if (isLocalPath) return item.split('assets/')[1];
    if (isBase64) return 'файл_без_имени';
    if (isRawFile) return item?.name;
    return item?.type?.split('/')[1] ?? 'файл_без_имени';
  };

  const canLoadMoreFiles =
    multipleFiles || (!multipleFiles && data.length === 0);
  return (
    <div className="file-uploader">
      {canLoadMoreFiles ? (
        <div
          className={`file-uploader__wrapper ${
            isDraggingOver ? 'file-uploader__wrapper--dragging' : ''
          } ${hasError || error ? 'file-uploader__wrapper--error' : ''}`}
          ref={dropRef}
          style={{
            minHeight: 'var(--file-uploader__min-height)',
          }}
        >
          {isDraggingOver ? (
            <div
              className="file-uploader__info"
              draggable="true"
              onDragStart={(e) => e.preventDefault()}
            >
              <div className="file-uploader__text">
                {`Отпустите ${multipleFiles ? 'файлы' : 'файл'} для загрузки`}
              </div>
            </div>
          ) : (
            <div
              className="file-uploader__info"
              draggable="true"
              onDragStart={(e) => e.preventDefault()}
            >
              <div className="file-uploader__text">{`Перетащите ${
                multipleFiles ? 'файлы' : 'файл'
              } сюда`}</div>
              <div className="file-uploader__text file-uploader__text--small">
                или
              </div>

              <div className="file-uploader__input">
                <label
                  className="main-window__button"
                  htmlFor={`fileuploader-${uniqueId}`}
                >
                  {`Загрузите ${multipleFiles ? 'файлы' : 'файл'}`}
                </label>
                <input
                  onChange={async (event) => await handleDropFile(event)}
                  type="file"
                  name="file"
                  multiple={multipleFiles ? 'multiple' : false}
                  id={`fileuploader-${uniqueId}`}
                />
              </div>
            </div>
          )}
        </div>
      ) : null}
      {(error || hasError) && (
        <div
          className="file-uploader__error"
          onClick={() => {
            if (hideError) hideError();
            setHasError(false);
          }}
        >
          {error ? 'Поле не заполнено!' : hasError}
        </div>
      )}
      {canLoadMoreFiles
        ? formats[regex.toString()] && (
            <div className="file-uploader__hint">
              {formats[regex.toString()].text}
            </div>
          )
        : null}
      {data.length > 0 ? (
        <ul
          className="file-uploader__file-list"
          style={{ marginTop: canLoadMoreFiles ? '10px' : '0' }}
        >
          {sortByField(data, { fieldName: 'id', direction: 'asc' }).map(
            (item, index) => {
              const extension = getFileExtension(item);
              const isImage =
                extension === 'png' ||
                extension === 'jpeg' ||
                extension === 'img' ||
                extension === 'jpg';
              return (
                <li key={item.name}>
                  <ImageView file={item} />
                  <div>{getFileName(item)}</div>
                  {(item?.url || isImage || item instanceof File) && (
                    <DownloadIcon
                      width={30}
                      height={30}
                      viewBox="0 0 24 24"
                      onClick={() => downloadImage(item)}
                    />
                  )}
                  <RemoveIcon
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                    onClick={(event) => handleDeleteFile(event, index)}
                  />
                </li>
              );
            },
          )}
        </ul>
      ) : null}
    </div>
  );
};

export default FileUploader;

FileUploader.propTypes = {
  regex: PropTypes.string,
  type: PropTypes.string,
  multipleFiles: PropTypes.bool,
  defaultValue: PropTypes.array,
  onChange: PropTypes.func,
  uniqueId: PropTypes.string,
  error: PropTypes.string,
  hideError: PropTypes.func,
};
