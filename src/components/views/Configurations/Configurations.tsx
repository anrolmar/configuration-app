import './Configurations.scss';

import { Button } from '@mui/material';
import CustomDetails from '../../ui/CustomDetails/CustomDetails';
import CustomTable from '../../ui/CustomTable/CustomTable';
import { selectApplications } from '../../../reducers/configuration/configuration.selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Configurations: React.FC = () => {
  const headers = ['Name', 'Owner', 'Manager'];
  const versions = useSelector(selectApplications);

  const [isShown, setIsShown] = useState(false);

  const renderTable = () => {
    if (versions && versions.length > 0) return <CustomTable headers={headers} data={versions} />;
    else return <span>There's no configurations</span>;
  };

  const handleAddApplication = () => setIsShown(true);

  return (
    <div className="configuration">
      <div className="table">
        <div className="buttons">
          <Button variant="outlined" onClick={() => handleAddApplication()}>
            Add
          </Button>
        </div>
        {renderTable()}
      </div>
      {isShown && (
        <div className="details">
          <CustomDetails />
        </div>
      )}
    </div>
  );
};

export default Configurations;
