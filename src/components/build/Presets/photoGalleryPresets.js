import React from "react";
import photoGalleryA from "../../../images/PhotoGallery-A.png";
import photoGalleryB from "../../../images/PhotoGallery-B.png";
import photoGalleryC from "../../../images/PhotoGallery-C.png";

const photoGalleryPresets = [
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
];

export default photoGalleryPresets;
