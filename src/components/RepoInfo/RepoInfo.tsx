import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Star from '../../assets/Star.svg';
import styles from './RepoInfo.module.scss';

type Props = {
  selected: string;
};
export const RepoInfo = ({ selected }: Props) => {
  const repo = useSelector((state: RootState) =>
    state.reposSlice.repos?.find((el) => el.id === selected)
  );

  if (!repo) return <h3>Нет данных</h3>;

  return (
    <div className={styles.repo}>
      <h3>{repo.name}</h3>
      <p>{repo?.description} </p>
      <div className={styles.repo__main}>
        {repo.primaryLanguage?.name ? (
          <div className={styles.language}>{repo.primaryLanguage.name}</div>
        ) : null}
        <div className={styles.stargazers}>
          <img src={Star} alt="star" />
          <span>{repo.stargazers.totalCount}</span>
        </div>
      </div>
      {repo?.repositoryTopics.nodes.length ? (
        <div className={styles.topic}>
          {repo.repositoryTopics.nodes.map((el, index) => {
            return (
              <span className={styles.topic__item} key={index}>
                {el.topic.name}
              </span>
            );
          })}
        </div>
      ) : null}
      <p> {repo.licenseInfo?.name} </p>
    </div>
  );
};
