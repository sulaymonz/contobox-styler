import React from "react";
import desktopImg from "../../images/desktop.png";
import mobileA from "../../images/Mobile-A.png";
import mobileB from "../../images/Mobile-B.png";
import mobileC from "../../images/Mobile-C.png";
import mobileD from "../../images/Mobile-D.png";
import mobileE from "../../images/Mobile-E.png";
import mobileF from "../../images/Mobile-F.png";
import mobileG from "../../images/Mobile-G.png";
import mobileH from "../../images/Mobile-H.png";
import mobileI from "../../images/Mobile-I.png";
import mobileMenuA from "../../images/Mobile-Menu-A.png";
import mobileMenuB from "../../images/Mobile-Menu-B.png";
import mobileMenuC from "../../images/Mobile-Menu-C.png";
import mobileMenuD from "../../images/Mobile-Menu-D.png";
import photoGalleryA from "../../images/PhotoGallery-A.png";
import photoGalleryB from "../../images/PhotoGallery-B.png";
import photoGalleryC from "../../images/PhotoGallery-C.png";
import videoGalleryA from "../../images/VideoGallery-A.png";
import videoGalleryB from "../../images/VideoGallery-B.png";
import videoGalleryC from "../../images/VideoGallery-C.png";
import storeLocatorA from "../../images/Store-Locator-A.png";
import storeLocatorB from "../../images/Store-Locator-B.png";
import storeLocatorC from "../../images/Store-Locator-C.png";
import storeLocatorD from "../../images/Store-Locator-D.png";
import storeLocatorE from "../../images/Store-Locator-E.png";
import storeLocatorF from "../../images/Store-Locator-F.png";
import storeLocatorG from "../../images/Store-Locator-G.png";
import storeLocatorH from "../../images/Store-Locator-H.png";
import storeLocatorI from "../../images/Store-Locator-I.png";

