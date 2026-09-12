"use client"

import {keepPreviousData, useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {CarFiltersResponse, fetchCarFilters, fetchCars} from "@/lib/api";
import CarList from "@/components/CarList/CarList";
import {FetchCarsResponse} from "@/lib/api";
import Button from "@/components/Button/Button";
import Loader from "@/components/Loader/Loader";
import SearchBar from "@/components/SearchBar/SearchBar";
import {useState} from "react";
import {CarFilters} from "@/types/car";
import NoCarsFound from "@/components/NoCarsFound/NoCarsFound";

export const catalogPerPage = 8;

const CatalogClient = () => {
    const [appliedSearch, setAppliedSearch] = useState<CarFilters>({});

    const {data: filtersData} = useQuery<CarFiltersResponse>({
        queryKey: ["carFilters"],
        queryFn: fetchCarFilters,
        staleTime: Infinity,
    });

    const {data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading, isError} = useInfiniteQuery<FetchCarsResponse>({
        queryKey: ["cars", appliedSearch],
        queryFn: ({pageParam = 1}) => fetchCars({
            page: pageParam as number,
            perPage: catalogPerPage,
            ...appliedSearch,
        }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
        placeholderData: keepPreviousData,
        refetchOnMount: false,

    })

    const allCars = data?.pages.flatMap((page) => page.cars) || [];


    return (
        <>
            <SearchBar onFilter={setAppliedSearch} filters={filtersData || null}/>
            {(isLoading || isFetchingNextPage) && <Loader />}
            <CarList cars={allCars}/>
            {!isLoading && !isError && allCars.length === 0 && (
                <NoCarsFound resetFilters={() => setAppliedSearch({})} />
            )}
            {hasNextPage && <Button
                variant="loadMore"
                onClick={() => fetchNextPage()}
                className="loadMore"
                disabled={isFetchingNextPage}>Load more</Button>}
        </>
    )
}
export default CatalogClient;