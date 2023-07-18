import { ProductType } from '@/types';
import { create } from 'zustand';

interface PreviewModalProps {
  isOpen: boolean;
  data?: ProductType;
  onOpen: (data: ProductType) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: ProductType) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
