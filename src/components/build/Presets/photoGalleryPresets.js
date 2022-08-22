import React from "react";
import photoGalleryA from "../../../images/PhotoGallery-A.png";
import photoGalleryB from "../../../images/PhotoGallery-B.png";
import photoGalleryC from "../../../images/PhotoGallery-C.png";
import desktopPhotoGalleryA from "../../../images/Desktop-PhotoGallery-A.png";
import desktopPhotoGalleryB from "../../../images/Desktop-PhotoGallery-B.png";
import desktopPhotoGalleryC from "../../../images/Desktop-PhotoGallery-C.png";
import desktopPhotoGalleryD from "../../../images/Desktop-PhotoGallery-D.png";
import desktopPhotoGalleryE from "../../../images/Desktop-PhotoGallery-E.png";
import desktopPhotoGalleryF from "../../../images/Desktop-PhotoGallery-F.png";
import desktopPhotoGalleryG from "../../../images/Desktop-PhotoGallery-G.png";
import desktopPhotoGalleryH from "../../../images/Desktop-PhotoGallery-H.png";
import desktopPhotoGalleryI from "../../../images/Desktop-PhotoGallery-I.png";
import desktopPhotoGalleryJ from "../../../images/Desktop-PhotoGallery-J.png";
import desktopPhotoGalleryK from "../../../images/Desktop-PhotoGallery-K.png";
import desktopPhotoGalleryL from "../../../images/Desktop-PhotoGallery-L.png";
import desktopPhotoGalleryM from "../../../images/Desktop-PhotoGallery-M.png";

