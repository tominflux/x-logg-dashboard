import React from 'react'
import XSummary from '../xSummary'
import { PeopleFill, KeyFill } from "react-bootstrap-icons"

const UserloggSummary = () => {
    //State
    const [adminCount, setAdminCount] = React.useState(null)
    const [userCount, setUserCount] = React.useState(null)
    //Effects
    // - Request Counts
    React.useEffect(() => {
        const fetchEntityCount = async (entityName) => {
            const url = `/api/userlog/stats/${entityName}`
            const response = await fetch(url)
            const { count } = await response.json()
            return count
        }
        const fetchAdminCount = async () => (
            fetchEntityCount("admin")
        )
        const fetchUserCount = async () => (
            fetchEntityCount("user")
        )
        fetchAdminCount().then(
            count => setAdminCount(count)
        )
        fetchUserCount().then(
            count => setUserCount(count)
        )
    })
    //Getters
    const getAdminRow = () => ({
        count: adminCount,
        entityName: "Admin",
        Icon: KeyFill
    })
    const getUserRow = () => ({
        count: userCount,
        entityName: "User",
        Icon: PeopleFill
    })
    const getRows = () => {
        const allCountsReceived = (
            adminCount !== null &&
            userCount !== null
        )
        if (!allCountsReceived) {
            return []
        }
        return [ getAdminRow(), getUserRow() ]
    }
    //Render
    return (
        <XSummary rows={ getRows() }/>
    )
}

export default UserloggSummary