import { useSelector } from "react-redux";
import { stylesToCSS } from "../../../../utils/styles";

const DesktopPhotoGalleryCSS = (componentID) => {
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
    position: ${title.position};
    top: ${title.top};
    left: ${title.left};
    float: ${title.float};
    margin: ${title.margin};
    width: ${title.width};
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
    position: ${description.position};
    top: ${description.top};
    left: ${description.left};
    float: ${description.float};
    margin: ${description.margin};
    width: ${description.width};
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
${cssClass}.gl-slide-holder {
    height: 100% !important;
}
${cssClass}.gl-slide {
    background-color: #fff;
}
${cssClass}.gl-slide-image {
    display: block;
    position: ${image.position};
    top: ${image.top};
    left: ${image.left};
    width: ${image.width} !important;
    height: ${image.height} !important;
    float: ${image.float};
    margin: ${image.margin};
    background-position-x: ${image.backgroundPositionX} !important;
    background-position-y: ${image.backgroundPositionY} !important;
    background-size: ${image.backgroundSize} !important;
    background-color: ${image.backgroundColor};
    background-repeat: no-repeat !important;
    box-sizing: border-box;
}
${cssClass}.gl-thumbs{
    display: none;
}${titleCSS}${descriptionCSS}`;
};

export default DesktopPhotoGalleryCSS;
