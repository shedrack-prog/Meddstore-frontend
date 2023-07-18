import { BillboardType } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (id: string): Promise<BillboardType> => {
  const response = await fetch(`${URL}/${id}`);
  return response.json();
};

export default getBillboards;
