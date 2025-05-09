import styles from './style';

import { Navbar, Hero, Stats, Business, Billing , CardDeal , Testimonials , Clients , CTA , Footer } from './components';


const App = () => (
    <div className='bg-[var(--primary)] w-full overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-[var(--primary)] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-[var(--primary)] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats  />
          <Business />
          <Billing  />
          <CardDeal /> 
          <Testimonials /> 
          <Clients /> 
          <CTA  />
          <Footer  />
        </div>
      </div>
      

    </div>
  )


export default App