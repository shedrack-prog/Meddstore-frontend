export interface ProductType {
  id: string;
  category: CategoryType;
  name: string;
  price: string;
  isFeatured: boolean;
  size: SizeType;
  color: ColorType;
  images: ImageType[];
}

export interface ImageType {
  id: string;
  url: string;
}

export interface BillboardType {
  id: string;
  label: string;
  imgUrl: string;
}

export interface CategoryType {
  id: string;
  name: string;
  billboard: BillboardType;
}

export interface SizeType {
  id: string;
  name: string;
  value: string;
}

export interface ColorType {
  id: string;
  name: string;
  value: string;
}
