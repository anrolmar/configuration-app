import './MetaData.scss';

import { ConnectedProps, connect } from 'react-redux';
import { useEffect, useState } from 'react';

import { RootState } from '../../../reducers/root.reducers';
import TextField from '@mui/material/TextField';
import { selectSelectedApplication } from '../../../reducers/configuration/configuration.selectors';
import useConfigurations from '../../../hooks/useConfigurations';

const MetaData: React.FC<MetaDataProps> = ({ selectedApplication }) => {
  const { getLastVersion } = useConfigurations();
  const lastVersion = getLastVersion(selectedApplication);

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [manager, setManager] = useState('');
  useEffect(() => {
    if (lastVersion) {
      setName(lastVersion.metaData.name);
      setOwner(lastVersion.metaData.owner);
      setManager(lastVersion.metaData.manager);
    }
  }, [lastVersion]);

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

const mapStateToProps = (state: RootState) => ({
  selectedApplication: selectSelectedApplication(state),
});

const connector = connect(mapStateToProps);

type MetaDataProps = ConnectedProps<typeof connector>;

export default connector(MetaData);
