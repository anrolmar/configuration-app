import { Application } from '../../types';
import { ConfigurationAction } from './configuration.actions';
import { ConfigurationActionType } from './types';

interface ConfigurationState {
  applications: Application[];
  selectedApplication: Application | null;
  showApplication: boolean;
}

const INITIAL_STATE: ConfigurationState = {
  applications: [],
  selectedApplication: null,
  showApplication: false,
};

const configurationReducer = (
  state: ConfigurationState = INITIAL_STATE,
  action: ConfigurationAction,
): ConfigurationState => {
  switch (action.type) {
    case ConfigurationActionType.ADD_APPLICATION:
      return {
        ...state,
        applications: [...state.applications, action.payload],
      };

    case ConfigurationActionType.LOAD_APPLICATIONS:
      return {
        ...state,
        applications: action.payload,
      };

    case ConfigurationActionType.RESET_APPLICATION:
      return {
        ...state,
        selectedApplication: null,
      };

    case ConfigurationActionType.SHOW_APPLICATION:
      return {
        ...state,
        showApplication: true,
      };

    case ConfigurationActionType.SET_APPLICATION:
      return {
        ...state,
        selectedApplication: action.payload,
      };

    default:
      return state;
  }
};

export default configurationReducer;
