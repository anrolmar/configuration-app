import './TechnicalData.scss';

import { ConnectedProps, connect } from 'react-redux';
import { FormControl, InputLabel, List, ListItem, ListItemButton, ListItemText, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';

import { RootState } from '../../../reducers/root.reducers';
import { SelectChangeEvent } from '@mui/material';
import { selectSelectedApplication } from '../../../reducers/configuration/configuration.selectors';
import useConfigurations from '../../../hooks/useConfigurations';

const TechnicalData: React.FC<TechnicalDataProps> = ({ selectedApplication }) => {
  const { getLastVersion } = useConfigurations();
  const lastVersion = getLastVersion(selectedApplication);

  const [role, setRole] = useState('');
  const [permissions, setPermissions] = useState<string[]>([]);
  useEffect(() => {
    setRole('');
    setPermissions([]);
  }, [selectedApplication]);

  const renderPermissions = () => {
    if (permissions) {
      return permissions.map((permission: string, index: number) => {
        return (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemText primary={permission} />
            </ListItemButton>
          </ListItem>
        );
      });
    }
  };

  const handleTabChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
    const currentPermissions = lastVersion?.technicalData.roles.find(
      (role) => role.name === event.target.value,
    )?.permissions;

    if (currentPermissions) setPermissions(currentPermissions);
  };

  const handleAddPermission = () => {};

  return (
    <div className="technical-data">
      <div className="roles">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="select-role-label">Roles</InputLabel>
          <Select labelId="select-role-label" id="select-role" value={role} label="Role" onChange={handleTabChange}>
            <MenuItem value={'user'}>User</MenuItem>
            <MenuItem value={'admin'}>Admin</MenuItem>
          </Select>
        </FormControl>
        {/* <TextField size="small" className="input" fullWidth id="application-name" label="Name" variant="outlined" />
        <span onClick={handleAddPermission}>
          <i className="icon fas fa-plus-circle"></i>
        </span> */}
      </div>

      <List className="permissions" disablePadding>
        {renderPermissions()}
      </List>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedApplication: selectSelectedApplication(state),
});

const connector = connect(mapStateToProps);

type TechnicalDataProps = ConnectedProps<typeof connector>;

export default connector(TechnicalData);
