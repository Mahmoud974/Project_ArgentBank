import Navbar from "../components/Navbar";
import Banner from "../assets/bank-tree.jpeg";
import icon_chat from '../assets/icon-chat.png';
import icon_money from '../assets/icon-money.png';
import icon_security from '../assets/icon-security.png';
import Footer from "../components/Footer";

export default function App() {

   const handleLogout = () => {
    return false

  
  };
  return (
    <div>
      <Navbar isLoggedIn={false}  email="" password="" onLogout={handleLogout} />
      <div className="relative">
        <img src={Banner} alt="bank tree" className="w-full h-auto lg:-mt-36" />
        {/* Responsive box mobile */}
        <div className="absolute lg:right-28 lg:px-12 p-8 lg:top-1/4 top-12 -right-17 transform translate-x-1/4 bg-white lg:p-4 rounded shadow-lg">
          <h1 className="lg:text-xl  mb-4">No fees.<br/>
          No minimum deposit.<br/>
          High interest rates.</h1>
          <p className="text-gray-700 text-sm">Open a savings account with<br/> Argent Bank today!</p>
        </div>
      </div>

        {/* Icon's List */}
      <div className="bg-white  lg:-mt-96 -mt-96 relative z-50 ">
        <ul className="flex lg:flex-row space-y-12 lg:space-y-0 lg:items-start lg:mt-0 items-center mt-96  flex-col container mx-auto  justify-around pt-12 pb-6">
          <li className="text-center">
            <div className="border-[#02BC77] rounded-full border-8 w-28 h-28 flex items-center justify-center mx-auto">
              <img src={icon_chat} alt="Chat icon" />
            </div>
            <p className="font-bold my-4">You are our #1 priority</p>
            <p className="text-[#3C4B5C] lg:w-96 w-80 text-sm ">Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
          </li>
          <li className="text-center">
            <div className="border-[#02BC77] rounded-full border-8 w-28 h-28 flex items-center justify-center mx-auto">
              <img src={icon_money} alt="Money icon" />
            </div>
            <p className="font-bold my-4">More savings means higher rates</p>
            <p className="text-[#3C4B5C] lg:w-96 w-80 text-sm ">The more you save with us, the higher your interest rate will be!</p>
          </li>
          <li className="text-center ">
            <div className="border-[#02BC77] rounded-full border-8 w-28 h-28 flex items-center justify-center mx-auto">
              <img src={icon_security} alt="Security icon" />
            </div>
            <p className="font-bold my-4">Security you can trust</p>
            <p className="text-[#3C4B5C] lg:w-96 w-80 text-sm ">We use top of the line encryption to make sure your data and money is always safe.</p>
          </li>
        </ul>
      <Footer />
      </div>
    </div>
  );
}