const photoGalleryPresets = {
  mobile: [
    {
      name: "Photo Gallery - A (Mobile)",
      image: <img src={photoGalleryA} alt="Photo Gallery - A (Mobile)" />,
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
      name: "Photo Gallery - B (Mobile)",
      image: <img src={photoGalleryB} alt="Photo Gallery - B (Mobile)" />,
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
      name: "Photo Gallery - C (Mobile)",
      image: <img src={photoGalleryC} alt="Photo Gallery - C (Mobile)" />,
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
  desktop: [
    {
      name: "Photo Gallery - A (Desktop)",
      image: (
        <img src={desktopPhotoGalleryA} alt="Photo Gallery - A (Desktop)" />
      ),
      styles: {
        image: {
          position: { value: "relative", unit: "" },
          top: { value: 0, unit: "%" },
          left: { value: 0, unit: "%" },
          width: { value: 55, unit: "%" },
          height: { value: 100, unit: "%" },
          float: { value: "left", unit: "" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "80%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
        title: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 45, unit: "%" },
          float: { value: "left", unit: "" },
          margin: { value: "30% 0 5px 0", unit: "" },
          padding: { value: "0 30px", unit: "" },
          fontSize: { value: 20, unit: "px" },
          fontWeight: { value: "bold", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "left", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "uppercase", unit: "" },
          caption: { value: "Lorem Ipsum Dolor", unit: "" },
        },
        description: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 45, unit: "%" },
          float: { value: "left", unit: "" },
          margin: { value: "0", unit: "" },
          padding: { value: "0 30px", unit: "" },
          fontSize: { value: 18, unit: "px" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "left", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "normal", unit: "" },
          caption: {
            value:
              "Integer venenatis nisl vel efficitur viverra. Mauris scelerisque quam mi, eget venenatis risus sodales sit amet.",
            unit: "",
          },
        },
      },
    },
    {
      name: "Photo Gallery - B (Desktop)",
      image: (
        <img src={desktopPhotoGalleryB} alt="Photo Gallery - B (Desktop)" />
      ),
      styles: {
        image: {
          position: { value: "relative", unit: "" },
          top: { value: 0, unit: "%" },
          left: { value: 0, unit: "%" },
          width: { value: 55, unit: "%" },
          height: { value: 100, unit: "%" },
          float: { value: "left", unit: "" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "80%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
        description: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 45, unit: "%" },
          float: { value: "left", unit: "" },
          margin: { value: "30% 0 0 0", unit: "" },
          padding: { value: "0 30px", unit: "" },
          fontSize: { value: 18, unit: "px" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "left", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "normal", unit: "" },
          caption: {
            value:
              "Integer venenatis nisl vel efficitur viverra. Mauris scelerisque quam mi, eget venenatis risus sodales sit amet.",
            unit: "",
          },
        },
      },
    },
    {
      name: "Photo Gallery - C (Desktop)",
      image: (
        <img src={desktopPhotoGalleryC} alt="Photo Gallery - C (Desktop)" />
      ),
      styles: {
        image: {
          position: { value: "relative", unit: "" },
          top: { value: 0, unit: "%" },
          left: { value: 0, unit: "%" },
          width: { value: 55, unit: "%" },
          height: { value: 100, unit: "%" },
          float: { value: "left", unit: "" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "80%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
        title: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 45, unit: "%" },
          float: { value: "left", unit: "" },
          margin: { value: "35% 0 0 0", unit: "" },
          padding: { value: "0 30px", unit: "" },
          fontSize: { value: 20, unit: "px" },
          fontWeight: { value: "bold", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "uppercase", unit: "" },
          caption: { value: "Lorem Ipsum Dolor", unit: "" },
        },
      },
    },
    {
      name: "Photo Gallery - D (Desktop)",
      image: (
        <img src={desktopPhotoGalleryD} alt="Photo Gallery - D (Desktop)" />
      ),
      styles: {
        image: {
          position: { value: "absolute", unit: "" },
          top: { value: 0, unit: "%" },
          left: { value: 45, unit: "%" },
          width: { value: 55, unit: "%" },
          height: { value: 100, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "80%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
        title: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 45, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "30% 0 5px 0", unit: "" },
          padding: { value: "0 30px", unit: "" },
          fontSize: { value: 20, unit: "px" },
          fontWeight: { value: "bold", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "right", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "uppercase", unit: "" },
          caption: { value: "Lorem Ipsum Dolor", unit: "" },
        },
        description: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 45, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "0", unit: "" },
          padding: { value: "0 30px", unit: "" },
          fontSize: { value: 18, unit: "px" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "right", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "normal", unit: "" },
          caption: {
            value:
              "Integer venenatis nisl vel efficitur viverra. Mauris scelerisque quam mi, eget venenatis risus sodales sit amet.",
            unit: "",
          },
        },
      },
    },
    {
      name: "Photo Gallery - E (Desktop)",
      image: (
        <img src={desktopPhotoGalleryE} alt="Photo Gallery - E (Desktop)" />
      ),
      styles: {
        image: {
          position: { value: "absolute", unit: "" },
          top: { value: 0, unit: "%" },
          left: { value: 45, unit: "%" },
          width: { value: 55, unit: "%" },
          height: { value: 100, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "80%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
        description: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 45, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "30% 0 0 0", unit: "" },
          padding: { value: "0 30px", unit: "" },
          fontSize: { value: 18, unit: "px" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "right", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "normal", unit: "" },
          caption: {
            value:
              "Integer venenatis nisl vel efficitur viverra. Mauris scelerisque quam mi, eget venenatis risus sodales sit amet.",
            unit: "",
          },
        },
      },
    },
    {
      name: "Photo Gallery - F (Desktop)",
      image: (
        <img src={desktopPhotoGalleryF} alt="Photo Gallery - F (Desktop)" />
      ),
      styles: {
        image: {
          position: { value: "absolute", unit: "" },
          top: { value: 0, unit: "%" },
          left: { value: 45, unit: "%" },
          width: { value: 55, unit: "%" },
          height: { value: 100, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "80%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
        title: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 45, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "35% 0 0 0", unit: "" },
          padding: { value: "0 30px", unit: "" },
          fontSize: { value: 20, unit: "px" },
          fontWeight: { value: "bold", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "uppercase", unit: "" },
          caption: { value: "Lorem Ipsum Dolor", unit: "" },
        },
      },
    },
    {
      name: "Photo Gallery - G (Desktop)",
      image: (
        <img src={desktopPhotoGalleryG} alt="Photo Gallery - G (Desktop)" />
      ),
      styles: {
        image: {
          position: { value: "absolute", unit: "" },
          top: { value: 0, unit: "%" },
          left: { value: 0, unit: "%" },
          width: { value: 100, unit: "%" },
          height: { value: 100, unit: "%" },
          float: { value: "left", unit: "" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "50%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
      },
    },
    {
      name: "Photo Gallery - H (Desktop)",
      image: (
        <img src={desktopPhotoGalleryH} alt="Photo Gallery - H (Desktop)" />
      ),
      styles: {
        image: {
          position: { value: "absolute", unit: "" },
          top: { value: 20, unit: "%" },
          left: { value: 0, unit: "%" },
          width: { value: 100, unit: "%" },
          height: { value: 80, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "70%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
        title: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 100, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "25px 0 5px 0", unit: "" },
          padding: { value: "0 30px", unit: "" },
          fontSize: { value: 20, unit: "px" },
          fontWeight: { value: "bold", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "uppercase", unit: "" },
          caption: { value: "Lorem Ipsum Dolor", unit: "" },
        },
        description: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 100, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "0", unit: "" },
          padding: { value: "0 100px", unit: "" },
          fontSize: { value: 18, unit: "px" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "normal", unit: "" },
          caption: {
            value:
              "Integer venenatis nisl vel efficitur viverra. Mauris scelerisque quam mi, eget venenatis risus sodales sit amet.",
            unit: "",
          },
        },
      },
    },
    {
      name: "Photo Gallery - I (Desktop)",
      image: (
        <img src={desktopPhotoGalleryI} alt="Photo Gallery - I (Desktop)" />
      ),
      styles: {
        image: {
          position: { value: "absolute", unit: "" },
          top: { value: 15, unit: "%" },
          left: { value: 0, unit: "%" },
          width: { value: 100, unit: "%" },
          height: { value: 85, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "70%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
        description: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 100, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "25px 0 0 0", unit: "" },
          padding: { value: "0 100px", unit: "" },
          fontSize: { value: 18, unit: "px" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "normal", unit: "" },
          caption: {
            value:
              "Integer venenatis nisl vel efficitur viverra. Mauris scelerisque quam mi, eget venenatis risus sodales sit amet.",
            unit: "",
          },
        },
      },
    },
    {
      name: "Photo Gallery - J (Desktop)",
      image: (
        <img src={desktopPhotoGalleryJ} alt="Photo Gallery - J (Desktop)" />
      ),
      styles: {
        image: {
          position: { value: "absolute", unit: "" },
          top: { value: 12, unit: "%" },
          left: { value: 0, unit: "%" },
          width: { value: 100, unit: "%" },
          height: { value: 88, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "70%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
        title: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 100, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "25px 0 5px 0", unit: "" },
          padding: { value: "0 30px", unit: "" },
          fontSize: { value: 20, unit: "px" },
          fontWeight: { value: "bold", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "uppercase", unit: "" },
          caption: { value: "Lorem Ipsum Dolor", unit: "" },
        },
      },
    },
    {
      name: "Photo Gallery - K (Desktop)",
      image: (
        <img src={desktopPhotoGalleryK} alt="Photo Gallery - K (Desktop)" />
      ),
      styles: {
        image: {
          position: { value: "relative", unit: "" },
          top: { value: 0, unit: "%" },
          left: { value: 0, unit: "%" },
          width: { value: 100, unit: "%" },
          height: { value: 80, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "70%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
        title: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 100, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "20px 0 5px 0", unit: "" },
          padding: { value: "0 30px", unit: "" },
          fontSize: { value: 20, unit: "px" },
          fontWeight: { value: "bold", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "uppercase", unit: "" },
          caption: { value: "Lorem Ipsum Dolor", unit: "" },
        },
        description: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 100, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "0", unit: "" },
          padding: { value: "0 100px", unit: "" },
          fontSize: { value: 18, unit: "px" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "normal", unit: "" },
          caption: {
            value:
              "Integer venenatis nisl vel efficitur viverra. Mauris scelerisque quam mi, eget venenatis risus sodales sit amet.",
            unit: "",
          },
        },
      },
    },
    {
      name: "Photo Gallery - L (Desktop)",
      image: (
        <img src={desktopPhotoGalleryL} alt="Photo Gallery - L (Desktop)" />
      ),
      styles: {
        image: {
          position: { value: "relative", unit: "" },
          top: { value: 0, unit: "%" },
          left: { value: 0, unit: "%" },
          width: { value: 100, unit: "%" },
          height: { value: 85, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "70%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
        description: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 100, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "20px 0 0 0", unit: "" },
          padding: { value: "0 100px", unit: "" },
          fontSize: { value: 18, unit: "px" },
          fontWeight: { value: "normal", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "normal", unit: "" },
          caption: {
            value:
              "Integer venenatis nisl vel efficitur viverra. Mauris scelerisque quam mi, eget venenatis risus sodales sit amet.",
            unit: "",
          },
        },
      },
    },
    {
      name: "Photo Gallery - M (Desktop)",
      image: (
        <img src={desktopPhotoGalleryM} alt="Photo Gallery - M (Desktop)" />
      ),
      styles: {
        image: {
          position: { value: "ralative", unit: "" },
          top: { value: 0, unit: "%" },
          left: { value: 0, unit: "%" },
          width: { value: 100, unit: "%" },
          height: { value: 88, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "0", unit: "" },
          backgroundPositionX: { value: 50, unit: "%" },
          backgroundPositionY: { value: 50, unit: "%" },
          backgroundSize: { value: "70%", unit: "" },
          backgroundColor: { value: "#C0E6DE", unit: "" },
        },
        title: {
          position: { value: "relative", unit: "" },
          top: { value: "auto", unit: "" },
          left: { value: "auto", unit: "" },
          width: { value: 100, unit: "%" },
          float: { value: "none", unit: "" },
          margin: { value: "20px 0 5px 0", unit: "" },
          padding: { value: "0 30px", unit: "" },
          fontSize: { value: 20, unit: "px" },
          fontWeight: { value: "bold", unit: "" },
          color: { value: "#000000", unit: "" },
          textAlign: { value: "center", unit: "" },
          lineHeight: { value: 1.3, unit: "" },
          textTransform: { value: "uppercase", unit: "" },
          caption: { value: "Lorem Ipsum Dolor", unit: "" },
        },
      },
    },
  ],
};

export default photoGalleryPresets;
