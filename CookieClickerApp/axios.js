import axios from 'axios';

const handleClick = async () => {
  const response = await axios.post('http://localhost:5000/api/game/click');
  setCookieCount(response.data.cookieCount);
};

const getStats = async () => {
  const response = await axios.get('http://localhost:5000/api/game/stats');
  setCookieCount(response.data.cookieCount);
};
