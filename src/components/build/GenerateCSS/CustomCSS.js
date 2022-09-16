import { useSelector } from "react-redux";

const CustomCSS = (componentID) => {
  const customClass = useSelector(
    (state) => state.build.components.componentsByIds[componentID].customClass
  );
  const componentIndex = useSelector((state) =>
    state.build.components.allComponentIds.indexOf(componentID)
  );
  const preset = useSelector((state) => state.custom[componentID].preset);
  const cssClass = customClass
    ? `.${customClass}`
    : `.component-frame-${componentIndex}`;
  return preset.includes("Custom - B")
    ? `

${cssClass} .tab-frame-inner {
    background: url("images/tab${componentIndex + 1}-bg.jpg") center no-repeat;
    background-size: cover;
}`
    : "";
};

export default CustomCSS;
