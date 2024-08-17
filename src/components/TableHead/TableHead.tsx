import {
  TableCell,
  TableHead as MUITableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import { EnhancedTableProps, IFormatRepo } from '../../types';
import { Columns } from '../../utils/columns';

export function TableHead(props: EnhancedTableProps) {
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
