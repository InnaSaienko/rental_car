"use client"

import {useEffect, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import css from "./BookingForm.module.css";
import style from "../CustomInput/CustomInput.module.css";
import {type BookingFormPayload, createBooking} from "@/lib/api";
import Button from "@/components/Button/Button";
import { useToaster } from '@/hooks/useToaster';
import { useRouter } from 'next/navigation';
import {useBookingFormStore} from "@/lib/store/bookingFormStore";


interface BookingFormProps {
    carId: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    comment?: string;
}

const BookingForm = ({carId}: BookingFormProps) => {
    const currentCarId = useBookingFormStore(state => state.currentCarId);
    const setCarId = useBookingFormStore(state => state.setCarId);
    const draft = useBookingFormStore(state => state.draft);
    const setDraft = useBookingFormStore(state => state.setDraft);
    const clearDraft = useBookingFormStore(state => state.clearDraft);
    const [errors, setErrors] = useState<FormErrors>({});
    const { showSuccess, showError } = useToaster();
    const router = useRouter();

    const isValidField = (value: string) => {
        return value.trim() !== '';
    };

    useEffect(() => {
        setCarId(carId);
    }, [carId, setCarId]);

    const bookingMutation = useMutation({
        mutationFn: (payload: BookingFormPayload) => createBooking(currentCarId || carId, payload),
        onSuccess: () => {
            clearDraft();
            showSuccess('Booking request sent successfully!');
            setTimeout(() => router.push('/catalog'), 2000);
        },
        onError: mutationError => {
            const message = axios.isAxiosError(mutationError)
                ? (mutationError.response?.data?.message ?? 'Could not send your request.')
                : 'Could not send your booking request.';
            showError(message);
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: FormErrors = {};

        if (!isValidField(draft.name)) newErrors.name = "Name is required";
        if (!isValidField(draft.email)) newErrors.email = "Email is required";
        if (!isValidField(draft.comment)) newErrors.comment = "Comment is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        bookingMutation.mutate({
            name: draft.name.trim(),
            email: draft.email.trim(),
            comment: draft.comment.trim(),
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDraft({ [name]: value });
    };

    return (
        <div className={css.bookingForm}>
            <h2 className={css.bookingTitle}>Book your car now</h2>
            <p className={css.bookingSubtitle}>Stay connected! We are always ready to help you.</p>
            <form className={css.searchForm} onSubmit={handleSubmit}>
                <div className={style.filterGroup}>
                    <label className={style.label} htmlFor="name">Name</label>
                    <div className={css.inputWrapper}>
                        <input
                            id="name"
                            className={`${css.input} ${errors.name ? css.inputError : ""}`}
                            type="text"
                            value={draft.name}
                            name="name"
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                        />
                        {errors.name && (
                            <>
                                <svg className={css.errorIcon} aria-hidden="true">
                                    <use href="/sprite.svg#icon-error"/>
                                </svg>
                                <span className={css.errorMessage}>{errors.name}</span>
                            </>

                        )} </div>
                </div>
                <div className={style.filterGroup}>
                    <label className={style.label} htmlFor="email">Email</label>
                    <div className={css.inputWrapper}>
                        <input
                            id="email"
                            className={`${css.input} ${errors.email ? css.inputError : ""}`}
                            type="email"
                            value={draft.email}
                            name="email"
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <>
                                <svg className={css.errorIcon} aria-hidden="true">
                                    <use href="/sprite.svg#icon-error"/>
                                </svg>
                                <span className={css.errorMessage}>{errors.email}</span>
                            </>
                        )}</div>
                </div>
                <div className={style.filterGroup}>
                    <label className={style.label} htmlFor="comment">Comment</label>
                    <div className={css.inputWrapper}><textarea
                        id="booking-comment"
                        className={`${css.textarea} ${errors.comment ? css.inputError : ""}`}
                        value={draft.comment}
                        name="comment"
                        onChange={handleInputChange}
                        placeholder="Any special requests?"
                        rows={4}
                    >
                    </textarea>
                        {errors.comment && (
                            <>
                                <svg className={css.errorIcon} aria-hidden="true">
                                    <use href="/sprite.svg#icon-error"/>
                                </svg>
                                <span className={css.errorMessage}>{errors.comment}</span>
                            </>
                        )}</div>
                </div>
                <Button type="submit" variant="secondary" className={css.button} disabled={bookingMutation.isPending}>
                    Book now
                </Button>
            </form>
        </div>

    )
};

export default BookingForm