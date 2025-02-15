import React from 'react'
import { useLocation, NavLink } from 'react-router-dom';

const NavItem = ({category, title}) => {
    const location = useLocation();

    const isCategoryActive = (category) => {
      const queryParams = new URLSearchParams(location.search);
      const currentCategory = queryParams.get("category");
      return currentCategory === category;
    };
  
  return (
    <NavLink
                to={`/shop?category=${encodeURIComponent(category)}`}
                className={({ isActive }) =>
                  `text-black-color font-[400] hover:text-grey-color ${isCategoryActive(category) ? "text-grey-color" : ""}`
                }
              >
                {title}
              </NavLink>
  )
}

export default NavItem
