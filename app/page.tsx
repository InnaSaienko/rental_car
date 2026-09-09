import css from "./Home.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={css.hero}>
        <div className={css.titleWrapper}>
            <h1 className={css.title}>Find your perfect rental car</h1>
            <p className={css.description}>Reliable and budget-friendly rentals for any journey</p>
            <Button variant="primary" href={"/catalog"}>View Catalog</Button>
        </div>
        <picture className={css.heroImageWrapper}>
            <source
                srcSet="/images/Hero.png 1x, /images/Hero@2x.png 2x"
                type="image/png"
            />
            <img
                src="/images/Hero.png"
                alt="Rental car hero image"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className={css.heroImage}
            />
        </picture>
    </div>
  );
}
