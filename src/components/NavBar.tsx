import React from 'react'
import { Link } from 'react-router-dom'
import { IoMoon, IoSunny } from "react-icons/io5";

interface NavBarProps {
  isLightMode: boolean;
  toggleMode: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isLightMode, toggleMode }) => {
  return (
    <div className='bg-element flex justify-between items-center px-5 md:px-20 py-8 text-color shadow-md'>
      <Link to="/" className="font-semibold text-[14px] md:text-[22px] decoration-none cursor-pointer">
        Where in the world?
      </Link>
      <div onClick={toggleMode} className='flex gap-2 items-center cursor-pointer'>
        {isLightMode ? <IoMoon /> : <IoSunny />}
        <p className='font-semibold text-[16px]'>
          {isLightMode ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </div>
  );
};

export default NavBar;
