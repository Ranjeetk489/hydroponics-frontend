import Navbar from '../../components/Navbar';
import UserChart from '../../components/UserChart';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { StyledHeader } from '../../styles/globalstyles';

const UserDashboard = () => {
  const currentUser = useContext(CurrentUserContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser.isLoggedIn) router.replace('/signin');
  }, [router, currentUser]);
  return (
    currentUser.isLoggedIn && (
      <>
        <Navbar></Navbar>
        <StyledHeader>User Dashboard</StyledHeader>
        <UserChart></UserChart>
      </>
    )
  );
};

export default UserDashboard;
