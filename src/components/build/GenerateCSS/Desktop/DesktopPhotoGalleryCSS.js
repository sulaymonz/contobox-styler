import { useSelector } from "react-redux";
import { stylesToCSS } from "../../../../utils/styles";

const DesktopPhotoGalleryCSS = (componentID) => {
  const { image, title, description, arrows, thumbHolder, thumb } = stylesToCSS(
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
${cssClass}.gl-slide-prev,
${cssClass}.gl-slide-next {
    display: ${arrows.display};
    top: ${arrows.top} !important;
    width: ${arrows.width} !important;
    height: ${arrows.height} !important;
    background: url("images/arrow.png") center no-repeat;
    background-size: contain;
}
${cssClass}.gl-slide-prev {
    left: ${arrows.distance} !important;
}
${cssClass}.gl-slide-next {
    right: ${arrows.distance} !important;
    -VENDOR-transform: rotate(180deg);
}
${cssClass}.gl-thumbs {
    display: ${thumbHolder.display};
    top: ${thumbHolder.top} !important;
    left: ${thumbHolder.left} !important;
    width: auto !important;
    height: auto !important;
    right: auto !important;
    bottom: auto !important;
    z-index: 999;
}
${cssClass}.gl-thumb-holder,
${cssClass}.gl-thumbs-inner {
    position: relative !important;
    width: auto !important;
    height: auto !important;
    top: auto !important;
    bottom: auto !important;
    left: auto !important;
}
${cssClass}.gl-thumb {
    width: ${thumb.size} !important;
    height: ${thumb.size} !important;
    border-radius: ${thumb.size};
    margin: ${thumb.margin} !important;
    background-color: ${thumb.color};
    opacity: ${thumb.opacity};
}
${cssClass}.gl-thumb.active {
    opacity: 1;
    background-color: ${thumb.activeColor};
}
${cssClass}.gl-thumb-border {
    display: none;
}
${cssClass}.gl-thumb-prev,
${cssClass}.gl-thumb-next {
    display: none;
}
${cssClass}.gl-slide-link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9;
}${titleCSS}${descriptionCSS}`;
};

export default DesktopPhotoGalleryCSS;
