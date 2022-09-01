import './CustomTable.scss';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { TableProps } from './types';
import TableRow from '@mui/material/TableRow';

const CustomTable: React.FC<TableProps> = ({ headers, data }) => {
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

  const handleRowClick = (event: React.MouseEvent<unknown>, index: number) => {};

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

export default CustomTable;
