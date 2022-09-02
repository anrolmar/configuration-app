import { Application, Version } from '../types';

const useConfigurations = () => {
  const getConfigurations = (): Application[] => {
    return [
      {
        id: '1',
        versions: [
          {
            date: new Date(),
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
            date: new Date(),
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
            date: new Date(),
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

  const getLastVersion = (application: Application | null): Version | null => {
    if (application) return application.versions[application.versions.length - 1];
    return null;
  };

  return {
    getConfigurations,
    getLastVersion,
  };
};

export default useConfigurations;
