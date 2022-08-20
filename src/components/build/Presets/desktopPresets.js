export const desktopPresets = {
  overlay: {
    backgroundColor: { value: "#ffc0cb", unit: "" },
  },
  navbar: {
    top: { value: 70, unit: "px" },
    bottom: { value: 120, unit: "px" },
    backgroundColor: { value: "#25283d", unit: "" },
    paddingTop: { value: 130, unit: "px" },
  },
  sidebar: {
    top: { value: 50, unit: "px" },
    bottom: { value: 320, unit: "px" },
    backgroundColor: { value: "#ff6f6f", unit: "" },
  },
  logo: {
    width: { value: 140, unit: "px" },
    height: { value: 45, unit: "px" },
    top: { value: 100, unit: "px" },
    left: { value: 30, unit: "px" },
  },
  cta: {
    title: { value: "Learn More", unit: "" },
    bottom: { value: 0, unit: "px" },
    right: { value: 45, unit: "px" },
    width: { value: 170, unit: "px" },
    height: { value: 40, unit: "px" },
    lineHeight: { value: 40, unit: "px" },
    padding: { value: "0", unit: "" },
    fontSize: { value: 16, unit: "px" },
    fontWeight: { value: "bold", unit: "" },
    textTransform: { value: "none", unit: "" },
    textAlign: { value: "center", unit: "" },
    color: { value: "#ffffff", unit: "" },
    backgroundColor: { value: "#ff6f6f", unit: "" },
    border: { value: "none", unit: "" },
    borderRadius: { value: "5", unit: "px" },
  },
  close: {
    top: { value: 0, unit: "px" },
    right: { value: 0, unit: "px" },
    stroke: { value: "#25283d", unit: "" },
    strokeWidth: { value: 14, unit: "%" },
  },
  tabButton: {
    width: { value: 200, unit: "px" },
    height: { value: 40, unit: "px" },
    lineHeight: { value: 40, unit: "px" },
    color: { value: "#ffffff", unit: "" },
    backgroundColor: { value: "#ff6f6f", unit: "" },
    fontSize: { value: 16, unit: "px" },
    fontWeight: { value: "bold", unit: "" },
    textAlign: { value: "left", unit: "" },
    textTransform: { value: "none", unit: "" },
    border: { value: "none", unit: "" },
    borderRadius: { value: 0, unit: "px" },
    padding: { value: "0", unit: "" },
    paddingLeft: { value: "30", unit: "px" },
    margin: { value: "0", unit: "" },
    marginBottom: { value: 5, unit: "px" },
    hoverColor: { value: "autogenerated", unit: "" },
    hoverBackground: { value: "autogenerated", unit: "" },
  },
  socialButton: {
    color: { value: "#fff", unit: "" },
    height: { value: 35, unit: "px" },
    svgWidth: { value: 100, unit: "%" },
    parentMargin: { value: "10px 0", unit: "" },
  },
  socialHeader: {
    height: { value: 45, unit: "px" },
    lineHeight: { value: 1.2, unit: "" },
    color: { value: "#fff", unit: "" },
    fontSize: { value: 11, unit: "px" },
  },
  socialSeparator: {
    width: { value: 60, unit: "%" },
    height: { value: 1, unit: "px" },
    top: { value: 100, unit: "%" },
    left: { value: 20, unit: "%" },
    backgroundColor: { value: "#fff", unit: "" },
  },
  facebook: {},
  twitter: {},
  instagram: {},
  youtube: {},
  pinterest: {},
  linkedin: {},
  lockup: {},
  messageBar: {
    text: { value: "A random message from a random messenger.", unit: "" },
    width: { value: 600, unit: "px" },
    lineHeight: { value: 50, unit: "px" },
    color: { value: "#ffffff", unit: "" },
    fontSize: { value: 16, unit: "px" },
    fontWeight: { value: "normal", unit: "" },
    textTransform: { value: "none", unit: "" },
    padding: { value: "0 15px", unit: "" },
    left: { value: 30, unit: "px" },
  },
  messageIcon: {
    width: { value: 25, unit: "px" },
    differentIcons: { value: "true", unit: "" },
    messageCount: { value: 2, unit: "" },
  },
  messageSeparator: {
    top: { value: 10, unit: "px" },
    bottom: { value: 10, unit: "px" },
    width: { value: 1, unit: "px" },
    backgroundColor: { value: "#fff", unit: "" },
  },
};

export const initialFeatureStack = [
  "overlay",
  "navbar",
  "sidebar",
  "logo",
  "cta",
  "close",
  "tabButton",
  "socialButton",
  "socialHeader",
  "facebook",
  "twitter",
  "instagram",
  "youtube",
  "messageBar",
  "messageIcon",
];

export const sidebarFeatures = [
  "socialButton",
  "socialHeader",
  "socialSeparator",
  "facebook",
  "twitter",
  "instagram",
  "youtube",
  "pinterest",
];

export const socialButtons = [
  "facebook",
  "twitter",
  "instagram",
  "youtube",
  "pinterest",
];

export const messengerFeatures = ["messageIcon", "messageSeparator"];
