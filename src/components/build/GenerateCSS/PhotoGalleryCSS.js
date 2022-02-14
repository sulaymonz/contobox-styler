import { useSelector } from "react-redux";
import { stylesToCSS } from "../../../utils/styles";

const PhotoGalleryCSS = (componentID) => {
  const { image, title, description } = stylesToCSS(
    useSelector((state) => state.photoGallery[componentID].styles)
  );
  const customClass = useSelector(
    (state) => state.build.components.componentsByIds[componentID].customClass
  );
  const cssClass = customClass ? `.${customClass} ` : "";

  const titleCSS = title
    ? `
${cssClass}.gl-slide-title {
  width: ${title.width};
  margin: 0;
  padding: ${title.padding};
  font-size: ${title.fontSize};
  font-weight: ${title.fontWeight};
  color: ${title.color};
  text-align: ${title.textAlign};
  line-height: ${title.lineHeight};
  text-transform: ${title.textTransform};
  box-sizing: border-box;
}`
    : `
${cssClass}.gl-slide-title {
  display: none;
}`;

  const descriptionCSS = description
    ? `
${cssClass}.gl-slide-desc {
  width: ${description.width};
  margin: 0;
  padding: ${description.padding};
  font-size: ${description.fontSize};
  font-weight: ${description.fontWeight};
  color: ${description.color};
  text-align: ${description.textAlign};
  line-height: ${description.lineHeight};
  text-transform: ${description.textTransform};
  box-sizing: border-box;
}`
    : `
${cssClass}.gl-slide-desc {
  display: none;
}`;

  return `
${cssClass}.gl-slide {
  overflow: hidden;
}
${cssClass}.gl-slide-image {
  width: ${image.width} !important;
  height: ${image.height} !important;
  margin: ${image.margin} !important;
  background-position-x: ${image.backgroundPositionX} !important;
  background-position-y: ${image.backgroundPositionY} !important;
  background-size: ${image.backgroundSize} !important;
  background-color: ${image.backgroundColor} !important;
  box-sizing: border-box;
}

${titleCSS}
${descriptionCSS}

${cssClass}.desc-toggle {
  display: none !important;
}
`;
};

export default PhotoGalleryCSS;
