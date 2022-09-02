import './Applications.scss';

import { ConnectedProps, connect, useSelector } from 'react-redux';
import { resetApplication, toggleApplication } from '../../../reducers/configuration/configuration.action-creators';

import { ConfigurationAction } from '../../../reducers/configuration/configuration.actions';
import CustomTable from '../../ui/CustomTable/CustomTable';
import { Dispatch } from 'redux';
import { RootState } from '../../../reducers/root.reducers';
import VersionDetails from '../VersionDetails/VersionDetails';
import { selectApplications } from '../../../reducers/configuration/configuration.selectors';
import { useEffect } from 'react';

const Applications: React.FC<ApplicationProps> = ({ showApplication, toggleApplication, resetApplication }) => {
  const headers = [
    { type: 'metaData', field: 'name', label: 'Name' },
    { field: 'date', label: 'Last version' },
  ];
  const applications = useSelector(selectApplications);
  useEffect(() => {
    resetApplication();
    toggleApplication(false);
  }, []);

  const renderTable = () => {
    if (applications && applications.length > 0) return <CustomTable headers={headers} data={applications} />;
    else return <span>There's no applications</span>;
  };

  return (
    <div className="applications">
      <div className="table">{renderTable()}</div>
      {showApplication && (
        <div className="details">
          <VersionDetails />
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

type ApplicationProps = ConnectedProps<typeof connector>;

export default connector(Applications);
