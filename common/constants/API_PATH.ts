const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

const API_PATH = {
  CITY: (city: string) => `${BASE_URL}/ubike/${city}`,
};

export default API_PATH;
