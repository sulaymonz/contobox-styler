import React from "react";
import videoGalleryA from "../../../images/VideoGallery-A.png";
import videoGalleryB from "../../../images/VideoGallery-B.png";
import videoGalleryC from "../../../images/VideoGallery-C.png";

const videoGalleryPresets = [
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
];

export default videoGalleryPresets;
