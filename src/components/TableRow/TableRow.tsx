import { TableRow as MUITableRow } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import { IFormatRepo } from '../../types';

type Props = {
  visibleRows: IFormatRepo[];
  emptyRows: number;
  selected: string;
  setSelected: (value: string) => void;
};

export const TableRow = ({
  visibleRows,
  emptyRows,
  selected,
  setSelected,
}: Props) => {

  const handleClick = (_: React.MouseEvent<unknown>, id: string) => {
    setSelected(id);
  };

  const isSelected = (id: string) => selected === id;

  return (
    <>
      {visibleRows &&
        visibleRows.map((row) => {
          const isItemSelected = isSelected(row.id);

          return (
            <MUITableRow
              hover
              onClick={(event) => handleClick(event, row.id)}
              role="checkbox"
              key={row.id}
              sx={{ cursor: 'pointer' }}
              selected={isItemSelected}
            >
              <TableCell component="th" id={row.name} scope="row" align="left">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.language}</TableCell>
              <TableCell align="left">{row.forkCount}</TableCell>
              <TableCell align="left">{row.starCount}</TableCell>
              <TableCell align="left">
                {new Date(row.updatedAt)
                  .toISOString()
                  .slice(0, 10)
                  .split('-')
                  .reverse()
                  .join('.')}
              </TableCell>
            </MUITableRow>
          );
        })}
        
      {emptyRows > 0 && (
        <MUITableRow style={{}}>
          <TableCell colSpan={6} />
        </MUITableRow>
      )}
    </>
  );
};
