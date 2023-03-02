const API_ENDPOINT = 'http://localhost:3000/api/products';

const fetchProductDetails = async id => {
  try {
    const response = await fetch(`${API_ENDPOINT}/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Network response was not ok');
  } catch (error) {
    console.error(error);
  }
};

export default {
  fetchProductDetails,
};
