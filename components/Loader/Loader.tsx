import css from './Loader.module.css'

const Loader = () => {

    return (
        <div className={css.carListWrapper}>
            <div className={css.loaderBackdrop}>
                <div className={css.loader}>
                    <div className={css.spinner}>
                        <span className={css.ellips}></span>
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