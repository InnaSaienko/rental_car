"use client"

import {keepPreviousData, useInfiniteQuery} from "@tanstack/react-query";
import {fetchCars} from "@/lib/api";
import CarList from "@/components/CarList/CarList";
import {FetchCarsResponse} from "@/lib/api";
import Button from "@/components/Button/Button";
import Loader from "@/components/Loader/Loader";

export const catalogPerPage = 8;

const CatalogClient = () => {

    const {data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading} = useInfiniteQuery<FetchCarsResponse>({
        queryKey: ["cars"],
        queryFn: ({pageParam = 1}) => fetchCars({page: pageParam as number, perPage: catalogPerPage}),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
        placeholderData: keepPreviousData,
        refetchOnMount: false,

    })

    const allCars = data?.pages.flatMap((page) => page.cars) || [];

    return (
        <>
            {isLoading || isFetchingNextPage && <Loader/>}
            <CarList cars={allCars}/>

            {hasNextPage && <Button
                variant="loadMore"
                onClick={() => fetchNextPage()}
                className="loadMore"
                disabled={isFetchingNextPage}>Load more</Button>}
        </>
    )
}
export default CatalogClient;