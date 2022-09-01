import './MetaData.scss';

import TextField from '@mui/material/TextField';
import { useState } from 'react';

const MetaData: React.FC = () => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [manager, setManager] = useState('');

  const handleNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleOwnerChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOwner(event.target.value);
  };

  const handleManagerChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setManager(event.target.value);
  };

  return (
    <div className="metadata">
      <TextField
        className="input name"
        size="small"
        fullWidth
        id="application-name"
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleNameChanged}
      />
      <TextField
        className="input"
        size="small"
        fullWidth
        id="application-owner"
        label="Owner"
        variant="outlined"
        value={owner}
        onChange={handleOwnerChanged}
      />
      <TextField
        className="input"
        size="small"
        fullWidth
        id="application-manager"
        label="Manager"
        variant="outlined"
        value={manager}
        onChange={handleManagerChanged}
      />
    </div>
  );
};

export default MetaData;
