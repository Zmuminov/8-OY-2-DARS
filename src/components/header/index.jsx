// OTHER FILE
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
// MY FILE
import "./index.css";
import Logo from "../../assets/logo.svg";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import icon5 from "../../assets/icon5.svg";
import account from "../../assets/account.svg";
import dropdownIcon from "../../assets/dropdownIcon.svg";
function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    //   header start
    <div className="header">
      <div className="header-container container">
        {/* logo wrapper start */}
        <div className="header__logoWrapper">
          {/* logo start */}
          <img
            className="header__logoWrapper__img"
            src={Logo}
            alt="WebSite Logo"
          />
        </div>
        {/* nav start */}
        <div className="header__nav">
          {/* ul start */}
          <ul className="header__nav__list">
            {/* item start */}
            <li className="header__nav__list__item">
              <img
                className="header__nav__list__item__img"
                src={icon1}
                alt="WebSite Header Image"
              />
              <p className="header__nav__list__item__text">Asosiy</p>
            </li>
            {/* item start */}
            <li className="header__nav__list__item">
              <img
                className="header__nav__list__item__img"
                src={icon2}
                alt="WebSite Header Image"
              />
              <p className="header__nav__list__item__text">Mijozlar bazasi</p>
            </li>
            {/* item start */}
            <li className="header__nav__list__item">
              <img
                className="header__nav__list__item__img"
                src={icon3}
                alt="WebSite Header Image"
              />
              <p className="header__nav__list__item__text">
                Tracking loyihalari
              </p>
            </li>
            {/* item start */}
            <li className="header__nav__list__item">
              <img
                className="header__nav__list__item__img"
                src={icon4}
                alt="WebSite Header Image"
              />
              <p className="header__nav__list__item__text">
                Sharh olish loyihalari
              </p>
            </li>
            {/* item start */}
            <li className="header__nav__list__item">
              <img
                className="header__nav__list__item__img"
                src={icon5}
                alt="WebSite Header Image"
              />
              <p className="header__nav__list__item__text">
                Redirect loyihalari
              </p>
            </li>
          </ul>
        </div>
        {/* dropdown menu start */}
        <div className="header__dropdown">
          <Button
            className="header__account__buttonSetting"
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <div className="header__dropdown__text">
              <img src={account} alt="Profile Image" />
              <p>Austin Robertson</p>
              <img src={dropdownIcon} alt="Dropdown menu icon" />
            </div>
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
