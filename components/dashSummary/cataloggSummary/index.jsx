import React from 'react'
import Link from 'next/link'
import XSummary from '../xSummary'
import { BookFill, GridFill, SquareFill } from "react-bootstrap-icons"

const CataloggSummary = () => {
    //State
    const [catalogueCount, setCatalogueCount] = React.useState(null)
    const [collectionCount, setCollectionCount] = React.useState(null)
    const [itemCount, setItemCount] = React.useState(null)
    //Effects
    // - Request Counts
    React.useEffect(() => {
        //Generic count fetch
        const fetchEntityCount = async (entityName) => {
            const url = `/api/catalogg/stats/${entityName}`
            const response = await fetch(url)
            const { count } = await response.json()
            return count
        }
        //Realised count fetch methods
        const fetchCatalogueCount = async () => (
            fetchEntityCount("catalogue")
        )
        const fetchCollectionCount = async () => (
            fetchEntityCount("collection")
        )
        const fetchItemCount = async () => (
            fetchEntityCount("item")
        )
        //Execute count fetches and apply to states.
        fetchCatalogueCount().then(
            count => setCatalogueCount(count)
        )
        fetchCollectionCount().then(
            count => setCollectionCount(count)
        )
        fetchItemCount().then(
            count => setItemCount(count)
        )
    })
    //Getters
    const getCatalogueRow = () => ({
        count: catalogueCount,
        entityName: "Catalogue",
        Icon: BookFill
    })
    const getCollectionRow = () => ({
        count: collectionCount,
        entityName: "Collection",
        Icon: GridFill
    })
    const getItemRow = () => ({
        count: itemCount,
        entityName: "Item",
        Icon: SquareFill
    })
    const getRows = () => {
        const allCountReceived = (
            catalogueCount !== null &&
            collectionCount !== null &&
            itemCount !== null
        )
        if (!allCountReceived) {
            return []
        }
        return [
            getCatalogueRow(),
            getCollectionRow(),
            getItemRow()
        ]
    }
    //Render
    return (
        <Link href="/catalogue">
            <a>
                <XSummary rows={getRows()} />
            </a>
        </Link>
    )
}

export default CataloggSummary