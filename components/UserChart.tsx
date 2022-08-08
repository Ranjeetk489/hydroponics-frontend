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

interface ChartProps {
  chartData: ChartData<'line'>;
  daysDisplayed: number;
}

const StyledLine = styled(Line)`
  padding: 0 2rem;
`;

const DisplayDays = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: rgb(70, 70, 70);
`;

const UserChart: FunctionComponent<ChartProps> = ({ chartData, daysDisplayed }) => {
  return (
    <>
      <DisplayDays>Displaying last {daysDisplayed} days of data:</DisplayDays>
      <StyledLine options={options} data={chartData}></StyledLine>
    </>
  );
};

export default UserChart;
