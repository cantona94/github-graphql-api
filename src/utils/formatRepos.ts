import { IRepo, IFormatRepo } from '../types';

export const formatRepos = (repos: IRepo[]) => {
  const newRepos: IFormatRepo[] = [];

  if (repos) {
    for (const repo of repos) {
      newRepos.push({
        id: repo.id,
        name: repo.name,
        language: repo.languages.nodes[0]?.name,
        forkCount: repo.forkCount,
        starCount: repo.stargazers.totalCount,
        updatedAt: new Date(repo.updatedAt).getTime(),
      });
    }
  }

  return newRepos;
};
