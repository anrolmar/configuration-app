import {
  LoadApplicationsAction,
  ResetApplicationAction,
  SetApplicationAction,
  ToggleApplicationAction,
} from './configuration.actions';

import { Application } from '../../types';
import { ConfigurationActionType } from './types';

export const loadApplications = (applications: Application[]): LoadApplicationsAction => {
  return {
    type: ConfigurationActionType.LOAD_APPLICATIONS,
    payload: applications,
  };
};

export const resetApplication = (): ResetApplicationAction => {
  return {
    type: ConfigurationActionType.RESET_APPLICATION,
  };
};

export const setApplication = (application: Application): SetApplicationAction => {
  return {
    type: ConfigurationActionType.SET_APPLICATION,
    payload: application,
  };
};

export const toggleApplication = (value: boolean): ToggleApplicationAction => {
  return {
    type: ConfigurationActionType.TOGGLE_SHOW_APPLICATION,
    payload: value,
  };
};
