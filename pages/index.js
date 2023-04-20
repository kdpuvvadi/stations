import Image from "next/image";
import { Inter } from "next/font/google";
import ChargingStationsPage from './ChargingStationsPage';
import Navbar from './components/Header'; 

const IndexPage = () => {
  return (
    <div>
      {/* Other content for your homepage */}
      <Navbar />
      <ChargingStationsPage />
      
    </div>
  );
};

export default IndexPage;
