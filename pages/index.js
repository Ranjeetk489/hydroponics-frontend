import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import UserChart from '../components/UserChart.tsx';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { useContext, useEffect } from 'react';

export default function Home(props) {
  const currentUser = useContext(CurrentUserContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser.isLoggedIn) router.push('/signin');
  }, [router, currentUser]);

  return (
    currentUser.isLoggedIn && (
      <>
        <Head>
          <title>Hydroponics Dashboard</title>
        </Head>
        <Navbar />
        <PageHeader>General Chart</PageHeader>
        <UserChart title="General chart"></UserChart>
      </>
    )
  );
}
