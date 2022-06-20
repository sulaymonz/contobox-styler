import { useSelector } from "react-redux";
import MobileLayoutCSS from "./MobileLayoutCSS";
import MobileMenuCSS from "./MobileMenuCSS";
import PhotoGalleryCSS from "./PhotoGalleryCSS";
import VideoGalleryCSS from "./VideoGalleryCSS";
import StoreLocatorCSS from "./StoreLocatorCSS";
import CustomCSS from "./CustomCSS";

const GenerateCSS = () => {
  const components = useSelector(
    (state) => state.build.components.componentsByIds
  );

  return `
${MobileLayoutCSS()}
${MobileMenuCSS()}

${Object.entries(components)
  .map(([componentID, component]) => {
    if (component.type === "Photo Gallery") {
      return PhotoGalleryCSS(componentID);
    } else if (component.type === "Video Gallery") {
      return VideoGalleryCSS(componentID);
    } else if (component.type === "Store Locator") {
      return StoreLocatorCSS(componentID);
    } else if (component.type === "Custom") {
      return CustomCSS(componentID);
    } else {
      return "";
    }
  })
  .join("")}
`;
};

export default GenerateCSS;
