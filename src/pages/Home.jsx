import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem/Problem";
import SevenLaws from "../components/SevenLaws/SevenLaws";
import WarriorSystems from "../components/WarriorSystems/WarriorSystems";
import Mastery from "../components/Mastery/Mastery";
// import BuiltAroundBusiness from "../components/BuiltAroundBusiness/BuiltAroundBusiness";
import BuildSystem from "../components/BuildSystem/BuildSystem";
// import OneConnectedBusiness from "../components/OneConnectedBusiness/OneConnectedBusiness";
import Dashboard from "../components/Dashboard/Dashboard";
import FounderTransformation from "../components/FounderTransformation/FounderTransformation";
import ExecutionSystem from "../components/ExecutionSystem/ExecutionSystem";
// import AlternativeFailure from "../components/AlternativeFailure/AlternativeFailure";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <SevenLaws />
        <WarriorSystems />
        <Mastery/>
        {/* <BuiltAroundBusiness/> */}
        <BuildSystem/>
        {/* <OneConnectedBusiness/> */}
        <Dashboard/>
        <FounderTransformation/>
        <ExecutionSystem/>
        {/* <AlternativeFailure/> */}
        <FinalCTA/>
        <Footer/>
      </main>
    </>
  );
}

export default Home;
