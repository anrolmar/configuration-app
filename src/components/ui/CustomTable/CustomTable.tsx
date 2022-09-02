import './CustomTable.scss';

import { setApplication, showApplication } from '../../../reducers/configuration/configuration.action-creators';

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
import useConfigurations from '../../../hooks/useConfigurations';

const CustomTable: React.FC<Props> = ({ headers, data, applications, setApplication, showApplication }) => {
  const { getVersionValue } = useConfigurations();

  const renderHeaders = () => {
    return headers.map((header: any, index: number) => {
      if (index === 0) {
        return <TableCell key={index}>{header.label}</TableCell>;
      } else {
        return (
          <TableCell key={index} align="right">
            {header.label}
          </TableCell>
        );
      }
    });
  };

  const renderCell = (row: any, index: number, type: string, field: string) => {
    const fieldValue = getVersionValue(row, type, field);
    if (index === 0)
      return (
        <TableCell component="th" scope="row" key={index}>
          {fieldValue}
        </TableCell>
      );
    else
      return (
        <TableCell align="right" key={index}>
          {fieldValue}
        </TableCell>
      );
  };

  const handleRowClick = (event: React.MouseEvent<unknown>, index: number) => {
    setApplication(applications[index]);
    showApplication();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="sticky table" stickyHeader>
        <TableHead>
          <TableRow>{renderHeaders()}</TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ version }, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={(event) => handleRowClick(event, index)}
              className="row"
            >
              {headers.map((header, index) => renderCell(version, index, header.type, header.field))}
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

const mapDispatchToProps = (dispatch: Dispatch<ConfigurationAction>) => ({
  setApplication: (application: Application) => dispatch(setApplication(application)),
  showApplication: () => dispatch(showApplication()),
});

interface StateProps {
  applications: Application[];
}
interface DispatchProps {
  setApplication: (application: Application) => void;
  showApplication: () => void;
}

type Props = StateProps & DispatchProps & TableProps;

export default connect(mapStateToProps, mapDispatchToProps)(CustomTable);
