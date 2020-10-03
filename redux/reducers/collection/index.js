import COLLECTION_ACTION_TYPE from "../../actionTypes/collection"

export const initialCollectionState = {
    parentCatalogueId: null,
    fetchingCollectionNames: false,
    fetchError: null,
    collectionNames: null,
    selectedCollectionName: null,
}

const Collection = (state = initialCollectionState, action) => {
    switch (action.type) {
        case COLLECTION_ACTION_TYPE.FETCH_COLLECTION_NAMES: {
            const { catalogueId } = action.payload
            return {
                ...state,
                parentCatalogueId: catalogueId,
                fetchingCollectionNames: true
            }
        }
        case COLLECTION_ACTION_TYPE.FETCH_COLLECTION_NAMES_FAILED: {
            const { fetchError } = action.payload
            return {
                ...state,
                parentCatalogueId: null,
                fetchingCollectionNames: false,
                fetchError
            }
        }
        case COLLECTION_ACTION_TYPE.RECEIVE_COLLECTION_NAMES: {
            const { collectionNames } = action.payload
            return {
                ...state,
                fetchingCollectionNames: false,
                collectionNames
            }
        }
        case COLLECTION_ACTION_TYPE.SELECT_COLLECTION: {
            const { collectionName } = action.payload
            if (state.collectionNames === null) {
                throw new Error(
                    "Cannot select collection, no collections have been received."
                )
            }
            if (!state.collectionNames.includes(collectionName)) {
                throw new Error(
                    `Cannot select collection "${collectionName}" as it does not exist.`
                )
            }
            return {
                ...state,
                selectedCollectionName: collectionName
            }
        }
        default: {
            return state
        }
    }
}

export default Collection