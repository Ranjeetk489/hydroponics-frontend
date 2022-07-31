import { Line } from 'react-chartjs-2';
import { options } from '../utils/chartSettings';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';
import { useEffect } from 'react';

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const StyledLine = styled(Line)`
  padding: 0 2rem;
  /* width: 100%; */
  /* min-height: 400px; */
  /* margin: auto; */
`;

const UserChart = (props: any) => {
  useEffect(() => {
    console.log(props.chartData);
  }, [props.chartData]);
  if (!props.chartData) return <></>;
  return <StyledLine options={options} data={props.chartData}></StyledLine>;
};

export default UserChart;
