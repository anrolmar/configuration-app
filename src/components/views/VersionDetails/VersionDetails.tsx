import './VersionDetails.scss';

import { ConnectedProps, connect } from 'react-redux';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';

import CustomDetails from '../../ui/CustomDetails/CustomDetails';
import { RootState } from '../../../reducers/root.reducers';
import { selectSelectedApplication } from '../../../reducers/configuration/configuration.selectors';

const VersionDetails: React.FC<VersionDetailsProps> = ({ selectedApplication }) => {
  const [versionDate, setVersionDate] = useState<string>('');
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    setVersionDate('');
    setShowDetails(false);
  }, [selectedApplication]);

  const renderVersionDates = () => {
    return selectedApplication?.versions.map((version, index) => {
      return (
        <MenuItem value={version.date} key={index}>
          {version.date}
        </MenuItem>
      );
    });
  };

  const handleVersionChange = (event: SelectChangeEvent) => {
    setVersionDate(event.target.value);
    setShowDetails(true);
  };

  return (
    <div className="versions">
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="select-version-date-label">Date</InputLabel>
        <Select
          labelId="select-version-date-label"
          id="select-version-date"
          value={versionDate}
          label="Version Date"
          onChange={handleVersionChange}
        >
          {renderVersionDates()}
        </Select>
      </FormControl>
      {showDetails && <CustomDetails version={versionDate} />}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedApplication: selectSelectedApplication(state),
});

const connector = connect(mapStateToProps);

type VersionDetailsProps = ConnectedProps<typeof connector>;

export default connector(VersionDetails);
