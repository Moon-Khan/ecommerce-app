import { useState } from "react"

export function useTableFeatures({initialConfig = {}}) {
    const {
        initialPage = 1,
        initialDataPerPage=10,
        initialSortOrder = "asc",
        initialSortCol = "createdAt"
    } = initialConfig
    

    const [page, setPage] = useState(initialPage);
    const [dataPerPage, setDataPerPage] = useState(initialDataPerPage);
    const [sortOrder, setSortOrder] = useState(initialSortOrder)
    const [sortCol, setSortCol] = useState(initialSortCol)

    return{
        page,
        setPage,
        dataPerPage,
        setDataPerPage,
        sortOrder,
        setSortOrder,
        sortCol,
        setSortCol
    };
}