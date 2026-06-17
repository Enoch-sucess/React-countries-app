// import React from 'react'
// import { IoMoon, IoSunny } from "react-icons/io5";

// const DarkModeBtn = () => {
//   const [darkmode, setDarkMode] = useState<boolean>(() =>{
//     const stored = localStorage.getItem("dark-mode");
//     return stored ? (JSON.parse(stored) as boolean) : false;
//   }); 
//   if (darkMode) {
//     document.body.classList.remove("Light-mode");
//   } else {
//     document.body.classList.add("Light-mode");
//   }
//   const handleThemeToggle = (_e: React.MouseEvent<HTMLDivElement>) => {
//     document.body.classList.toggle("Light-mode");
//     setDarkMode((prev) => !prev);
//     const isLight = document.body.classList.contains("Light-mode");
//     localStorage.setItem("dark-mode", JSON.stringify(!isLight));
//   };
// };

// const DarkModeBtn = () => {
//   return (
//     <div 
//     onClick={handleThemeToggle}
//     className='flex gap-2'
//     >
//      <IoMoon />
//      <p
//      className='font-semibold text-[16px]'
//      >
//       {darkMode ? "Light Mode" : "Dark Mode"}
//      </p>
//     </div>
//   )
// }

// export default DarkModeBtn
