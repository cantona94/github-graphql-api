import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Table as MUITable } from '@mui/material/';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { RepoInfo, TableHead, TableRow } from '..';
import type { RootState } from '../../store';
import { IFormatRepo, Order } from '../../types';
import { formatRepos } from '../../utils/formatRepos';
import { stableSort } from '../../utils/stableSort';
import { getComparator } from '../../utils/getComparator';
import styles from './Main.module.scss';

type Props = {
  searchString: string;
};

export const Main = ({ searchString }: Props) => {
  const [newRepos, setNewRepos] = useState<IFormatRepo[] | null>(null);
  const [visibleRows, setVisibleRows] = useState<IFormatRepo[] | null>(null);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof IFormatRepo>('forkCount');
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [selected, setSelected] = useState<string>('');

  const { repos, loading, error } = useSelector(
    (state: RootState) => state.reposSlice
  );

  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: keyof IFormatRepo
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let emptyRows = 0;
  if (newRepos) {
    emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - newRepos.length) : 0;
  }

  useEffect(() => {
    if (repos) {
      setNewRepos(formatRepos(repos));
    }
  }, [repos]);

  useEffect(() => {
    setOrder('asc');
    setOrderBy('forkCount');
    setPage(0);
    setRowsPerPage(5);
    setNewRepos(null);
    setVisibleRows(null);
    setSelected('');
  }, [searchString]);

  useEffect(() => {
    if (newRepos) {
      setVisibleRows(
        stableSort(newRepos, getComparator(order, orderBy)).slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        )
      );
    }
  }, [newRepos, order, orderBy, page, rowsPerPage]);

  if (loading) return <h1 className={styles.welcome}>Поиск...</h1>;
  if (error) return `Error! ${error}`;

  return (
    <>
      <main className={styles.main}>
        {searchString && newRepos ? (
          visibleRows?.length ? (
            <div className={styles.blog}>
              <div className={styles.blog__repo}>
                <h3 className={styles.h3}>Результаты поиска</h3>
                <div className={styles.table}>
                  <TableContainer
                    sx={{
                      minWidth: '250px',
                      marginLeft: '32px',
                      overflow: 'auto',
                    }}
                  >
                    <MUITable>
                      <TableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                      />
                      <TableBody>
                        <TableRow
                          visibleRows={visibleRows}
                          emptyRows={emptyRows}
                          selected={selected}
                          setSelected={setSelected}
                        />
                      </TableBody>
                    </MUITable>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 8, 10]}
                    component="div"
                    count={newRepos.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    sx={{ overflow: 'hidden' }}
                  />
                </div>
              </div>
              <div
                className={`${styles.blog__description} + ' ' + ${
                  selected ? '' : styles.blog_selection
                }`}
              >
                {selected ? (
                  <RepoInfo selected={selected} />
                ) : (
                  <h5>Выберите репозиторий</h5>
                )}
              </div>
            </div>
          ) : (
            <h1 className={styles.welcome}>Ничего не найдено</h1>
          )
        ) : (
          <h1 className={styles.welcome}>Добро пожаловать</h1>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
};
