import React from "react";
import customA from "../../../images/Custom-A.png";
import customB from "../../../images/Custom-B.png";
import desktopCustomA from "../../../images/Desktop-Custom-A.png";
import desktopCustomB from "../../../images/Desktop-Custom-B.png";

const customPresets = {
  mobile: [
    {
      name: "Custom - A (Mobile)",
      image: <img src={customA} alt="Custom - A (Mobile)" />,
    },
    {
      name: "Custom - B (Mobile)",
      image: <img src={customB} alt="Custom - B (Mobile)" />,
    },
  ],
  desktop: [
    {
      name: "Custom - A (Desktop)",
      image: <img src={desktopCustomA} alt="Custom - A (Desktop)" />,
    },
    {
      name: "Custom - B (Desktop)",
      image: <img src={desktopCustomB} alt="Custom - B (Desktop)" />,
    },
  ],
};

export default customPresets;
