import './TechnicalData.scss';

import { Application, Role, Version } from '../../../types';
import { FormControl, InputLabel, List, ListItem, ListItemButton, ListItemText, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';

import { RootState } from '../../../reducers/root.reducers';
import { SelectChangeEvent } from '@mui/material';
import { TechnicalDataProps } from './types';
import { connect } from 'react-redux';
import { selectSelectedApplication } from '../../../reducers/configuration/configuration.selectors';
import useConfigurations from '../../../hooks/useConfigurations';

const TechnicalData: React.FC<Props> = ({ version, selectedApplication }) => {
  let versionData: Version | undefined;

  const { getVersion, getLastVersion } = useConfigurations();

  if (version) {
    versionData = getVersion(selectedApplication, version);
  } else {
    if (selectedApplication) versionData = getLastVersion(selectedApplication);
  }

  const [role, setRole] = useState('');
  const [permissions, setPermissions] = useState<string[]>([]);
  useEffect(() => {
    setRole('');
    setPermissions([]);
  }, [selectedApplication, version]);

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

  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
    const currentPermissions = versionData?.technicalData.roles.find(
      (role: Role) => role.name === event.target.value,
    )?.permissions;

    if (currentPermissions) setPermissions(currentPermissions);
  };

  return (
    <div className="technical-data">
      <div className="roles">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="select-role-label">Roles</InputLabel>
          <Select labelId="select-role-label" id="select-role" value={role} label="Role" onChange={handleRoleChange}>
            <MenuItem value={'user'}>User</MenuItem>
            <MenuItem value={'admin'}>Admin</MenuItem>
          </Select>
        </FormControl>
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

interface StateProps {
  selectedApplication?: Application;
}

type Props = StateProps & TechnicalDataProps;

export default connect(mapStateToProps, null)(TechnicalData);
