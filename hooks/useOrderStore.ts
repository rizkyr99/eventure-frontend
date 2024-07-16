// stores/orderStore.js
import { Ticket, Voucher } from '@/types/event';
import { create } from 'zustand';

interface OrderState {
  orderItems: Ticket[];
  appliedVouchers: Voucher[];
  totalDiscount: number;
  totalPrice: number;
  setOrderItems: (items: Ticket[]) => void;
  setAppliedVouchers: (vouchers: Voucher[]) => void;
  setTotalDiscount: (discount: number) => void;
  setTotalPrice: (price: number) => void;
  resetOrder: () => void;
}

const useOrderStore = create<OrderState>()((set) => ({
  orderItems: [],
  appliedVouchers: [],
  totalDiscount: 0,
  totalPrice: 0,
  setOrderItems: (items: Ticket[]) => set({ orderItems: items }),
  setAppliedVouchers: (vouchers: Voucher[]) =>
    set({ appliedVouchers: vouchers }),
  setTotalDiscount: (discount: number) => set({ totalDiscount: discount }),
  setTotalPrice: (price: number) => set({ totalPrice: price }),
  resetOrder: () => set({ orderItems: [], appliedVouchers: [] }),
}));

export default useOrderStore;
