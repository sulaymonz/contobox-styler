import React from "react";
import storeLocatorA from "../../../images/Store-Locator-A.png";
import storeLocatorB from "../../../images/Store-Locator-B.png";
import storeLocatorC from "../../../images/Store-Locator-C.png";
import storeLocatorD from "../../../images/Store-Locator-D.png";
import storeLocatorE from "../../../images/Store-Locator-E.png";
import storeLocatorF from "../../../images/Store-Locator-F.png";
import storeLocatorG from "../../../images/Store-Locator-G.png";
import storeLocatorH from "../../../images/Store-Locator-H.png";
import storeLocatorI from "../../../images/Store-Locator-I.png";

const storeLocatorPresets = [
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
];

export default storeLocatorPresets;
