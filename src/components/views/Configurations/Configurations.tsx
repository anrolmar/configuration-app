import './Configurations.scss';

import { ConnectedProps, connect, useSelector } from 'react-redux';
import { resetApplication, toggleApplication } from '../../../reducers/configuration/configuration.action-creators';

import { ConfigurationAction } from '../../../reducers/configuration/configuration.actions';
import CustomDetails from '../../ui/CustomDetails/CustomDetails';
import CustomTable from '../../ui/CustomTable/CustomTable';
import { Dispatch } from 'redux';
import { RootState } from '../../../reducers/root.reducers';
import { selectApplications } from '../../../reducers/configuration/configuration.selectors';
import { useEffect } from 'react';

const Configurations: React.FC<ConfigurationProps> = ({ showApplication, toggleApplication, resetApplication }) => {
  const headers = [
    { type: 'metaData', field: 'name', label: 'Name' },
    { type: 'metaData', field: 'owner', label: 'Owner' },
    { type: 'metaData', field: 'manager', label: 'Manager' },
  ];

  const applications = useSelector(selectApplications);
  useEffect(() => {
    resetApplication();
    toggleApplication(false);
  }, []);

  const renderTable = () => {
    if (applications && applications.length > 0) return <CustomTable headers={headers} data={applications} />;
    else return <span>There's no configurations</span>;
  };

  return (
    <div className="configurations">
      <div className="table">{renderTable()}</div>
      {showApplication && (
        <div className="details">
          <CustomDetails />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  showApplication: state.configurations.showApplication,
});

const mapDispatchToProps = (dispatch: Dispatch<ConfigurationAction>) => ({
  toggleApplication: (value: boolean) => dispatch(toggleApplication(value)),
  resetApplication: () => dispatch(resetApplication()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ConfigurationProps = ConnectedProps<typeof connector>;

export default connector(Configurations);
