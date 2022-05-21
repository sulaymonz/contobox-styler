import React from "react";
import mobileMenuA from "../../../images/Mobile-Menu-A.png";
import mobileMenuB from "../../../images/Mobile-Menu-B.png";
import mobileMenuC from "../../../images/Mobile-Menu-C.png";
import mobileMenuD from "../../../images/Mobile-Menu-D.png";

const mobileMenuPresets = [
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
];

export default mobileMenuPresets;
