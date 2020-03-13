import * as RankingService from '../services/RankingService';

export const getRanking = async (callback) => {
  const { ranking } = await RankingService.show();
  const rankingWithTemplate = ranking.map(rankingTemplate);

  return callback(rankingWithTemplate);
}

const rankingTemplate = ({
  id, points, created_at, name
}) => ({
  name, id, points, createdAt: new Date(created_at)
});
