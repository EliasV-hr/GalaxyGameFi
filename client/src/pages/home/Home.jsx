import { Helmet } from "react-helmet-async";
import "./Home.css";
import SoftHero from "./components/GalaxyGameFi/SoftHero";
import PlatformStats from "./components/GalaxyGameFi/PlatformStats";
import GameModes from "./components/GalaxyGameFi/GameModes";
import EarningsOverview from "./components/GalaxyGameFi/EarningsOverview";
import VolumeSection from "./components/GalaxyGameFi/VolumeSection";
import PlatformFeatures, { HomeCTA } from "./components/GalaxyGameFi/PlatformFeatures";

const Home = ({ Data }) => {
  const homeData = Data?.Home || {};

  return (
    <div className="soft-home">
      <Helmet>
        <title>GalaxyGameFi | Home</title>
        <meta
          name="description"
          content="GalaxyGameFi — stake, play, and grow your crypto gaming network."
        />
      </Helmet>
      <SoftHero data={homeData} />
      <PlatformStats data={homeData} />
      <GameModes data={homeData} />
      <EarningsOverview data={homeData} />
      <VolumeSection data={homeData} />
      <PlatformFeatures data={homeData} />
      <HomeCTA />
    </div>
  );
};

export default Home;
