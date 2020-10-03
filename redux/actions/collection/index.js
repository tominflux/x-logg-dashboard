import COLLECTION_ACTION_TYPE from '../../actionTypes/collection'


const fetchCollectionNames = (catalogueId) => ({
    type: COLLECTION_ACTION_TYPE.FETCH_COLLECTION_NAMES,
    payload: { catalogueId }
})

const fetchCollectionNamesFailed = (fetchError) => ({
    type: COLLECTION_ACTION_TYPE.FETCH_COLLECTION_NAMES_FAILED,
    payload: { fetchError }
})

const receiveCollectionNames = (collectionNames) => ({
    type: COLLECTION_ACTION_TYPE.RECEIVE_COLLECTION_NAMES,
    payload: { collectionNames }
})

const selectCollection = (collectionName) => ({
    type: COLLECTION_ACTION_TYPE.SELECT_COLLECTION,
    payload: { collectionName }
})


///////////////
///////////////


const COLLECTION_ACTIONS = {
    fetchCollectionNames,
    fetchCollectionNamesFailed,
    receiveCollectionNames,
    selectCollection
}

export default COLLECTION_ACTIONS