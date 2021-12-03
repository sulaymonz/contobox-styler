import React from "react";
import mobileImg from "../../images/mobile.png";
import desktopImg from "../../images/desktop.png";

export const mobile = {
  types: [
    {
      name: "Mobile - A",
      image: <img src={mobileImg} alt="Mobile - A" />,
    },
    {
      name: "Mobile - B",
      image: <img src={mobileImg} alt="Mobile - B" />,
    },
    {
      name: "Mobile - C",
      image: <img src={mobileImg} alt="Mobile - C" />,
    },
    {
      name: "Mobile - D",
      image: <img src={mobileImg} alt="Mobile - D" />,
    },
    {
      name: "Mobile - E",
      image: <img src={mobileImg} alt="Mobile - E" />,
    },
    {
      name: "Mobile - F",
      image: <img src={mobileImg} alt="Mobile - F" />,
    },
  ],
  redirect: "MobileMenuSelector",
};

export const mobileMenu = {
  types: [
    {
      name: "Mobile Menu - A",
      image: <img src={mobileImg} alt="Mobile Menu - A" />,
    },
    {
      name: "Mobile Menu - B",
      image: <img src={mobileImg} alt="Mobile Menu - B" />,
    },
    {
      name: "Mobile Menu - C",
      image: <img src={mobileImg} alt="Mobile Menu - C" />,
    },
    {
      name: "Mobile Menu - D",
      image: <img src={mobileImg} alt="Mobile Menu - D" />,
    },
    {
      name: "Mobile Menu - E",
      image: <img src={mobileImg} alt="Mobile Menu - E" />,
    },
    {
      name: "Mobile Menu - F",
      image: <img src={mobileImg} alt="Mobile Menu - F" />,
    },
  ],
  redirect: "LayoutSelector",
};

export const desktop = {
  types: [
    {
      name: "Desktop - A",
      image: <img src={desktopImg} alt="Desktop - A" />,
    },
    {
      name: "Desktop - B",
      image: <img src={desktopImg} alt="Desktop - B" />,
    },
    {
      name: "Desktop - C",
      image: <img src={desktopImg} alt="Desktop - C" />,
    },
    {
      name: "Desktop - D",
      image: <img src={desktopImg} alt="Desktop - D" />,
    },
    {
      name: "Desktop - E",
      image: <img src={desktopImg} alt="Desktop - E" />,
    },
    {
      name: "Desktop - F",
      image: <img src={desktopImg} alt="Desktop - F" />,
    },
  ],
  redirect: "LayoutSelector",
};
