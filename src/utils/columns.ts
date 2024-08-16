interface Column {
  id: 'name' | 'language' | 'forkCount' | 'starCount' | 'updatedAt';
  label: string;
  minWidth?: number;
  align?: 'left';
  sort: boolean;
}

export const Columns: readonly Column[] = [
  { id: 'name', label: 'Название', minWidth: 50, sort: false },
  { id: 'language', label: 'Язык', minWidth: 50, sort: false },
  {
    id: 'forkCount',
    label: 'Число форков',
    minWidth: 50,
    align: 'left',
    sort: true,
  },
  {
    id: 'starCount',
    label: 'Число звезд',
    minWidth: 50,
    align: 'left',
    sort: true,
  },
  {
    id: 'updatedAt',
    label: 'Дата обновления',
    minWidth: 50,
    align: 'left',
    sort: true,
  },
];
