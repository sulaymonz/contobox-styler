import React from "react";
import mobileImg from "../../images/mobile.png";
import desktopImg from "../../images/desktop.png";

export const mobile = {
  presets: [
    {
      name: "Mobile - A",
      image: <img src={mobileImg} alt="Mobile - A" />,
      styles: {
        panel: {
          backgroundColor: { value: "#ffc0cb", unit: "" },
        },
        logo: {
          width: { value: 50, unit: "vw" },
          height: { value: 4, unit: "vh" },
          top: { value: 1.5, unit: "vh" },
          left: { value: 25, unit: "vw" },
        },
        tabTitle: {
          top: { value: 6.5, unit: "vh" },
          left: { value: 10, unit: "vw" },
          width: { value: 80, unit: "vw" },
          fontSize: { value: 6, unit: "vw" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
        },
        card: {
          width: { value: 85, unit: "vw" },
          top: { value: 12, unit: "vh" },
          height: { value: 76, unit: "vh" },
          backgroundColor: { value: "#ffffff", unit: "" },
        },
        cta: {
          title: { value: "Learn More", unit: "" },
          width: { value: 40, unit: "vw" },
          height: { value: 7, unit: "vh" },
          lineHeight: { value: 7, unit: "vh" },
          top: { value: 91, unit: "vh" },
          left: { value: 55, unit: "vw" },
          fontSize: { value: 5, unit: "vw" },
          color: { value: "#ffffff", unit: "" },
          textAlign: { value: "center", unit: "" },
          border: { value: "none", unit: "" },
          borderRadius: { value: "5", unit: "px" },
          backgroundColor: { value: "#ff6f6f", unit: "" },
          textTransform: { value: "none", unit: "" },
          padding: { value: "0", unit: "" },
        },
        navDots: {
          bottom: { value: 5, unit: "vh" },
          width: { value: 30, unit: "vw" },
          left: { value: 10, unit: "vw" },
          dotColor: { value: "#ffffff", unit: "" },
        },
        hamburger: {
          top: { value: 1.5, unit: "vh" },
          left: { value: 5, unit: "vw" },
          barColor: { value: "#ffffff", unit: "" },
        },
        close: {
          width: { value: 20, unit: "px" },
          height: { value: 20, unit: "px" },
          top: { value: 3.5, unit: "vh" },
          right: { value: 5, unit: "vw" },
          stroke: { value: "#ffffff", unit: "" },
          strokeWidth: { value: 12, unit: "%" },
        },
      },
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
  presets: [
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
};

export const desktop = {
  presets: [
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
