// OTHER FILE
import { useState } from "react";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// MY FILE
import HeroTopIcon from "../../assets/heroTopIcon.svg";
import trueIcon from "../../assets/trueIcon.svg";
import phone from "../../assets/mobile.png";
import "./index.css";
function valuetext(value) {
  return `${value}°C`;
}
function Hero() {
  // TABS
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // TEXTAREA
  const [text, setText] = useState("");
  const [savedText, setSavedText] = useState("");

  useEffect(() => {
    const storedText = localStorage.getItem("savedText");
    if (storedText) {
      setSavedText(storedText);
    }
  }, []);

  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  const handleSaveButtonClick = () => {
    localStorage.setItem("savedText", text);
    setSavedText(text);
    console.log("Data saved to localStorage:", text);
  };

  // INPUT
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const handleClick = () => {
    const userData = {
      input1,
      input2,
      input3,
      input4,
    };
    console.log(userData);
  };
  // BOOTSTRAP
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__top">
          <div className="hero__top__subProject">
            <div className="hero__top__subProject__text">
              <img src={HeroTopIcon} alt="Hero Top Icon" />
              <p className="hero__top__subProject__title">Subloyiha ochish</p>
            </div>
            <Stack spacing={2} direction="row">
              <BootstrapButton
                onClick={handleClick}
                variant="contained"
                disableRipple
              >
                Davom etish
              </BootstrapButton>
            </Stack>
          </div>
          <div className="hero__top__input">
            <div className="hero__top__input__v2">
              <div className="hero__top__input__v2-children">
                <span className="MediumSpan">Loyiha nomi</span>
                <input
                  placeholder="Loyiha nomi"
                  className="v2children-input"
                  type="text"
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                />
              </div>
              <div className="hero__top__input__v2-children">
                <span className="MediumSpan">Tag</span>
                <input
                  placeholder="Tag"
                  className="v2children-input"
                  type="text"
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                />
              </div>
            </div>
            <div className="hero__top__input__v3">
              <div className="hero__top__input__v2-children">
                <span className="MediumSpan">
                  <img src={trueIcon} alt="True Icon" />
                  Boshlanish vaqti
                </span>
                <input
                  placeholder="Boshlanish vaqti"
                  className="v2children-input"
                  type="text"
                  value={input3}
                  onChange={(e) => setInput3(e.target.value)}
                />
              </div>
              <div className="hero__top__input__v2-children">
                <span className="MediumSpan">
                  <img src={trueIcon} alt="True Icon" />
                  Qancha vaqtda habar yuboriladi?
                </span>
                <input
                  placeholder="Qancha vaqtda habar yuboriladi?"
                  className="v2children-input"
                  type="text"
                  value={input4}
                  onChange={(e) => setInput4(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="hero__top__timeline">
            <Box sx={{ width: 1360 }}>
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                shiftStep={30}
                step={10}
                marks
                min={10}
                max={110}
              />
            </Box>
          </div>
        </div>
        <div className="hero__bottom">
          <div className="hero__bottom__top">
            <div>
              <p className="paragraphv2">Shablon</p>
              <input
                className="inputv2"
                placeholder="Enter here..."
                type="text"
              />
            </div>
            <div>
              <p className="paragraphv2">Link</p>
              <input
                className="inputv2"
                placeholder="Enter here..."
                type="text"
              />
            </div>
            <div className="tab">
              <p className="paragraphv2">Habar</p>
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="O’zbekcha" value="1" />
                      <Tab label="Русский" value="2" />
                      <Tab label="English" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">Habar matni...</TabPanel>
                  <TabPanel value="2">Текст сообщения...</TabPanel>
                  <TabPanel value="3">Message text...</TabPanel>
                </TabContext>
              </Box>
            </div>
          </div>
          <div className="hero__bottom__bottom">
            <img src={phone} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
