import { useSelector } from "react-redux";
import MobileMenuCSS from "./Mobile/MobileMenuCSS";
import MobileStoreLocatorCSS from "./Mobile/MobileStoreLocatorCSS";
import MobileCustomCSS from "./Mobile/MobileCustomCSS";
import {
  layoutCSS,
  photoGalleryCSS,
  videoGalleryCSS,
} from "../../common/helpers";

const GenerateCSS = () => {
  const components = useSelector(
    (state) => state.build.components.componentsByIds
  );
  const layoutType = useSelector((state) => state.build.layoutType);

  return `${layoutCSS(layoutType)}${
    layoutType === "mobile" ? MobileMenuCSS() : ""
  }${Object.entries(components)
    .map(([componentID, component]) => {
      if (component.type === "Photo Gallery") {
        return photoGalleryCSS(layoutType, componentID);
      } else if (component.type === "Video Gallery") {
        return videoGalleryCSS(layoutType, componentID);
      } else if (component.type === "Store Locator") {
        return MobileStoreLocatorCSS(componentID);
      } else if (component.type === "Custom") {
        return MobileCustomCSS(componentID);
      } else {
        return "";
      }
    })
    .join("")}`;
};

export default GenerateCSS;
