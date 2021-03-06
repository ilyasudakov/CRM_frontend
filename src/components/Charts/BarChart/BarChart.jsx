import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Chartjs from 'chart.js';
import './BarChart.scss';

const browserScreen =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const screenWidthLessThan500PX = browserScreen > 500;

const chartConfig = {
  responsive: true,
  maintainAspectRatio: screenWidthLessThan500PX ? true : false,
  animation: {
    easing: 'easeInOutCirc',
  },
};

const BarChart = ({
  data = [],
  labels = [],
  title = '',
  color,
  chartClassName = '',
  wrapperClassName = '',
  isStacked = false,
  options = {},
}) => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  const updateDataset = (datasetIndex, newData) => {
    if (isStacked) {
      const values = data.map((d) => {
        return {
          label: d.label,
          data: d.data,
          backgroundColor: d.color,
        };
      });
      chartInstance.data.datasets = values;
      chartInstance.data.labels = labels;
      return chartInstance.update();
    }
    const values = newData.map((d) => d.value);
    const colors = newData.map((d) => d.color);
    chartInstance.data.datasets[datasetIndex].data = values;
    chartInstance.data.datasets[datasetIndex].backgroundColor = color ?? colors;
    chartInstance.data.labels = labels;
    chartInstance.update();
  };

  const defaultTooltips = {
    mode: 'index',
    callbacks: {
      label:
        options?.tooltips?.callbacks?.label ??
        function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';

          if (label) {
            label += ': ';
          }
          label += Math.round(tooltipItem.yLabel * 100) / 100;
          return label;
        },
    },
  };

  const scalesYAxes = [
    {
      gridLines: {
        display: options?.scales?.yAxes?.gridLines?.display ?? true,
      },
      stacked: isStacked,
      ticks: {
        display: screenWidthLessThan500PX ? true : true,
        callback:
          options?.scales?.yAxes?.ticks?.callback ??
          function (value) {
            return value;
          },
        min: 0,
        beginAtZero: true,
      },
    },
  ];
  const scalesXAxes = [
    {
      gridLines: {
        display: options?.scales?.xAxes?.gridLines?.display ?? true,
      },
      stacked: isStacked,
      ticks: {
        display: screenWidthLessThan500PX ? true : false,
      },
    },
  ];
  const defaultScales = {
    yAxes: scalesYAxes,
    xAxes: scalesXAxes,
  };

  const getDatasets = (data) => {
    return isStacked
      ? data.map((d) => {
          return {
            label: d.label,
            data: d.data,
            backgroundColor: d.color,
            maxBarThickness: 80,
          };
        })
      : [
          {
            label: title,
            data: data.map((d) => d.value),
            backgroundColor: color ?? data.map((d) => d.color),
            maxBarThickness: 80,
          },
        ];
  };

  useEffect(() => {
    if (!chartContainer || !chartContainer.current) return;
    if (chartInstance !== null) chartInstance.destroy();
    const newChartInstance = new Chartjs(chartContainer.current, {
      type: screenWidthLessThan500PX ? 'bar' : 'horizontalBar',
      data: {
        labels: labels,
        datasets: getDatasets(data),
      },
      options: {
        ...chartConfig,
        legend: {
          position: options?.legend?.position ?? 'top',
          display: options?.legend?.display ?? true,
        },
        onClick: options?.onClick ?? function () {},
        tooltips: defaultTooltips,
        scales: defaultScales,
      },
    });
    setChartInstance(newChartInstance);
  }, [chartContainer]);

  useEffect(() => {
    if (chartContainer && chartContainer.current && chartInstance && data) {
      console.log(data);
      updateDataset(0, data);
    }
  }, [data]);

  return (
    <div className="bar-chart">
      {title && <div className="main-window__title">{title}</div>}
      <div className={wrapperClassName} style={{ width: '100%' }}>
        <canvas className={chartClassName} ref={chartContainer} />
      </div>
    </div>
  );
};

export default BarChart;

BarChart.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  labels: PropTypes.array,
  isStacked: PropTypes.bool,
  chartClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  color: PropTypes.string,
  options: PropTypes.object,
};
