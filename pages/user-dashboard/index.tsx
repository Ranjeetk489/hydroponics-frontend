import Navbar from '../../components/Navbar';
import UserChart from '../../components/UserChart';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { StyledHeader } from '../../styles/globalstyles';
import { getCropData } from '../../utils/cropData';
import { parseCropData } from '../../utils/parseCropData';
import Image from 'next/image';
import styled from 'styled-components';
import { initialData } from '../../utils/chartSettings';

const UserDashboard = () => {
  const [cropData, setCropData] = useState([]);
  const [chartData, setChartData] = useState(initialData);
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
          const { labels, temperatures, humidities, phs, ecs } = parseCropData(data);
          setChartData({
            labels,
            datasets: [
              {
                label: 'Temperature',
                data: temperatures,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y',
              },
              {
                label: 'Humidity',
                data: humidities,
                borderColor: 'rgb(233, 127, 22)',
                backgroundColor: 'rgba(233, 127, 22, 0.5)',
                yAxisID: 'y',
              },
              {
                label: 'PH',
                data: phs,
                borderColor: 'rgb(39, 68, 216)',
                backgroundColor: 'rgba(39, 68, 216, 0.5)',
                yAxisID: 'y',
              },
              {
                label: 'EC',
                data: ecs,
                borderColor: 'rgb(234, 240, 67)',
                backgroundColor: 'rgba(234, 240, 67, 0.5)',
                yAxisID: 'y',
              },
            ],
          });
        }
      })
      .catch((err) => console.log(err));
  }, [router, currentUser]);
  return (
    currentUser.isLoggedIn && (
      <>
        <Navbar></Navbar>
        <StyledHeader>User Dashboard</StyledHeader>
        <UserChart chartData={chartData}></UserChart>
        <StyledUl>
          {cropData.map((url, i) => (
            <li key={i}>
              <StyledImageContainer>
                <Image objectFit='cover' width={'100%'} height={'100%'} src={url} alt='user uploaded image'></Image>
              </StyledImageContainer>
            </li>
          ))}
        </StyledUl>
      </>
    )
  );
};

const StyledUl = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 100%;
  margin: 40px 2rem;
  place-items: center;

  li {
    overflow: hidden;
    list-style: none;
  }
`;

const StyledImageContainer = styled.div``;

export default UserDashboard;
