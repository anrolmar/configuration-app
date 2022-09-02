import './Configurations.scss';

import { ConnectedProps, connect, useSelector } from 'react-redux';

import CustomDetails from '../../ui/CustomDetails/CustomDetails';
import CustomTable from '../../ui/CustomTable/CustomTable';
import { RootState } from '../../../reducers/root.reducers';
import { selectApplications } from '../../../reducers/configuration/configuration.selectors';

const Configurations: React.FC<ConfigurationProps> = ({ showApplication }) => {
  const headers = [
    { type: 'metaData', field: 'name', label: 'Name' },
    { type: 'metaData', field: 'owner', label: 'Owner' },
    { type: 'metaData', field: 'manager', label: 'Manager' },
  ];

  const applications = useSelector(selectApplications);

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

const connector = connect(mapStateToProps);

type ConfigurationProps = ConnectedProps<typeof connector>;

export default connector(Configurations);
