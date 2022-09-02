import { Application, Version } from '../types';

const useConfigurations = () => {
  const getConfigurations = (): Application[] => {
    return [
      {
        id: '1',
        versions: [
          {
            date: '31/08/2022',
            metaData: {
              name: 'Library',
              owner: 'Owner1',
              manager: 'Manager1',
            },
            technicalData: {
              roles: [
                {
                  name: 'user',
                  permissions: ['Books', 'Authors'],
                },
                {
                  name: 'admin',
                  permissions: ['Books', 'Authors', 'Settings'],
                },
              ],
            },
          },
        ],
      },
      {
        id: '2',
        versions: [
          {
            date: '31/08/2022',
            metaData: {
              name: 'ToDo List',
              owner: 'Owner2',
              manager: 'Manager2',
            },
            technicalData: {
              roles: [
                {
                  name: 'user',
                  permissions: ['Find', 'Add'],
                },
                {
                  name: 'admin',
                  permissions: ['Find', 'Add', 'Remove', 'Settings'],
                },
              ],
            },
          },
          {
            date: '02/09/2022',
            metaData: {
              name: 'ToDo List',
              owner: 'Owner2',
              manager: 'Manager3',
            },
            technicalData: {
              roles: [
                {
                  name: 'user',
                  permissions: ['Find', 'Add', 'Remove'],
                },
                {
                  name: 'admin',
                  permissions: ['Find', 'Add', 'Settings'],
                },
              ],
            },
          },
        ],
      },
    ];
  };

  const getVersion = (application: Application | undefined, versionDate: string): Version | undefined => {
    if (application) return application.versions.find((version) => version.date === versionDate);
    return undefined;
  };

  const getLastVersion = (application: Application | undefined): Version | undefined => {
    if (application) return application.versions[application.versions.length - 1];
    return undefined;
  };

  const getVersionValue = (version: Version, type: string, field: string): string => {
    type VersionKey = keyof typeof version;

    let typeInfo;
    if (type) {
      const versionVar = type as VersionKey;
      typeInfo = version[versionVar];
    } else {
      typeInfo = version;
    }

    type FieldKey = keyof typeof typeInfo;
    const fieldVar = field as FieldKey;

    return typeInfo[fieldVar];
  };

  return {
    getConfigurations,
    getVersion,
    getLastVersion,
    getVersionValue,
  };
};

export default useConfigurations;
