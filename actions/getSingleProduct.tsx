import { ProductType } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getSingleProduct = async (id: string): Promise<ProductType> => {
  const response = await fetch(`${URL}/${id}`);
  return response.json();
};

export default getSingleProduct;
