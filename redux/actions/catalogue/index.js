import CATALOGUE_ACTION_TYPE from '../../actionTypes/catalogue'


const fetchCatalogueNames = () => ({
    type: CATALOGUE_ACTION_TYPE.FETCH_CATALOGUE_NAMES,
    payload: {}
})

const fetchCatalogueNamesFailed = (fetchError) => ({
    type: CATALOGUE_ACTION_TYPE.FETCH_CATALOGUE_NAMES_FAILED,
    payload: { fetchError }
})

const receiveCatalogueNames = (catalogueNames) => ({
    type: CATALOGUE_ACTION_TYPE.RECEIVE_CATALOGUE_NAMES,
    payload: { catalogueNames }
})

const selectCatalogue = (catalogueName) => ({
    type: CATALOGUE_ACTION_TYPE.SELECT_CATALOGUE,
    payload: { catalogueName }
})


///////////////
///////////////


const CATALOGUE_ACTIONS = {
    fetchCatalogueNames,
    fetchCatalogueNamesFailed,
    receiveCatalogueNames,
    selectCatalogue
}

export default CATALOGUE_ACTIONS