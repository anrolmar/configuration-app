import './Applications.scss';

import { ConnectedProps, connect, useSelector } from 'react-redux';

import CustomTable from '../../ui/CustomTable/CustomTable';
import { RootState } from '../../../reducers/root.reducers';
import VersionDetails from '../VersionDetails/VersionDetails';
import { selectApplications } from '../../../reducers/configuration/configuration.selectors';

const Applications: React.FC<ApplicationProps> = ({ showApplication }) => {
  const headers = [
    { type: 'metaData', field: 'name', label: 'Name' },
    { field: 'date', label: 'Last version' },
  ];
  const applications = useSelector(selectApplications);

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

const connector = connect(mapStateToProps);

type ApplicationProps = ConnectedProps<typeof connector>;

export default connector(Applications);
