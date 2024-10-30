import axios from 'axios';

const cookieClick = async () => {
  const response = await axios.post('http://localhost:5000/api/game/click');
  setCookieCount(response.data.cookieCount);
};

const refreshStats = async () => {
  const response = await axios.get('http://localhost:5000/api/game/stats');
  setCookieCount(response.data.cookieCount);
};
