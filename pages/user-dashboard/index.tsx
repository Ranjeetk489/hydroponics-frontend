import Navbar from '../../components/Navbar';
import PageHeader from '../../components/PageHeader';
import UserChart from '../../components/UserChart';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const UserDashboard = () => {
  const currentUser = useContext(CurrentUserContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser.isLoggedIn) router.push('/signin');
  }, [router, currentUser]);
  return (
    currentUser.isLoggedIn && (
      <>
        <Navbar></Navbar>
        <PageHeader>User Dashboard</PageHeader>
        <UserChart></UserChart>
      </>
    )
  );
};

export default UserDashboard;
