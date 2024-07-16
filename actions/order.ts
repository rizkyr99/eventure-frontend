export const createOrder = async (data: any) => {
  try {
    const response = await fetch('http://localhost:8080/api/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    });
    const result = await response.json();
    return result.data;
  } catch (error: any) {
    console.error(error);
    throw new Error('Failed to create order');
  }
};
