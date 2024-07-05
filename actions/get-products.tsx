import { ProductType } from '@/types';
import queryString from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;
interface QueryType {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: QueryType): Promise<ProductType[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const response = await fetch(url);
  console.log(response);
  return response.json();
};

export default getProducts;
