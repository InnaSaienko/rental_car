import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {fetchCars} from "@/lib/api";
import CatalogClient, { catalogPerPage } from "./CatalogClient";

export const dynamic = 'force-dynamic';

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