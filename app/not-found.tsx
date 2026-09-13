import css from "./NotFound.module.css"
import Button from "@/components/Button/Button";

const NotFoundPage = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title}>404 - Page Not Found</h1>
            <p className={css.description}>
                Oops! The page you`&apos;`re looking for doesn`&apos;`t exist or has been moved.
            </p>
            <div className={css.actions}>
                <Button variant="primary" href="/">
                    Go to Homepage
                </Button>
                <Button variant="secondary" href="/catalog">
                    Browse Cars
                </Button>
            </div>
        </div>
    )
};

export default NotFoundPage;