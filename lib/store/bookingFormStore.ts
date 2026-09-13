import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BookingFormData {
    name: string;
    email: string;
    comment: string;
}

interface BookingFormStore {
    draft: BookingFormData;
    currentCarId: string | null;
    setDraft: (partialDraft: Partial<BookingFormData>) => void;
    setCarId: (carId: string) => void;
    clearDraft: () => void;
}

const initialDraft: BookingFormData = {
    name: '',
    email: '',
    comment: '',
};
export const useBookingFormStore = create<BookingFormStore>()(
    persist(
        (set) => ({
            draft: initialDraft,
            currentCarId: null,
            setDraft: (partialDraft) => {
                set((state) => ({
                    draft: { ...state.draft, ...partialDraft }
                }));
            },
            setCarId: (carId) => set({ currentCarId: carId }),
            clearDraft: () => set({ draft: initialDraft }),
        }),
        {
            name: 'booking-form-storage',
            partialize: (state) => ({
                draft: state.draft,
                currentCarId: state.currentCarId
            }),
        }
    )
);
