import Preloader from "../components/Preloader";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import ImpactHighlights from "../components/ImpactHighlights";
import PublicationsModal from "../components/PublicationsModal";

const Home = () => {
  return (
    <div>
      <Preloader />
      <Hero />
      <Mission />
      <ImpactHighlights />
      <PublicationsModal />
    </div>
  );
};

export default Home;
