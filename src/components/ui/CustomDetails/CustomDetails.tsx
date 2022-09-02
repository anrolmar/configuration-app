import './CustomDetails.scss';

import { useEffect, useState } from 'react';

import { Application } from '../../../types';
import Box from '@mui/material/Box';
import { DetailsProps } from './types';
import MetaData from '../../views/MetaData/MetaData';
import { RootState } from '../../../reducers/root.reducers';
import Tab from '@mui/material/Tab';
import TabPanel from '../TabPanel/TabPanel';
import Tabs from '@mui/material/Tabs';
import TechnicalData from '../../views/TechnicalData/TechnicalData';
import { connect } from 'react-redux';
import { selectSelectedApplication } from '../../../reducers/configuration/configuration.selectors';

const CustomDetails: React.FC<Props> = ({ version, selectedApplication }) => {
  const [tabValue, setTabValue] = useState(0);
  useEffect(() => {
    setTabValue(0);
  }, [selectedApplication]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Meta Data" />
          <Tab label="Technical Data" />
        </Tabs>
      </Box>

      <TabPanel className="tab-panel" value={tabValue} index={0}>
        <MetaData version={version} />
      </TabPanel>

      <TabPanel className="tab-panel" value={tabValue} index={1}>
        <TechnicalData version={version} />
      </TabPanel>
    </Box>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedApplication: selectSelectedApplication(state),
});

interface StateProps {
  selectedApplication?: Application;
}

type Props = StateProps & DetailsProps;

export default connect(mapStateToProps, null)(CustomDetails);
