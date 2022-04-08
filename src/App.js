
import {Download,Features,SectionWrapper} from './components'
import assets from './assets'
import styles from './styles/Global';
const App = ()=> {
  return (
    <>

      <SectionWrapper
       title="Your own store of Nifty NTFS.
       Start Selling and Growing"
       description="Buy,store,Collect NFTS,
       exchange & earn crypto.25+
       million people using ProNef Marketplace"

       showBtn
       mockupImg={assets.homeHero}

       banner="banner"
      />


   <SectionWrapper
       title="Smart user interface marketplace"
       description="Experience a buttery UI of PProNEf
        NFT MarketPLace Smooth"

       mockupImg={assets.homeCards}
        
       reverse
      />

    <Features/>


    <SectionWrapper
       title="Depolyment"
       description="ProNef is built using Expo which runs natively on all users devices"

       mockupImg={assets.feature}
        reverse
      />


   <SectionWrapper
       title="Creative way to showcase the store"
       description="The app contains two screens.the first screen
       list all NFTS while the sceond one shows details"

       mockupImg={assets.mockup}
        
       banner="banner02"
      />

      <Download/>

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col
      text-center banner04">
        <p className={`${styles.pText}`}>Made With love By {""}</p>
        <span className="bold">Mahmoud</span>
      </div>

    </>
  );
}

export default App;
