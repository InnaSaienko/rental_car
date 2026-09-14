import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BookingFormData {
    name: string;
    email: string;
    comment: string;
}

interface BookingFormStore {
    drafts: Record<string, BookingFormData>;
    setDraft: (carId: string, partialDraft: Partial<BookingFormData>) => void;
    getDraft: (carId: string) => BookingFormData;
    clearDraft: (carId: string) => void;
}

const initialDraft: BookingFormData = {
    name: '',
    email: '',
    comment: '',
};
export const useBookingFormStore = create<BookingFormStore>()(
    persist(
        (set, get) => ({
            drafts: {},
            setDraft: (carId, partialDraft) => {
                set((state) => ({
                    drafts: {
                        ...state.drafts,
                        [carId]: { ...state.drafts[carId], ...partialDraft }
                    }
                }));
            },
            getDraft: (carId) => {
                const state = get();
                return state.drafts[carId] || initialDraft;
            },
            clearDraft: (carId) => {
                set((state) => {
                    const newDrafts = { ...state.drafts };
                    delete newDrafts[carId];
                    return { drafts: newDrafts };
                });
            },
        }),
        {
            name: 'booking-form-storage',
            partialize: (state) => ({
                drafts: state.drafts,
            }),
        }
    )
);
