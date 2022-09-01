import { Application } from '../../types';
import { ConfigurationActionType } from './types';
import { LoadApplicationsAction } from './configuration.actions';

export const loadApplications = (applications: Application[]): LoadApplicationsAction => {
  return {
    type: ConfigurationActionType.LOAD_APPLICATIONS,
    payload: applications,
  };
};
