import css from "./Home.module.css";
import Button from "@/components/Button/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rental Car - Find Your Perfect Rental",
    description: "Reliable and budget-friendly rentals for any journey. Browse our catalog and book your perfect car today.",
    openGraph: {
        title: "Rental Car - Find Your Perfect Rental",
        description: "Reliable and budget-friendly rentals for any journey. Browse our catalog and book your perfect car today.",
        url: process.env.NEXT_PUBLIC_WEBSITE_VERCEL_URL || "https://rental-car.vercel.app",
        siteName: "Rental Car",
        type: "website",
        images: [
            {
                url: "/images/Hero.png",
                width: 1200,
                height: 630,
                alt: "Rental Car - Find Your Perfect Rental",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rental Car - Find Your Perfect Rental",
        description: "Reliable and budget-friendly rentals for any journey. Browse our catalog and book your perfect car today.",
        images: ["/images/Hero.png"],
    },
};

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
