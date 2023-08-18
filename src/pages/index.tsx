import Image from 'next/image';

import Header from '../components/Header/Header'
import SideNav from '../components/SideNav/SideNav'
import Achievements from '../components/Achievements/Achievements'
import Socials from '../components/Socials/Socials'
import TimeLine from '../components/Experience/Timeline'
import Description from '../components/Description'
import Tabs from '../components/Tabs'
import Learnings from '../components/Learnings/Learnings'
import ThemeToggle from '../components/ThemeToggle'
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <div className="container">
        <Head>
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
        </div>

        {/* Sidenav */}
        <div className="side-nav">
          <SideNav />
          {/* <ThemeToggle  /> */}
        </div>
      </div>
    </>
  )
};