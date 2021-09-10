import React from "react";
import Link from "next/link";
import { NavbarTemplate } from "./styles";

const Navbar = () => {
  return (
    <NavbarTemplate>
      NAVBAR<Link href="/"> Home </Link>
      <Link href="/projects"> Projects </Link>
    </NavbarTemplate>
  );
};

export default Navbar;

// import{ useState, useEffect } from "react";
// import { FaBars } from "react-icons/fa";
// import { IconContext } from "react-icons/lib";
// import { animateScroll as scroll } from "react-scroll";
// import {
//   Nav,
//   NavbarContainer,
//   NavLogo,
//   MobileIcon,
//   NavMenu,
//   NavItem,
//   NavLinks,
// } from "./styles";

// const Navbar = ({ toggle }) => {
//   const [scrollNav, setScrollNav] = useState(false);

//   const changeNav = () => {
//     if (window.scrollY >= 80) {
//       setScrollNav(true);
//     } else {
//       setScrollNav(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeNav);
//   }, []);

//   const toggleHome = () => {
//     scroll.scrollToTop();
//   };

//   return (
//     <>
//       <IconContext.Provider value={{ color: "#000" }}>
//         <Nav scrollNav={scrollNav}>
//           <NavbarContainer>
//             <NavLogo to="/" onClick={toggleHome}>
//               Home
//             </NavLogo>
//             <MobileIcon onClick={toggle}>
//               <FaBars />
//             </MobileIcon>
//             <NavMenu>
//               <NavItem>
//                 <NavLinks
//                   to="about"
//                   smooth={true}
//                   duration={500}
//                   spy={true}
//                   exact="true"
//                   offset={-80}
//                 >
//                   About
//                 </NavLinks>
//               </NavItem>
//               <NavItem>
//                 <NavLinks
//                   to="appetite"
//                   smooth={true}
//                   duration={500}
//                   spy={true}
//                   exact="true"
//                   offset={-80}
//                 >
//                   Projects
//                 </NavLinks>
//               </NavItem>
//               <NavItem>
//                 <NavLinks
//                   to="products"
//                   smooth={true}
//                   duration={500}
//                   spy={true}
//                   exact="true"
//                   offset={-80}
//                 >
//                   Travel
//                 </NavLinks>
//               </NavItem>
//               <NavItem>
//                 <NavLinks
//                   to="team"
//                   smooth={true}
//                   duration={500}
//                   spy={true}
//                   exact="true"
//                   offset={-80}
//                 >
//                   Music
//                 </NavLinks>
//               </NavItem>
//             </NavMenu>
//           </NavbarContainer>
//         </Nav>
//       </IconContext.Provider>
//     </>
//   );
// };

// export default Navbar;
