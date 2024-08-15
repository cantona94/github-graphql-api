import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGraphQL } from '../../types';

const initialState: IGraphQL = {
  repos: null,
  loading: false,
  error: null,
};

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    getRepos: (state: IGraphQL, action: PayloadAction<IGraphQL>) => {
      state.repos = action.payload.repos;
      state.loading = action.payload.loading;
      state.error = action.payload.error;
    },
  },
});

export const { getRepos } = reposSlice.actions;

export default reposSlice.reducer;
