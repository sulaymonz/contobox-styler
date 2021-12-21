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
      view: "Component #1: Photo Gallery",
      allViews: ["Layout"],
      mode: "styles",
    },
  },
  layout: {},
  menu: {},
  photoGallery: {},
};

export default initialState;
