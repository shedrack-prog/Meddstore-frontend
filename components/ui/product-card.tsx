'use client';

import { ProductType } from '@/types';
import Image from 'next/image';
import IconButton from './icon-butoon';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from './currency';
import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';
import usePreviewModal from '@/hooks/use-preview-modal';
import useCart from '@/hooks/use-cart';

interface ProductCardProps {
  data: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  // preview product function
  const previewProduct: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };
  const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };
  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      onClick={handleClick}
    >
      {/* images and action */}
      <div className="aspect-square rounded-xl bg-gray-100 relative ">
        <Image
          alt="product image"
          src={data?.images[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-3 justify-center">
            <IconButton
              handleClick={previewProduct}
              icon={<Expand size={20} />}
              className="text-gray-600"
            />
            <IconButton
              handleClick={handleAddToCart}
              icon={<ShoppingCart size={20} />}
              className="text-gray-600"
            />
          </div>
        </div>
      </div>

      {/* Descriptions */}

      <div>
        <p className="font-semibold text-lg">{data?.name}</p>
        <p className="text-gray-500 text-sm">{data?.category?.name}</p>
      </div>
      {/* price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
