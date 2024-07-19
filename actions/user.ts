import { cookies } from 'next/headers';

export const fetchProfile = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/profile`,
      {
        headers: {
          Cookie: cookies().toString(),
        },
      }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }
    const result = await response.json();
    const data = result.data;
    return data;
  } catch (error) {
    throw new Error('Failed to fetch profile');
  }
};