export const mobile = {
  presets: [
    {
      name: "Mobile - A",
      image: <img src={mobileA} alt="Mobile - A" />,
      styles: {
        panel: {
          backgroundColor: { value: "#ffc0cb", unit: "" },
        },
        logo: {
          width: { value: 34, unit: "vw" },
          height: { value: 8, unit: "vh" },
          top: { value: 1.5, unit: "vh" },
          left: { value: 33, unit: "vw" },
        },
        tabTitle: {
          top: { value: 3.5, unit: "vh" },
          left: { value: 13, unit: "vw" },
          width: { value: 18, unit: "vw" },
          fontSize: { value: 5, unit: "vw" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "left", unit: "" },
          lineHeight: { value: 1.4, unit: "" },
          fontWeight: { value: "bold", unit: "" },
          textTransform: { value: "none", unit: "" },
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
          left: { value: 53, unit: "vw" },
          top: { value: 91, unit: "vh" },
          height: { value: 7, unit: "vh" },
          lineHeight: { value: 7, unit: "vh" },
          padding: { value: "0", unit: "" },
          fontSize: { value: 5, unit: "vw" },
          fontWeight: { value: "normal", unit: "" },
          textTransform: { value: "none", unit: "" },
          textAlign: { value: "center", unit: "" },
          color: { value: "#ffffff", unit: "" },
          backgroundColor: { value: "#ff6f6f", unit: "" },
          border: { value: "none", unit: "" },
          borderRadius: { value: "5", unit: "px" },
        },
        navDots: {
          bottom: { value: 5, unit: "vh" },
          width: { value: 30, unit: "vw" },
          left: { value: 12, unit: "vw" },
          dotColor: { value: "#ffffff", unit: "" },
        },
        hamburger: {
          top: { value: 2.8, unit: "vh" },
          left: { value: 3, unit: "vw" },
          barColor: { value: "#ffffff", unit: "" },
        },
        close: {
          width: { value: 8, unit: "vw" },
          height: { value: 8, unit: "vw" },
          top: { value: 3.3, unit: "vh" },
          right: { value: 3, unit: "vw" },
          stroke: { value: "#ffffff", unit: "" },
          strokeWidth: { value: 12, unit: "%" },
        },
      },
    },
    {
      name: "Mobile - B",
      image: <img src={mobileB} alt="Mobile - B" />,
      styles: {
        panel: {
          backgroundColor: { value: "#ffc0cb", unit: "" },
        },
        logo: {
          width: { value: 34, unit: "vw" },
          height: { value: 8, unit: "vh" },
          top: { value: 1.5, unit: "vh" },
          left: { value: 33, unit: "vw" },
        },
        tabTitle: {
          top: { value: 3.5, unit: "vh" },
          left: { value: 13, unit: "vw" },
          width: { value: 18, unit: "vw" },
          fontSize: { value: 5, unit: "vw" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "left", unit: "" },
          lineHeight: { value: 1.4, unit: "" },
          fontWeight: { value: "bold", unit: "" },
          textTransform: { value: "none", unit: "" },
        },
        card: {
          width: { value: 85, unit: "vw" },
          top: { value: 12, unit: "vh" },
          height: { value: 76, unit: "vh" },
          backgroundColor: { value: "#ffffff", unit: "" },
        },
        navDots: {
          bottom: { value: 5, unit: "vh" },
          width: { value: 30, unit: "vw" },
          left: { value: 35, unit: "vw" },
          dotColor: { value: "#ffffff", unit: "" },
        },
        hamburger: {
          top: { value: 2.8, unit: "vh" },
          left: { value: 3, unit: "vw" },
          barColor: { value: "#ffffff", unit: "" },
        },
        close: {
          width: { value: 8, unit: "vw" },
          height: { value: 8, unit: "vw" },
          top: { value: 3.3, unit: "vh" },
          right: { value: 3, unit: "vw" },
          stroke: { value: "#ffffff", unit: "" },
          strokeWidth: { value: 12, unit: "%" },
        },
      },
    },
    {
      name: "Mobile - C",
      image: <img src={mobileC} alt="Mobile - C" />,
      styles: {
        panel: {
          backgroundColor: { value: "#ffc0cb", unit: "" },
        },
        logo: {
          width: { value: 34, unit: "vw" },
          height: { value: 8, unit: "vh" },
          top: { value: 1.5, unit: "vh" },
          left: { value: 33, unit: "vw" },
        },
        tabTitle: {
          top: { value: 3.5, unit: "vh" },
          left: { value: 13, unit: "vw" },
          width: { value: 18, unit: "vw" },
          fontSize: { value: 5, unit: "vw" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "left", unit: "" },
          lineHeight: { value: 1.4, unit: "" },
          fontWeight: { value: "bold", unit: "" },
          textTransform: { value: "none", unit: "" },
        },
        card: {
          width: { value: 85, unit: "vw" },
          top: { value: 12, unit: "vh" },
          height: { value: 76, unit: "vh" },
          backgroundColor: { value: "#ffffff", unit: "" },
        },
        cta: {
          title: { value: "Learn More", unit: "" },
          width: { value: 60, unit: "vw" },
          height: { value: 7, unit: "vh" },
          lineHeight: { value: 7, unit: "vh" },
          top: { value: 91, unit: "vh" },
          left: { value: 20, unit: "vw" },
          fontSize: { value: 5, unit: "vw" },
          color: { value: "#ffffff", unit: "" },
          textAlign: { value: "center", unit: "" },
          border: { value: "none", unit: "" },
          borderRadius: { value: "5", unit: "px" },
          backgroundColor: { value: "#ff6f6f", unit: "" },
          textTransform: { value: "none", unit: "" },
          padding: { value: "0", unit: "" },
        },
        hamburger: {
          top: { value: 2.8, unit: "vh" },
          left: { value: 3, unit: "vw" },
          barColor: { value: "#ffffff", unit: "" },
        },
        close: {
          width: { value: 8, unit: "vw" },
          height: { value: 8, unit: "vw" },
          top: { value: 3.3, unit: "vh" },
          right: { value: 3, unit: "vw" },
          stroke: { value: "#ffffff", unit: "" },
          strokeWidth: { value: 12, unit: "%" },
        },
      },
    },
    {
      name: "Mobile - D",
      image: <img src={mobileD} alt="Mobile - D" />,
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
          lineHeight: { value: 1.4, unit: "" },
          fontWeight: { value: "bold", unit: "" },
          textTransform: { value: "none", unit: "" },
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
          left: { value: 53, unit: "vw" },
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
          left: { value: 12, unit: "vw" },
          dotColor: { value: "#ffffff", unit: "" },
        },
        hamburger: {
          top: { value: 1.2, unit: "vh" },
          left: { value: 5, unit: "vw" },
          barColor: { value: "#ffffff", unit: "" },
        },
        close: {
          width: { value: 8, unit: "vw" },
          height: { value: 8, unit: "vw" },
          top: { value: 1.5, unit: "vh" },
          right: { value: 5, unit: "vw" },
          stroke: { value: "#ffffff", unit: "" },
          strokeWidth: { value: 12, unit: "%" },
        },
      },
    },
    {
      name: "Mobile - E",
      image: <img src={mobileE} alt="Mobile - E" />,
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
          lineHeight: { value: 1.4, unit: "" },
          fontWeight: { value: "bold", unit: "" },
          textTransform: { value: "none", unit: "" },
        },
        card: {
          width: { value: 85, unit: "vw" },
          top: { value: 12, unit: "vh" },
          height: { value: 76, unit: "vh" },
          backgroundColor: { value: "#ffffff", unit: "" },
        },
        navDots: {
          bottom: { value: 5, unit: "vh" },
          width: { value: 30, unit: "vw" },
          left: { value: 35, unit: "vw" },
          dotColor: { value: "#ffffff", unit: "" },
        },
        hamburger: {
          top: { value: 1.2, unit: "vh" },
          left: { value: 5, unit: "vw" },
          barColor: { value: "#ffffff", unit: "" },
        },
        close: {
          width: { value: 8, unit: "vw" },
          height: { value: 8, unit: "vw" },
          top: { value: 1.5, unit: "vh" },
          right: { value: 5, unit: "vw" },
          stroke: { value: "#ffffff", unit: "" },
          strokeWidth: { value: 12, unit: "%" },
        },
      },
    },
    {
      name: "Mobile - F",
      image: <img src={mobileF} alt="Mobile - F" />,
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
          lineHeight: { value: 1.4, unit: "" },
          fontWeight: { value: "bold", unit: "" },
          textTransform: { value: "none", unit: "" },
        },
        card: {
          width: { value: 85, unit: "vw" },
          top: { value: 12, unit: "vh" },
          height: { value: 76, unit: "vh" },
          backgroundColor: { value: "#ffffff", unit: "" },
        },
        cta: {
          title: { value: "Learn More", unit: "" },
          width: { value: 60, unit: "vw" },
          height: { value: 7, unit: "vh" },
          lineHeight: { value: 7, unit: "vh" },
          top: { value: 91, unit: "vh" },
          left: { value: 20, unit: "vw" },
          fontSize: { value: 5, unit: "vw" },
          color: { value: "#ffffff", unit: "" },
          textAlign: { value: "center", unit: "" },
          border: { value: "none", unit: "" },
          borderRadius: { value: "5", unit: "px" },
          backgroundColor: { value: "#ff6f6f", unit: "" },
          textTransform: { value: "none", unit: "" },
          padding: { value: "0", unit: "" },
        },
        hamburger: {
          top: { value: 1.2, unit: "vh" },
          left: { value: 5, unit: "vw" },
          barColor: { value: "#ffffff", unit: "" },
        },
        close: {
          width: { value: 8, unit: "vw" },
          height: { value: 8, unit: "vw" },
          top: { value: 1.5, unit: "vh" },
          right: { value: 5, unit: "vw" },
          stroke: { value: "#ffffff", unit: "" },
          strokeWidth: { value: 12, unit: "%" },
        },
      },
    },
    {
      name: "Mobile - G",
      image: <img src={mobileG} alt="Mobile - G" />,
      styles: {
        panel: {
          backgroundColor: { value: "#ffc0cb", unit: "" },
        },
        logo: {
          width: { value: 40, unit: "vw" },
          height: { value: 8, unit: "vh" },
          top: { value: 1.8, unit: "vh" },
          left: { value: 30, unit: "vw" },
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
          left: { value: 53, unit: "vw" },
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
          left: { value: 12, unit: "vw" },
          dotColor: { value: "#ffffff", unit: "" },
        },
        close: {
          width: { value: 8, unit: "vw" },
          height: { value: 8, unit: "vw" },
          top: { value: 3.6, unit: "vh" },
          right: { value: 3, unit: "vw" },
          stroke: { value: "#ffffff", unit: "" },
          strokeWidth: { value: 12, unit: "%" },
        },
      },
    },
    {
      name: "Mobile - H",
      image: <img src={mobileH} alt="Mobile - H" />,
      styles: {
        panel: {
          backgroundColor: { value: "#ffc0cb", unit: "" },
        },
        logo: {
          width: { value: 40, unit: "vw" },
          height: { value: 8, unit: "vh" },
          top: { value: 1.8, unit: "vh" },
          left: { value: 30, unit: "vw" },
        },
        card: {
          width: { value: 85, unit: "vw" },
          top: { value: 12, unit: "vh" },
          height: { value: 76, unit: "vh" },
          backgroundColor: { value: "#ffffff", unit: "" },
        },
        navDots: {
          bottom: { value: 5, unit: "vh" },
          width: { value: 30, unit: "vw" },
          left: { value: 35, unit: "vw" },
          dotColor: { value: "#ffffff", unit: "" },
        },
        close: {
          width: { value: 8, unit: "vw" },
          height: { value: 8, unit: "vw" },
          top: { value: 3.6, unit: "vh" },
          right: { value: 3, unit: "vw" },
          stroke: { value: "#ffffff", unit: "" },
          strokeWidth: { value: 12, unit: "%" },
        },
      },
    },
    {
      name: "Mobile - I",
      image: <img src={mobileI} alt="Mobile - I" />,
      styles: {
        panel: {
          backgroundColor: { value: "#ffc0cb", unit: "" },
        },
        logo: {
          width: { value: 40, unit: "vw" },
          height: { value: 8, unit: "vh" },
          top: { value: 1.8, unit: "vh" },
          left: { value: 30, unit: "vw" },
        },
        card: {
          width: { value: 85, unit: "vw" },
          top: { value: 12, unit: "vh" },
          height: { value: 76, unit: "vh" },
          backgroundColor: { value: "#ffffff", unit: "" },
        },
        cta: {
          title: { value: "Learn More", unit: "" },
          width: { value: 60, unit: "vw" },
          height: { value: 7, unit: "vh" },
          lineHeight: { value: 7, unit: "vh" },
          top: { value: 91, unit: "vh" },
          left: { value: 20, unit: "vw" },
          fontSize: { value: 5, unit: "vw" },
          color: { value: "#ffffff", unit: "" },
          textAlign: { value: "center", unit: "" },
          border: { value: "none", unit: "" },
          borderRadius: { value: "5", unit: "px" },
          backgroundColor: { value: "#ff6f6f", unit: "" },
          textTransform: { value: "none", unit: "" },
          padding: { value: "0", unit: "" },
        },
        close: {
          width: { value: 8, unit: "vw" },
          height: { value: 8, unit: "vw" },
          top: { value: 3.6, unit: "vh" },
          right: { value: 3, unit: "vw" },
          stroke: { value: "#ffffff", unit: "" },
          strokeWidth: { value: 12, unit: "%" },
        },
      },
    },
  ],
  redirect: "MobileMenuSelector",
};

