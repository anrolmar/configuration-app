import { Application } from '../types';

const useConfigurations = () => {
  const getConfigurations = (): Application[] => {
    return [
      {
        id: '1',
        versions: [
          {
            date: new Date(),
            metadata: {
              name: 'Library',
              owner: 'Owner1',
              manager: 'Manager1',
            },
            technicalData: {
              roles: [
                {
                  name: 'User',
                  permissions: ['Books', 'Authors'],
                },
                {
                  name: 'Admin',
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
            metadata: {
              name: 'ToDo List',
              owner: 'Owner2',
              manager: 'Manager2',
            },
            technicalData: {
              roles: [
                {
                  name: 'User',
                  permissions: ['Find', 'Add'],
                },
                {
                  name: 'Admin',
                  permissions: ['Find', 'Add', 'Remove', 'Settings'],
                },
              ],
            },
          },
          {
            date: new Date(),
            metadata: {
              name: 'ToDo List',
              owner: 'Owner2',
              manager: 'Manager3',
            },
            technicalData: {
              roles: [
                {
                  name: 'User',
                  permissions: ['Find', 'Add', 'Remove'],
                },
                {
                  name: 'Admin',
                  permissions: ['Find', 'Add', 'Settings'],
                },
              ],
            },
          },
        ],
      },
    ];
  };

  return {
    getConfigurations,
  };
};

export default useConfigurations;
