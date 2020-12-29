import React from 'react'
import PropTypes from 'prop-types'
import { Map, List } from 'immutable'
import useBreakpoint, { BREAKPOINT } from '../../../../../misc/breakpoint'

const ROW_COUNTS = Map([
    [BREAKPOINT.XL, 6],
    [BREAKPOINT.LG, 4],
    [BREAKPOINT.MD, 3],
    [BREAKPOINT.SM, 2],
    [BREAKPOINT.XS, 1]
])

const ItemGrid = ({ items }) => {
    //Hooks
    const breakpoint = useBreakpoint()
    //Constants
    const rowCount = breakpoint ? ROW_COUNTS.get(breakpoint) : 3
    const colClass = `col-${12 / rowCount} text-center`
    //Getters
    const getItemRows = () => {
        const itemList = List(items)
        const itemRows = []
        for (let i = 0, limit = itemList.count(); i < limit; i += rowCount) {
            const itemRow = itemList.slice(
                i, Math.min(limit, i + rowCount)
            )
            itemRows.push(itemRow)
        }
        return itemRows
    }
    //Render Funcs
    const renderCol = (item, colIndex) => (
        <div className={colClass} key={colIndex}>
            <span>
                {item.properties.name}
            </span>
        </div>
    )
    const renderRow = (items, rowIndex) => (
        <div className="row" key={rowIndex}>
            {items.map(
                (item, colIndex) => renderCol(item, colIndex)
            )}
        </div>
    )
    const renderRows = () => {
        const itemRows = getItemRows()
        return itemRows.map(
            (items, rowIndex) => renderRow(items, rowIndex)
        )
    }
    //Render
    return (
        <div className="container-fluid">
            {renderRows()}
        </div>
    )
}

ItemGrid.propTypes = {
    items: PropTypes.array
}

export default ItemGrid