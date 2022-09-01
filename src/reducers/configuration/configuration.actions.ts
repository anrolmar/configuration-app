import { Application } from '../../types';
import { ConfigurationActionType } from './types';

export interface LoadApplicationsAction {
  type: ConfigurationActionType.LOAD_APPLICATIONS;
  payload: Application[];
}

export interface AddApplicationAction {
  type: ConfigurationActionType.ADD_APPLICATION;
  payload: Application;
}

export interface ResetApplicationAction {
  type: ConfigurationActionType.RESET_APPLICATION;
}

export interface SetApplicationAction {
  type: ConfigurationActionType.SET_APPLICATION;
  payload: Application;
}

export type ConfigurationAction =
  | LoadApplicationsAction
  | AddApplicationAction
  | ResetApplicationAction
  | SetApplicationAction;
