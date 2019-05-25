import { Goal } from '../../interfaces/goal';

module.exports = [
  {
    method: 'GET', path: '/goals', handler: (request: Request, h: any) => {
      return handleGet();
    }
  }
];

function handleGet() {
  const goal: Goal = {
    id: 1,
    description: 'Challenge yourself'
  };
  const goal2: Goal = {
    id: 2,
    description: 'Programming 10 hours a day'
  };
  const goals = [];
  goals.push(goal);
  goals.push(goal2);
  return goals;
}

