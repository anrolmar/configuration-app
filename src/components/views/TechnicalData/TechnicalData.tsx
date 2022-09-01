import './TechnicalData.scss';

import {
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';

import { useState } from 'react';

const TechnicalData: React.FC = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleAddPermission = () => {};

  return (
    <div className="technical-data">
      <div className="roles">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="select-role-label">Roles</InputLabel>
          <Select labelId="select-role-label" id="select-role" value={age} label="Age" onChange={handleChange}>
            <MenuItem value={'user'}>User</MenuItem>
            <MenuItem value={'admin'}>Admin</MenuItem>
          </Select>
        </FormControl>
        <TextField size="small" className="input" fullWidth id="application-name" label="Name" variant="outlined" />
        <span onClick={handleAddPermission}>
          <i className="icon fas fa-plus-circle"></i>
        </span>
      </div>

      <List className="permissions">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default TechnicalData;
