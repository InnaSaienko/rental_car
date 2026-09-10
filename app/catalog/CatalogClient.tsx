"use client"

import {keepPreviousData, useInfiniteQuery} from "@tanstack/react-query";
import {fetchCars} from "@/lib/api";
import CarList from "@/components/CarList/CarList";
import {FetchCarsResponse} from "@/lib/api";
import Button from "@/components/Button/Button";

export const catalogPerPage = 8;

const CatalogClient = () => {

    const {data, hasNextPage} = useInfiniteQuery<FetchCarsResponse>({
        queryKey: ["cars"],
        queryFn: ({}) => fetchCars({page: 1, perPage: catalogPerPage}),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
        placeholderData: keepPreviousData,
        refetchOnMount: false,

    })

    const allCars = data?.pages.flatMap((page) => page.cars) || [];

    return (
        <>
            <CarList cars={allCars}/>
            {hasNextPage && (
                    <Button
                        variant="loadMore"
                        // onClick={() => fetchNextPage()}
                        className="loadMore"
                    >Load more
                    </Button>
                )
            }
        </>
    )
}
export default CatalogClient;