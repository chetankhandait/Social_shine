// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const menuItems = [
//     { name: "About", path: "/about-us" },
//     { name: "Service", path: "/services" },
//     { name: "Portfolio", path: "/work-sample" },
//   ];

//   return (
//     <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-4xl">
//       <div className="px-4">
//         <div className="flex items-center justify-between gap-5">
//           <div className="flex justify-center items-center gap-3 shrink-0">
//             <Link aria-current="page" className="flex items-center" to="/">
//               <img
//                 className="h-8 w-auto rounded"
//                 src="/instagram logo.jpg"
//                 alt="Logo"
//               />
//             </Link>
//             <p className="text-black">Social Shine</p>
//           </div>
//           <div className="md:hidden">
//             <Link
//               className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//               to="/login"
//             >
//               Get in Touch
//             </Link>
//           </div>
//           <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
//             {menuItems.map((item, index) => (
//               <Link
//                 key={index}
//                 aria-current="page"
//                 className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
//                 to={item.path}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//           <div className="hidden md:flex">
//             <Link
//               className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//               to="/login"
//             >
//               Get in Touch
//             </Link>
//           </div>
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-900 focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {menuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       {menuOpen && (
//         <div className="md:hidden mt-4 space-y-4 px-4 pb-4 text-center">
//           {menuItems.map((item, index) => (
//             <Link
//               key={index}
//               aria-current="page"
//               className="block rounded-lg px-2 py-3 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
//               to={item.path}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { name: "About", path: "/about-us" },
    { name: "Service", path: "/services" },
    { name: "Portfolio", path: "/work-sample" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-4xl">
      <div className="px-4">
        <div className="flex items-center justify-between gap-5">
          <div className="flex justify-center items-center gap-3 shrink-0">
            <NavLink aria-current="page" className="flex items-center" to="/">
              <img
                className="h-8 w-auto rounded  "
                src="/instagram logo.jpg"
                alt="Logo"
              />
            </NavLink>
            <p className="text-black">Social  Shine</p>
          </div>
          <div className="md:hidden">
            <NavLink
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              to="/login"
            >
              Get in Touch
            </NavLink>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                activeClassName="bg-gray-200"
                to={item.path}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden md:flex">
            <NavLink
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              to="/login"
            >
              Get in Touch
            </NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4 pb-4 text-center">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              aria-current="page"
              className="block rounded-lg px-2 py-3 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              activeClassName="bg-gray-500"
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
