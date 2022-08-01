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
  ChartData,
} from 'chart.js';
import { FunctionComponent } from 'react';

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
`;

const UserChart: FunctionComponent<{ chartData: ChartData<'line'> }> = ({ chartData }) => {
  return <StyledLine options={options} data={chartData}></StyledLine>;
};

export default UserChart;
