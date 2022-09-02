import './MetaData.scss';

import { Application, Version } from '../../../types';
import { useEffect, useState } from 'react';

import { MetaDataProps } from './types';
import { RootState } from '../../../reducers/root.reducers';
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';
import { selectSelectedApplication } from '../../../reducers/configuration/configuration.selectors';
import useConfigurations from '../../../hooks/useConfigurations';

const MetaData: React.FC<Props> = ({ version, selectedApplication }) => {
  let versionData: Version | undefined;

  const { getVersion, getLastVersion } = useConfigurations();

  if (version) {
    versionData = getVersion(selectedApplication, version);
  } else {
    if (selectedApplication) versionData = getLastVersion(selectedApplication);
  }

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [manager, setManager] = useState('');
  useEffect(() => {
    if (versionData) {
      setName(versionData.metaData.name);
      setOwner(versionData.metaData.owner);
      setManager(versionData.metaData.manager);
    }
  }, [versionData]);

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

interface StateProps {
  selectedApplication?: Application;
}

type Props = StateProps & MetaDataProps;

export default connect(mapStateToProps, null)(MetaData);
