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
        <Head>
          <title>Armando&apos;s Portfolio</title>
          <meta name="description" content="Personal portfolio to showcase my projects." />
          <link rel="icon" href="/favicon.ico" />
          {/* Hotjar */}
          <script>
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:3824120,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          </script>
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
        </div>
      </div>
    </>
  )
};