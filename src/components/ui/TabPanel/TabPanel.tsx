import { TabPanelProps } from './types';

const TabPanel: React.FC<TabPanelProps> = ({ children, value, className, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      className={className}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
};

export default TabPanel;
