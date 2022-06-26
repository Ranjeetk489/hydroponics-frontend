import Navbar from '../../components/Navbar';
import PageHeader from '../../components/PageHeader';
import UserChart from '../../components/UserChart';

interface DashboardProps {}

const UserDashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
  return (
    <>
      <Navbar></Navbar>
      <PageHeader>User Dashboard</PageHeader>
      <UserChart></UserChart>
    </>
  );
};

export default UserDashboard;
