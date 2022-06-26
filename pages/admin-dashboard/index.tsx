import Navbar from '../../components/Navbar';
import PageHeader from '../../components/PageHeader';
import UserChart from '../../components/UserChart';

interface DashboardProps {}

const AdminDashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
  // console.log(location.pathname);

  return (
    <>
      <Navbar></Navbar>
      <PageHeader>Admin Dasbhoard</PageHeader>
      <UserChart></UserChart>
    </>
  );
};

export default AdminDashboard;
