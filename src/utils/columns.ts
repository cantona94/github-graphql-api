interface Column {
  id: 'name' | 'language' | 'forkCount' | 'starCount' | 'updatedAt';
  label: string;
  minWidth?: number;
  align?: 'left';
  sort: boolean;
}

export const Columns: readonly Column[] = [
  { id: 'name', label: 'Название', minWidth: 182, sort: false },
  { id: 'language', label: 'Название', minWidth: 182, sort: false },
  {
    id: 'forkCount',
    label: 'Число форков',
    minWidth: 182,
    align: 'left',
    sort: true,
  },
  {
    id: 'starCount',
    label: 'Число звезд',
    minWidth: 182,
    align: 'left',
    sort: true,
  },
  {
    id: 'updatedAt',
    label: 'Дата обновления',
    minWidth: 182,
    align: 'left',
    sort: true,
  },
];
