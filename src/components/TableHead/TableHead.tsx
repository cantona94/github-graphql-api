import {
  TableCell,
  TableHead as MUITableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import { IFormatRepo, Order } from '../../types';
import { Columns } from '../../utils/columns';

interface TableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof IFormatRepo
  ) => void;

  order: Order;
  orderBy: string;
}

export function TableHead(props: TableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof IFormatRepo) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <MUITableHead>
      <TableRow>
        {Columns.map((headCell) =>
          headCell.sort ? (
            <TableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
                style={{ minWidth: headCell.minWidth }}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ) : (
            <TableCell
              key={headCell.id}
              align={headCell.align}
              style={{ minWidth: headCell.minWidth }}
            >
              {headCell.label}
            </TableCell>
          )
        )}
      </TableRow>
    </MUITableHead>
  );
}
