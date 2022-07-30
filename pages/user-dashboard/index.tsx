import Navbar from '../../components/Navbar';
import UserChart from '../../components/UserChart';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { StyledHeader } from '../../styles/globalstyles';
import { getCropData } from '../../utils/cropData';
import Image from 'next/image';

type CropDataResponse = {
  _id: string;
  dateReceived: string;
  ec: string;
  handled: string;
  humidity: string;
  messageBody: string;
  ph: string;
  temperature: string;
};

const UserDashboard = () => {
  const [cropData, setCropData] = useState([]);
  const currentUser = useContext(CurrentUserContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser.isLoggedIn) {
      router.replace('/signin');
      return;
    }
    getCropData(7, currentUser)
      .then((data) => {
        if (Array.isArray(data)) {
          const imageArray = data.reduce((acc, message) => {
            if (message.imageUrl) acc.push(message.imageUrl);
            return acc;
          }, []);
          setCropData(imageArray);
        }
      })
      .catch((err) => console.log(err));
  }, [router, currentUser]);
  return (
    currentUser.isLoggedIn && (
      <>
        <Navbar></Navbar>
        <StyledHeader>User Dashboard</StyledHeader>
        <UserChart></UserChart>
        <ul style={{ all: 'unset' }}>
          {cropData.map((url, i) => (
            <li key={i} style={{ all: 'unset' }}>
              <Image objectFit='cover' width={'200px'} height={'200px'} src={url} alt='user uploaded image'></Image>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default UserDashboard;
