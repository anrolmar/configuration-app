import './CustomDetails.scss';

import { ConnectedProps, connect } from 'react-redux';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import MetaData from '../../views/MetaData/MetaData';
import { RootState } from '../../../reducers/root.reducers';
import Tab from '@mui/material/Tab';
import TabPanel from '../TabPanel/TabPanel';
import Tabs from '@mui/material/Tabs';
import TechnicalData from '../../views/TechnicalData/TechnicalData';
import { selectSelectedApplication } from '../../../reducers/configuration/configuration.selectors';
import { useState } from 'react';

const CustomDetails: React.FC<DetailProps> = ({ selectedApplication }) => {
  const [value, setValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleTabChange}>
          <Tab label="Meta Data" />
          <Tab label="Technical Data" />
        </Tabs>
      </Box>

      <TabPanel className="tab-panel" value={value} index={0}>
        <MetaData />
      </TabPanel>

      <TabPanel className="tab-panel" value={value} index={1}>
        <TechnicalData />
      </TabPanel>

      <Button variant="outlined">Save</Button>
    </Box>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedApplication: selectSelectedApplication(state),
});

const connector = connect(mapStateToProps);

type DetailProps = ConnectedProps<typeof connector>;

export default connector(CustomDetails);
