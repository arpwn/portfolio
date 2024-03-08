import Image from 'next/image';

import Header from '../components/Header/Header'
import SideNav from '../components/Sidenav/SideNav'
import Achievements from '../components/Achievements/Achievements'
import Socials from '../components/Socials/Socials'
import TimeLine from '../components/Experience/Timeline'
import Tabs from '../components/Tabs'
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <div className="container">
        <h1 class="under">
          `Improvements underway: I&apos;m working hard to update my portfolio 
          with new projects and content.`
        </h1>
        {/* <Head>
          <title>Armando&apos;s Portfolio</title>
          <meta name="description" content="Personal portfolio to showcase my projects." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="main-content">
          <div id="home">
            <Header />
          </div>
          
          <div id="projects">
            <Tabs />
          </div>

          <div id="experience">
            <TimeLine />
          </div>

          <div id="achievements">
            <Achievements />
          </div>
        </div> */}

        {/* Sidenav */}
        {/* <div className="side-nav">
          <SideNav />
        </div> */}
      </div>
    </>
  )
};