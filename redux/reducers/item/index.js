import ITEM_ACTION_TYPE from "../../actionTypes/item"

export const initialItemState = {
    parentCollectionId: null,
    fetchingItems: false,
    fetchError: null,
    items: null,
    selectedItem: null
}

const Item = (state = initialItemState, action) => {
    switch (action.type) {
        case ITEM_ACTION_TYPE.FETCH_ITEMS: {
            const { collectionId } = action.payload
            return {
                ...state,
                parentCollectionId: collectionId,
                fetchingItems: true
            }
        }
        case ITEM_ACTION_TYPE.FETCH_ITEMS_FAILED: {
            const { fetchError } = action.payload
            return {
                ...state,
                parentCollectionId: null,
                fetchingItems: false,
                fetchError
            }
        }
        case ITEM_ACTION_TYPE.RECEIVE_ITEMS: {
            const { items } = action.payload
            return {
                ...state,
                fetchingItems: false,
                items
            }
        }
        case ITEM_ACTION_TYPE.SELECT_ITEM: {
            const { item } = action.payload
            if (state.items === null) {
                throw new Error(
                    "Cannot select item, no items have been received."
                )
            }
            if (
                item !== null &&
                !state.items.includes(item)
            ) {
                throw new Error(
                    `Cannot select item "${item}" as it does not exist.`
                )
            }
            return {
                ...state,
                selectedItem: item
            }
        }
        default: {
            return state
        }
    }
}

export default Item