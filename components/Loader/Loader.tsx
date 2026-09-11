import css from './Loader.module.css'

const Loader = () => {

    return (
        <div className={css.carListWrapper}>
            <div className={css.loaderBackdrop}>
                <div className={css.loader}>
                    <div className={css.spinner}>
                        <svg>
                            <use href="/sprite.svg#icon-loader" width={102} height={102} />
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