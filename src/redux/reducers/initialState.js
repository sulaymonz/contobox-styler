const initialState = {
  build: {
    layoutType: "",
    layoutPreset: "",
    menuPreset: "",
    components: {
      componentsByIds: {},
      allComponentIds: [],
    },
    step: 1,
    layoutStepView: "LayoutSelector",
    componentTypesStepView: "",
    styleEditorUI: {
      view: "Layout",
      allViews: ["Layout"],
      tab: "preview",
    },
  },
  layout: {},
  menu: {},
  photoGallery: {},
  videoGallery: {},
};

export default initialState;
