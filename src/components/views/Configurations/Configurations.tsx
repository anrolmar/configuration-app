import './Configurations.scss';

import { ConnectedProps, connect, useSelector } from 'react-redux';

import { ConfigurationAction } from '../../../reducers/configuration/configuration.actions';
import CustomDetails from '../../ui/CustomDetails/CustomDetails';
import CustomTable from '../../ui/CustomTable/CustomTable';
import { Dispatch } from 'redux';
import { RootState } from '../../../reducers/root.reducers';
import { resetApplication } from '../../../reducers/configuration/configuration.action-creators';
import { selectApplications } from '../../../reducers/configuration/configuration.selectors';

const Configurations: React.FC<ConfigurationProps> = ({ showApplication, resetApplication }) => {
  const headers = ['Name', 'Owner', 'Manager'];
  const applications = useSelector(selectApplications);

  //const [isShown, setIsShown] = useState(false);

  const renderTable = () => {
    if (applications && applications.length > 0) return <CustomTable headers={headers} data={applications} />;
    else return <span>There's no configurations</span>;
  };

  const handleAddApplication = () => {
    //setIsShown(true);
    resetApplication();
  };

  return (
    <div className="configuration">
      <div className="table">
        {/* <div className="buttons">
          <Button variant="outlined" onClick={() => handleAddApplication()}>
            Add
          </Button>
        </div> */}
        {renderTable()}
      </div>
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
  resetApplication: () => dispatch(resetApplication()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ConfigurationProps = ConnectedProps<typeof connector>;

export default connector(Configurations);
