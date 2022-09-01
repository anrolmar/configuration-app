import './App.scss';

import { ConfigurationAction } from './reducers/configuration/configuration.actions';
import { Dispatch } from 'redux';
import { Header } from './components/layouts';
import { NavBar } from './components/layouts/NavBar/NavBar';
import { loadApplications } from './reducers/configuration/configuration.action-creators';
import useConfigurations from './hooks/useConfigurations';
import { useDispatch } from 'react-redux';

function App() {
  const { getConfigurations } = useConfigurations();
  const dispatch = useDispatch<Dispatch<ConfigurationAction>>();
  dispatch(loadApplications(getConfigurations()));

  return (
    <div className="app">
      <Header />
      <div className="content">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
