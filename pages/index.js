import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import UserChart from '../components/UserChart.tsx';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';

export default function Home() {
  // const router = useRouter();
  // if (typeof window !== 'undefined') {
  //   router.push('/user-dashboard');
  // }

  return (
    <>
      <Head>
        <title>Hydroponics Dashboard</title>
      </Head>
      <Navbar />
      <PageHeader>General Chart</PageHeader>
      <UserChart title="General chart"></UserChart>
    </>
  );
}
