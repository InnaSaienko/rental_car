"use client"

import {keepPreviousData, useInfiniteQuery} from "@tanstack/react-query";
import {fetchCars} from "@/lib/api";

export const catalogPerPage = 8;

const CatalogClient = () => {

    const {data} = useInfiniteQuery({
        queryKey: ["cars"],
        queryFn: ({ pageParam = 1 } ) => fetchCars({page: pageParam, perPage: catalogPerPage}),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
        placeholderData: keepPreviousData,
        refetchOnMount: false,

    })
    return (
        <div>{JSON.stringify(data)}</div>
    )
}
export default CatalogClient;