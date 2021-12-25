import { useSelector } from "react-redux";
import { stylesToCSS } from "../../../utils/styles";

const VideoGalleryCSS = (componentID) => {
  const { video, title, description } = stylesToCSS(
    useSelector((state) => state.videoGallery[componentID].styles)
  );

  const titleCSS = title
    ? `
.gl-slide-title {
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
.gl-slide-title {
  display: none;
}`;

  const descriptionCSS = description
    ? `
.gl-slide-desc {
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
.gl-slide-desc {
  display: none;
}`;

  return `
div.video-js video.vjs-tech {
    height: 100%;
}
div.gl-video-tag {
  height: ${video.height};
  border-top-left-radius: ${video.borderTopLeftRadius};
  border-top-right-radius: ${video.borderTopRightRadius};
  border-bottom-left-radius: ${video.borderBottomLeftRadius};
  border-bottom-right-radius: ${video.borderBottomRightRadius};
  overflow: hidden;
  width: ${video.width} !important;
  margin: ${video.margin} !important;
  box-sizing: border-box;
}
.video-js, .vjs-no-js {
    background-color: ${video.backgroundColor};
}

${titleCSS}
${descriptionCSS}

.desc-toggle {
  display: none !important;
}
`;
};

export default VideoGalleryCSS;
