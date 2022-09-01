import './CustomTable.scss';

import { Application } from '../../../types';
import { ConfigurationAction } from '../../../reducers/configuration/configuration.actions';
import { Dispatch } from 'redux';
import Paper from '@mui/material/Paper';
import { RootState } from '../../../reducers/root.reducers';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { TableProps } from './types';
import TableRow from '@mui/material/TableRow';
import { connect } from 'react-redux';
import { setApplication } from '../../../reducers/configuration/configuration.action-creators';

const CustomTable: React.FC<Props> = ({ headers, data, applications, setApplication }) => {
  const renderHeaders = () => {
    return headers.map((header: string, index: number) => {
      if (index === 0) {
        return <TableCell key={index}>{header}</TableCell>;
      } else {
        return (
          <TableCell key={index} align="right">
            {header}
          </TableCell>
        );
      }
    });
  };

  const handleRowClick = (event: React.MouseEvent<unknown>, index: number) => {
    setApplication(applications[index]);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="sticky table" stickyHeader>
        <TableHead>
          <TableRow>{renderHeaders()}</TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={(event) => handleRowClick(event, index)}
              className="row"
            >
              <TableCell component="th" scope="row">
                {row.version.metadata.name}
              </TableCell>
              <TableCell align="right">{row.version.metadata.owner}</TableCell>
              <TableCell align="right">{row.version.metadata.manager}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state: RootState) => ({
  applications: state.configurations.applications,
});

const mapDispatchToProps = (dispatch: Dispatch<ConfigurationAction>) => {
  return {
    setApplication: (application: Application) => dispatch(setApplication(application)),
  };
};

interface StateProps {
  applications: Application[];
}
interface DispatchProps {
  setApplication: (application: Application) => void;
}

type Props = StateProps & DispatchProps & TableProps;

export default connect(mapStateToProps, mapDispatchToProps)(CustomTable);