export const mobileMenu = {
  presets: [
    {
      name: "Mobile Menu - A",
      image: <img src={mobileMenuA} alt="Mobile Menu - A" />,
      styles: {
        wrapper: {
          paddingTop: { value: 30, unit: "vh" },
          backgroundColor: { value: "#ffc0cb", unit: "" },
        },
        tabButton: {
          width: { value: 54, unit: "%" },
          height: { value: 9, unit: "vh" },
          lineHeight: { value: 9, unit: "vh" },
          padding: { value: "0", unit: "" },
          fontSize: { value: 5, unit: "vw" },
          fontWeight: { value: "bold", unit: "" },
          textTransform: { value: "none", unit: "" },
          textAlign: { value: "center", unit: "" },
          color: { value: "#ffffff", unit: "" },
          backgroundColor: { value: "#ff6f6f", unit: "" },
          border: { value: "none", unit: "" },
          borderRadius: { value: 5, unit: "px" },
          marginBottom: { value: 2.5, unit: "vh" },
        },
        activeTabButton: {
          color: { value: "#ff6f6f", unit: "" },
          backgroundColor: { value: "#ffffff", unit: "" },
          border: { value: "none", unit: "" },
          fontWeight: { value: "bold", unit: "" },
        },
      },
    },
    {
      name: "Mobile Menu - B",
      image: <img src={mobileMenuB} alt="Mobile Menu - B" />,
      styles: {
        wrapper: {
          paddingTop: { value: 30, unit: "vh" },
          backgroundColor: { value: "#ffc0cb", unit: "" },
        },
        tabButton: {
          width: { value: 54, unit: "%" },
          height: { value: 9, unit: "vh" },
          lineHeight: { value: 9, unit: "vh" },
          padding: { value: "0", unit: "" },
          fontSize: { value: 5, unit: "vw" },
          fontWeight: { value: "bold", unit: "" },
          textTransform: { value: "none", unit: "" },
          textAlign: { value: "center", unit: "" },
          color: { value: "#ffffff", unit: "" },
          backgroundColor: { value: "#ff6f6f", unit: "" },
          border: { value: "none", unit: "" },
          borderRadius: { value: 5, unit: "px" },
          marginBottom: { value: 2.5, unit: "vh" },
        },
        activeTabButton: {
          color: { value: "#000000", unit: "" },
          backgroundColor: { value: "#ff6f6f", unit: "" },
          border: { value: "none", unit: "" },
          fontWeight: { value: "bold", unit: "" },
        },
      },
    },
    {
      name: "Mobile Menu - C",
      image: <img src={mobileMenuC} alt="Mobile Menu - C" />,
      styles: {
        wrapper: {
          paddingTop: { value: 30, unit: "vh" },
          backgroundColor: { value: "#ffc0cb", unit: "" },
        },
        tabButton: {
          width: { value: 54, unit: "%" },
          height: { value: 9, unit: "vh" },
          lineHeight: { value: 9, unit: "vh" },
          padding: { value: "0", unit: "" },
          fontSize: { value: 5, unit: "vw" },
          fontWeight: { value: "bold", unit: "" },
          textTransform: { value: "none", unit: "" },
          textAlign: { value: "center", unit: "" },
          color: { value: "#ffffff", unit: "" },
          backgroundColor: { value: "transparent", unit: "" },
          border: { value: "none", unit: "" },
          borderRadius: { value: 5, unit: "px" },
          marginBottom: { value: 2.5, unit: "vh" },
        },
        activeTabButton: {
          color: { value: "#ffffff", unit: "" },
          backgroundColor: { value: "#ff6f6f", unit: "" },
          border: { value: "none", unit: "" },
          fontWeight: { value: "bold", unit: "" },
        },
      },
    },
    {
      name: "Mobile Menu - D",
      image: <img src={mobileMenuD} alt="Mobile Menu - D" />,
      styles: {
        wrapper: {
          paddingTop: { value: 30, unit: "vh" },
          backgroundColor: { value: "#ffc0cb", unit: "" },
        },
        tabButton: {
          width: { value: 54, unit: "%" },
          height: { value: 9, unit: "vh" },
          lineHeight: { value: 9, unit: "vh" },
          padding: { value: "0", unit: "" },
          fontSize: { value: 5, unit: "vw" },
          fontWeight: { value: "bold", unit: "" },
          textTransform: { value: "none", unit: "" },
          textAlign: { value: "center", unit: "" },
          color: { value: "#ffffff", unit: "" },
          backgroundColor: { value: "transparent", unit: "" },
          border: { value: "none", unit: "" },
          borderRadius: { value: 5, unit: "px" },
          marginBottom: { value: 2.5, unit: "vh" },
        },
        activeTabButton: {
          color: { value: "#ff6f6f", unit: "" },
          backgroundColor: { value: "transparent", unit: "" },
          border: { value: "none", unit: "" },
          fontWeight: { value: "bold", unit: "" },
        },
      },
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

export const photoGallery = {
  presets: [
    {
      name: "Photo Gallery - A",
      image: <img src={photoGalleryA} alt="Photo Gallery - A" />,
      styles: {
        image: {
          width: { value: 100, unit: "%" },
          height: { value: 50, unit: "%" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "50%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
        title: {
          width: { value: 100, unit: "%" },
          padding: { value: "15% 7vw 1% 7vw", unit: "" },
          fontSize: { value: 7, unit: "vw" },
          fontWeight: { value: "bold", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          caption: { value: "Lorem Ipsum", unit: "" },
          textTransform: { value: "uppercase", unit: "" },
        },
        description: {
          width: { value: 100, unit: "%" },
          padding: { value: "2% 7vw 2% 7vw", unit: "" },
          fontSize: { value: 6, unit: "vw" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.1, unit: "" },
          textTransform: { value: "none", unit: "" },
          caption: {
            value: "Aliquam ac rutrum massa, non semper dui.",
            unit: "",
          },
        },
      },
    },
    {
      name: "Photo Gallery - B",
      image: <img src={photoGalleryB} alt="Photo Gallery - B" />,
      styles: {
        image: {
          width: { value: 100, unit: "%" },
          height: { value: 50, unit: "%" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "50%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
        description: {
          width: { value: 100, unit: "%" },
          padding: { value: "20% 7vw 2% 7vw", unit: "" },
          fontSize: { value: 6, unit: "vw" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.1, unit: "" },
          textTransform: { value: "none", unit: "" },
          caption: {
            value: "Aliquam ac rutrum massa, non semper dui.",
            unit: "",
          },
        },
      },
    },
    {
      name: "Photo Gallery - C",
      image: <img src={photoGalleryC} alt="Photo Gallery - C" />,
      styles: {
        image: {
          width: { value: 100, unit: "%" },
          height: { value: 100, unit: "%" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "50%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
      },
    },
  ],
};

export const videoGallery = {
  presets: [
    {
      name: "Video Gallery - A",
      image: <img src={videoGalleryA} alt="Video Gallery - A" />,
      styles: {
        video: {
          height: { value: "auto", unit: "" },
          borderTopLeftRadius: { value: 15, unit: "px" },
          borderTopRightRadius: { value: 15, unit: "px" },
          borderBottomLeftRadius: { value: 0, unit: "px" },
          borderBottomRightRadius: { value: 0, unit: "px" },
          width: { value: 100, unit: "%" },
          margin: { value: "0", unit: "" },
          backgroundColor: { value: "#000", unit: "" },
        },
        title: {
          width: { value: 100, unit: "%" },
          padding: { value: "15% 7vw 1% 7vw", unit: "" },
          fontSize: { value: 7, unit: "vw" },
          fontWeight: { value: "bold", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          caption: { value: "Lorem Ipsum", unit: "" },
          textTransform: { value: "uppercase", unit: "" },
        },
        description: {
          width: { value: 100, unit: "%" },
          padding: { value: "2% 7vw 2% 7vw", unit: "" },
          fontSize: { value: 6, unit: "vw" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.1, unit: "" },
          textTransform: { value: "none", unit: "" },
          caption: {
            value: "Aliquam ac rutrum massa, non semper dui.",
            unit: "",
          },
        },
      },
    },
    {
      name: "Video Gallery - B",
      image: <img src={videoGalleryB} alt="Video Gallery - B" />,
      styles: {
        video: {
          height: { value: "auto", unit: "" },
          borderTopLeftRadius: { value: 15, unit: "px" },
          borderTopRightRadius: { value: 15, unit: "px" },
          borderBottomLeftRadius: { value: 0, unit: "px" },
          borderBottomRightRadius: { value: 0, unit: "px" },
          width: { value: 100, unit: "%" },
          margin: { value: "0", unit: "" },
          backgroundColor: { value: "#000", unit: "" },
        },
        description: {
          width: { value: 100, unit: "%" },
          padding: { value: "20% 7vw 2% 7vw", unit: "" },
          fontSize: { value: 6, unit: "vw" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.1, unit: "" },
          textTransform: { value: "none", unit: "" },
          caption: {
            value: "Aliquam ac rutrum massa, non semper dui.",
            unit: "",
          },
        },
      },
    },
    {
      name: "Video Gallery - C",
      image: <img src={videoGalleryC} alt="Video Gallery - C" />,
      styles: {
        video: {
          height: { value: "100%", unit: "" },
          borderTopLeftRadius: { value: 15, unit: "px" },
          borderTopRightRadius: { value: 15, unit: "px" },
          borderBottomLeftRadius: { value: 15, unit: "px" },
          borderBottomRightRadius: { value: 15, unit: "px" },
          width: { value: 100, unit: "%" },
          margin: { value: "0", unit: "" },
          backgroundColor: { value: "#000", unit: "" },
        },
      },
    },
  ],
};

export const storeLocator = {
  presets: [
    {
      name: "Store Locator - A",
      image: <img src={storeLocatorA} alt="Store Locator - A" />,
      styles: {
        map: {
          top: { value: "0", unit: "%" },
          left: { value: "0", unit: "%" },
          width: { value: "100", unit: "%" },
          height: { value: "60", unit: "%" },
        },
        slider: {
          padding: { value: "2vh 7vw 2vh 7vw", unit: "" },
        },
        name: {
          margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
          fontSize: { value: 6, unit: "vw" },
          fontWeight: { value: "bold", unit: "" },
          color: { value: "#ff6f6f", unit: "" },
          textAlign: { value: "left", unit: "" },
          lineHeight: { value: 1.2, unit: "" },
          caption: { value: "Awesome Store", unit: "" },
          textTransform: { value: "none", unit: "" },
        },
        address: {
          margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
          fontSize: { value: 4.5, unit: "vw" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "left", unit: "" },
          lineHeight: { value: 1.2, unit: "" },
          textTransform: { value: "none", unit: "" },
          caption: {
            value: "4034 St George Street, Vancouver, BC, V5T1Z7",
            unit: "",
          },
        },
        phone: {
          margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
          fontSize: { value: 4, unit: "vw" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#ff6f6f", unit: "" },
          textAlign: { value: "left", unit: "" },
          lineHeight: { value: 1.2, unit: "" },
          textTransform: { value: "none", unit: "" },
          caption: { value: "604-879-9831", unit: "" },
        },
        searchBar: {
          top: { value: "4", unit: "%" },
          left: { value: "5", unit: "%" },
          width: { value: "90", unit: "%" },
          height: { value: "4", unit: "vh" },
          border: { value: "none", unit: "" },
          borderRadius: { value: "40", unit: "px" },
          padding: { value: "0px 10px 0px 20px", unit: "" },
          fontSize: { value: 3.5, unit: "vw" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#999999", unit: "" },
          textAlign: { value: "left", unit: "" },
          textTransform: { value: "none", unit: "" },
        },
        more: {
          left: { value: "7", unit: "vw" },
          bottom: { value: "2", unit: "vh" },
          fontSize: { value: 3.5, unit: "vw" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#ff6f6f", unit: "" },
          textAlign: { value: "left", unit: "" },
          lineHeight: { value: 1.2, unit: "" },
          width: { value: "auto", unit: "" },
        },
      },
    },
    {
      name: "Store Locator - B",
      image: <img src={storeLocatorB} alt="Store Locator - B" />,
    },
    {
      name: "Store Locator - C",
      image: <img src={storeLocatorC} alt="Store Locator - C" />,
    },
    {
      name: "Store Locator - D",
      image: <img src={storeLocatorD} alt="Store Locator - D" />,
    },
    {
      name: "Store Locator - E",
      image: <img src={storeLocatorE} alt="Store Locator - E" />,
    },
    {
      name: "Store Locator - F",
      image: <img src={storeLocatorF} alt="Store Locator - F" />,
    },
    {
      name: "Store Locator - G",
      image: <img src={storeLocatorG} alt="Store Locator - G" />,
    },
    {
      name: "Store Locator - H",
      image: <img src={storeLocatorH} alt="Store Locator - H" />,
    },
    {
      name: "Store Locator - I",
      image: <img src={storeLocatorI} alt="Store Locator - I" />,
    },
  ],
};
