import css from './Loader.module.css'

const Loader = () => {

    return (
        <div className={css.carListWrapper}>
            <div className={css.loaderBackdrop}>
                <div className={css.loader}>
                    <div className={css.spinner}>
                        <svg viewBox="0 0 72 72">
                            <circle
                                cx="36"
                                cy="36"
                                r="32.8"
                                fill="none"
                                stroke="#..."
                                strokeWidth="6.4"
                            />
                            <circle
                                cx="36"
                                cy="36"
                                r="32.8"
                                fill="none"
                                stroke="#00AAD4"
                                strokeWidth="6.4"
                                strokeLinecap="round"
                                strokeDasharray="40 166"
                            />
                        </svg>
                    </div>
                    <div className={css.loadingText}>
                        <p className={css.title}>Loading cars<span className={css.indicatorDots}>...</span></p>
                        <p className={css.description}>Please wait while we fetch the best cars for you</p>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Loader;