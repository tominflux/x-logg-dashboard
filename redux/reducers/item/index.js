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
                fetchingItemNames: true
            }
        }
        case ITEM_ACTION_TYPE.FETCH_ITEMS_FAILED: {
            const { fetchError } = action.payload
            return {
                ...state,
                parentCollectionId: null,
                fetchingItemNames: false,
                fetchError
            }
        }
        case ITEM_ACTION_TYPE.RECEIVE_ITEMS: {
            const { itemNames } = action.payload
            return {
                ...state,
                fetchingItemNames: false,
                itemNames
            }
        }
        case ITEM_ACTION_TYPE.SELECT_ITEM: {
            const { itemName } = action.payload
            if (state.itemNames === null) {
                throw new Error(
                    "Cannot select item, no items have been received."
                )
            }
            if (
                itemName !== null &&
                !state.itemNames.includes(itemName)
            ) {
                throw new Error(
                    `Cannot select item "${itemName}" as it does not exist.`
                )
            }
            return {
                ...state,
                selectedItemName: itemName
            }
        }
        default: {
            return state
        }
    }
}

export default Item