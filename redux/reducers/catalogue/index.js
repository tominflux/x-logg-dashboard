import CATALOGUE_ACTION_TYPE from "../../actionTypes/catalogue"

export const initialCatalogueState = {
    fetchingCatalogueNames: false,
    catalogueNames: null,
    selectedCatalogueName: null,
}

const Catalogue = (state = initialCatalogueState, action) => {
    switch (action.type) {
        case CATALOGUE_ACTION_TYPE.FETCH_CATALOGUE_NAMES: {
            return {
                ...state,
                fetchingCatalogueNames: true
            }
        }
        case CATALOGUE_ACTION_TYPE.RECEIVE_CATALOGUE_NAMES: {
            const { catalogueNames } = action.payload
            return {
                ...state,
                fetchingCatalogueNames: false,
                catalogueNames
            }
        }
        case CATALOGUE_ACTION_TYPE.SELECT_CATALOGUE: {
            const { catalogueName } = action.payload
            if (state.catalogueNames === null) {
                throw new Error(
                    "Cannot select catalogue, no catalogues have been received."
                )
            }
            if (!state.catalogueNames.includes(catalogueName)) {
                throw new Error(
                    `Cannot select catalogue "${catalogueName}" as it does not exist.`
                )
            }
            return {
                ...state,
                selectedCatalogueName: catalogueName
            }
        }
        default: {
            return state
        }
    }
}

export default Catalogue