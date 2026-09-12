'use client'

import { useEffect } from 'react'
import Button from '@/components/Button/Button'
import css from './error.module.css'

export default function Error({error, reset,}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className={css.errorContainer}>
            <h2 className={css.errorTitle}>Something went wrong!</h2>
            <p className={css.errorMessage}>{error.message || 'An unexpected error occurred'}</p>
            <Button variant="primary" onClick={() => reset()}>
                Try again
            </Button>
        </div>
    )
}