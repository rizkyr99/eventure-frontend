export const createOrder = async (data: any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
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
