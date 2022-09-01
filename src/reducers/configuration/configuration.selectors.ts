import { Application, Version } from '../../types';

import { RootState } from './../root.reducers';
import { createSelector } from 'reselect';

interface LastVersion {
  id: string;
  version: Version;
}

const selectConfiguration = (state: RootState) => state.configurations;

export const selectApplications = createSelector([selectConfiguration], ({ applications }) => {
  let lastVersions: LastVersion[] = [];

  applications.forEach((application: Application) => {
    let lastVersion: Version = application.versions[application.versions.length - 1];

    lastVersions.push({
      id: application.id,
      version: lastVersion,
    });
  });

  return lastVersions;
});

export const selectSelectedApplication = createSelector([selectConfiguration], ({ selectedApplication }) => {
  return selectedApplication;
});
