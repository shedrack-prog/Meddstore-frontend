import { CategoryType } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<CategoryType> => {
  const response = await fetch(`${URL}/${id}`);
  return response.json();
};

export default getCategory;
