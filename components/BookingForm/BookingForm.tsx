"use client"

import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import css from "./BookingForm.module.css";
import style from "../CustomInput/CustomInput.module.css";
import {type BookingFormPayload, createBooking} from "@/lib/api";
import Button from "@/components/Button/Button";


interface BookingFormProps {
    carId: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    comment?: string;
}

const BookingForm = ({carId}: BookingFormProps) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [errors, setErrors] = useState<FormErrors>({});

    const isValidField = (value: string) => {
        return value.trim() !== '';
    };

    const bookingMutation = useMutation({
        mutationFn: (payload: BookingFormPayload) => createBooking(carId, payload),
        onSuccess: data => {
            setName('');
            setEmail('');
            setComment('');
        },
        onError: mutationError => {
            const message = axios.isAxiosError(mutationError)
                ? (mutationError.response?.data?.message ?? 'Could not send your request.')
                : 'Could not send your booking request.';
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: FormErrors = {};

        if (!isValidField(name)) {
            newErrors.name = "Name is required";
        }

        if (!isValidField(email)) {
            newErrors.email = "Email is required";
        }

        if (!isValidField(comment)) {
            newErrors.comment = "Comment is required";
        }

        setErrors(newErrors);
        console.log("New errors", newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        bookingMutation.mutate({
            name: name.trim(),
            email: email.trim(),
            comment: comment.trim(),
        });
    };

    const handleInputChange =
        (setter: (value: string) => void) =>
            (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setter(event.target.value);
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
                            value={name}
                            onChange={handleInputChange(setName)}
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
                            value={email}
                            onChange={handleInputChange(setEmail)}
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
                        value={comment}
                        onChange={handleInputChange(setComment)}
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