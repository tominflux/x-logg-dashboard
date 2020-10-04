import ITEM_ACTION_TYPE from '../../actionTypes/item'


const fetchItems = (collectionId) => ({
    type: ITEM_ACTION_TYPE.FETCH_ITEMS,
    payload: { collectionId }
})

const fetchItemsFailed = (fetchError) => ({
    type: ITEM_ACTION_TYPE.FETCH_ITEMS_FAILED,
    payload: { fetchError }
})

const receiveItems = (items) => ({
    type: ITEM_ACTION_TYPE.RECEIVE_ITEMS,
    payload: { items }
})

const selectItem = (item) => ({
    type: ITEM_ACTION_TYPE.SELECT_ITEM,
    payload: { item }
})


///////////////
///////////////


const ITEM_ACTIONS = {
    fetchItems,
    fetchItemsFailed,
    receiveItems,
    selectItem
}

export default ITEM_ACTIONS