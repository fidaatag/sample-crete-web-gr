// import Feature from "../components/ui/Feature"
import CtaBussines from "../components/ui/CtaBussines"
// import Footer from "../components/ui/Footer"
import Gallery from "../components/ui/Gallery"
import Hero from "../components/ui/Hero"
// import HeroFlex from "../components/ui/HeroFlex"
// import HeroVideo from "../components/ui/HeroVideo"
import SpillAgencyGuide from "../components/ui/SpillAgencyGuide"
import SpillCatalog from "../components/ui/SpillCatalog"
import SpillCategory from "../components/ui/SpillCategory"
import SpillSelfGuide from "../components/ui/SpillSelfGuide"
import SpillTest from "../components/ui/SpillTest"

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Feature /> */}
      {/* <HeroVideo /> */}
      <SpillCategory />
      <SpillCatalog />
      {/* <HeroFlex /> */}
      <SpillSelfGuide />
      <SpillAgencyGuide />
      <Gallery />
      <CtaBussines />
      {/* <Footer /> */}
      {/* <SpillTest /> */}
    </div>
  )
}

export default Home
