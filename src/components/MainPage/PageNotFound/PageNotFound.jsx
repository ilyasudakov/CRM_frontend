import { Link } from 'react-router-dom';
import '../ErrorPage/ErrorPage.scss';

const PageNotFound = () => {
  return (
    <div className="error-page">
      <div className="error-page__title">
        <span className="error-page__error-code">404</span>
        Страница не найдена
      </div>{' '}
      <div className="error-page__description">
        Запрашиваемая вами страница не найдена.
        <br />
        <br />
        Если это ошибка, и запрашиваемая страница должна быть доступна для
        просмотра - напишите об этом в{' '}
        <Link className="error-page__link" to="/feedback">
          обратной связи
        </Link>
      </div>
      <Link className="error-page__button" to="/">
        На главную
      </Link>
    </div>
  );
};

export default PageNotFound;
