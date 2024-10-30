import axios from 'axios';

const handleClick = async () => {
  const response = await axios.post('http://localhost:5277/api/game/click');
  return response; 
};

const getStats = async () => {
  const response = await axios.get('http://localhost:5277/api/game/stats');
  return response; 
};

export default {
  handleClick,
  getStats,
};
