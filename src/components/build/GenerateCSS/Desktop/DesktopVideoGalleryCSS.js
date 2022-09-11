import { useSelector } from "react-redux";
import { stylesToCSS } from "../../../../utils/styles";

const DesktopVideoGalleryCSS = (componentID) => {
  const { video, title, description, arrows, thumbHolder, thumb } = stylesToCSS(
    useSelector((state) => state.videoGallery[componentID].styles)
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
${cssClass}.gl-video-tag {
    display: block;
    position: ${video.position};
    top: ${video.top};
    left: ${video.left};
    width: ${video.width} !important;
    height: ${video.height} !important;
    float: ${video.float};
    margin: ${video.margin};
    background-position-x: ${video.backgroundPositionX} !important;
    background-position-y: ${video.backgroundPositionY} !important;
    background-size: ${video.backgroundSize} !important;
    background-color: ${video.backgroundColor};
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
${cssClass}.gl-thumb-image,
${cssClass}.gl-thumb-border,
${cssClass}.gl-thumb-play {
    display: none;
}
${cssClass}.gl-thumb-prev,
${cssClass}.gl-thumb-next {
    display: none;
}${titleCSS}${descriptionCSS}`;
};

export default DesktopVideoGalleryCSS;
