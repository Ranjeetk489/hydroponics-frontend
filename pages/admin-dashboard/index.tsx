import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import Navbar from '../../components/Navbar';
// import UserChart from '../../components/UserChart';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { StyledHeader } from '../../styles/globalstyles';

const AdminDashboard = () => {
  const currentUser = useContext(CurrentUserContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser.isAdmin) router.replace('/');
  }, [currentUser, router]);

  return (
    currentUser.isAdmin && (
      <>
        <Navbar></Navbar>
        <StyledHeader>Admin Dasbhoard</StyledHeader>
        {/* <UserChart></UserChart> */}
      </>
    )
  );
};

export default AdminDashboard;
