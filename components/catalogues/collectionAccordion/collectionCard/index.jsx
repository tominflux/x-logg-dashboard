import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { GridFill } from 'react-bootstrap-icons'
import { conClass } from '../../../../misc/className'
import styles from './card.module.css'
import ITEM_ACTIONS from '../../../../redux/actions/item'
import { getItems } from '../../../../requests/catalogue/collection/item'
import ItemGrid from './itemGrid'

const CollectionAccordionCard = ({ catalogueId, collectionName, show, onToggle }) => {
    const {
        parentCollectionId,
        fetchingItems,
        fetchError,
        items
    } = useSelector(state => state.Item)
    const dispatch = useDispatch()
    //Computations
    const cardClassName = conClass(
        "card",
        "x-accord"
    )
    const headerClassName = conClass(
        "card-header",
        "x-accord__header"
    )
    const collapseClassName = conClass(
        "collapse",
        show ? "show" : null
    )
    //Effects
    // - Retrieve Items
    React.useEffect(() => {
        const retrieveItems = async () => {
            const fetchItems = ITEM_ACTIONS.fetchItems(collectionName)
            dispatch(fetchItems)
            try {
                const items = await getItems(catalogueId, collectionName)
                const receiveItems = ITEM_ACTIONS.receiveItems(items)
                dispatch(receiveItems)
            } catch (err) {
                const fetchItemsFailed = ITEM_ACTIONS.fetchItemsFailed(err)
                dispatch(fetchItemsFailed)
            }
        }
        if (
            show &&
            !fetchingItems &&
            !fetchError &&
            collectionName !== parentCollectionId
        )
            retrieveItems()
    })
    //Render
    return (
        <div className={cardClassName}>
            <div className={headerClassName} onClick={() => onToggle()}>
                <h5 className="mb-0">
                    <GridFill className={styles.collectionIcon} />
                    {collectionName}
                </h5>
            </div>
            <div className={collapseClassName}>
                <div className="card-body x-accord__body">
                    <ItemGrid items={items} />
                </div>
            </div>
        </div>
    )
}

CollectionAccordionCard.propTypes = {
    catalogueId: PropTypes.string,
    collectionName: PropTypes.string,
    show: PropTypes.bool,
    onToggle: PropTypes.func
}

export default CollectionAccordionCard