import { produce } from "immer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import storeLocatorPresets from "../../components/build/Presets/storeLocatorPresets";

export default function layoutReducer(
  state = initialState.storeLocator,
  action
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.COMPONENT_STYLE_PRESET_SELECTED:
        if (action.data.componentType === "Store Locator") {
          draft[action.data.componentID] = {
            id: action.data.componentID,
            preset: action.data.preset,
            styles: {
              ...storeLocatorPresets[action.data.layoutType].find(
                (p) => p.name === action.data.preset
              ).styles,
            },
          };
        }
        break;
      case types.UPDATE_STORE_LOCATOR_STYLE:
        draft[action.style.componentID].styles[action.style.target][
          action.style.name
        ] = {
          value: action.style.value,
          unit: action.style.unit,
        };
        break;
      default:
        break;
    }
  });
}
