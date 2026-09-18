import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {fetchCars} from "@/lib/api";
import CatalogClient, { catalogPerPage } from "./CatalogClient";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: "Car Catalog | Rental Car",
    description: "Browse our collection of available rental cars. Filter by brand, price, and mileage to find your perfect match.",
    openGraph: {
        title: "Car Catalog | Rental Car",
        description: "Browse our collection of available rental cars. Filter by brand, price, and mileage to find your perfect match.",
        url: `${process.env.NEXT_PUBLIC_WEBSITE_VERCEL_URL || 'https://rental-car.vercel.app'}/catalog`,
        siteName: "Rental Car",
        type: "website",
        images: [
            {
                url: "/images/Hero.png",
                width: 1200,
                height: 630,
                alt: "Rental Car Catalog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Car Catalog | Rental Car",
        description: "Browse our collection of available rental cars. Filter by brand, price, and mileage to find your perfect match.",
        images: ["/images/Hero.png"],
    },
};

const CatalogPage = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery({
        queryKey: ["cars", {}],
        queryFn: () => fetchCars({page: 1, perPage: catalogPerPage}),
        initialPageParam: 1,
    })


    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <CatalogClient />
        </HydrationBoundary>
    );
}
export default CatalogPage;