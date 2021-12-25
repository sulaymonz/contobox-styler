import { useSelector } from "react-redux";
import MobileLayoutCSS from "./MobileLayoutCSS";
import PhotoGalleryCSS from "./PhotoGalleryCSS";
import VideoGalleryCSS from "./VideoGalleryCSS";

const GenerateCSS = () => {
  const components = useSelector(
    (state) => state.build.components.componentsByIds
  );

  return `
${MobileLayoutCSS()}

${Object.entries(components).map(([componentID, component]) => {
  if (component.type === "Photo Gallery") {
    return PhotoGalleryCSS(componentID);
  } else if (component.type === "Video Gallery") {
    return VideoGalleryCSS(componentID);
  } else {
    return "";
  }
})}
`;
};

export default GenerateCSS;
