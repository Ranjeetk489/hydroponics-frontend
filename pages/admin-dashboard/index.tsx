import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import PageHeader from '../../components/PageHeader';
import UserChart from '../../components/UserChart';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const AdminDashboard = () => {
  const currentUser = useContext(CurrentUserContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser.isAdmin) router.push('/');
  }, [currentUser, router]);

  return (
    currentUser.isAdmin && (
      <>
        <Navbar></Navbar>
        <PageHeader>Admin Dasbhoard</PageHeader>
        <UserChart></UserChart>
      </>
    )
  );
};

export default AdminDashboard;
