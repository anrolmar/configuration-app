import { Application } from '../../types';
import { ConfigurationAction } from './configuration.actions';
import { ConfigurationActionType } from './types';

interface ConfigurationState {
  applications: Application[];
  selectedApplication: Application | null;
}

const INITIAL_STATE: ConfigurationState = {
  applications: [],
  selectedApplication: null,
};

const configurationReducer = (
  state: ConfigurationState = INITIAL_STATE,
  action: ConfigurationAction,
): ConfigurationState => {
  switch (action.type) {
    case ConfigurationActionType.LOAD_APPLICATIONS:
      return {
        ...state,
        applications: action.payload,
      };

    case ConfigurationActionType.ADD_APPLICATION:
      return {
        ...state,
        applications: [...state.applications, action.payload],
      };

    default:
      return state;
  }
};

export default configurationReducer;
