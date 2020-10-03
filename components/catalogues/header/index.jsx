import React from 'react'
import DeleteCatalogue from './delete'
import CataloguePicker from './picker'
import { useSelector, useDispatch } from 'react-redux'
import { getCatalogues } from '../../../requests/catalogue'
import CATALOGUE_ACTIONS from '../../../redux/actions/catalogue'
//import PropTypes from 'prop-types'

const CataloguesHeader = () => {
    //Hooks
    const {
        fetchingCatalogueNames,
        catalogueNames,
        //selectedCatalogueName
    } = useSelector(state => state.Catalogue)
    const dispatch = useDispatch()
    //Effects
    // - Fetch Catalogue Names
    React.useEffect(() => {
        const retrieveCatalogueNames = async () => {
            try {
                const fetchCatalogueNames =
                    CATALOGUE_ACTIONS.fetchCatalogueNames()
                dispatch(fetchCatalogueNames)
                const receivedCatalogueNames = await getCatalogues()
                const receiveCatalogueNames =
                    CATALOGUE_ACTIONS.receiveCatalogueNames(receivedCatalogueNames)
                dispatch(receiveCatalogueNames)
            } catch (err) {
                const fetchCatalogueNamesFailed =
                    CATALOGUE_ACTIONS.fetchCatalogueNamesFailed(err)
                dispatch(fetchCatalogueNamesFailed)
            }
        }
        if (catalogueNames === null && !fetchingCatalogueNames) {
            retrieveCatalogueNames()
        }
    })
    //Render
    return (
        <header className="container-fluid mb-5">
            <div className="row">
                <nav className="col-7 text-center">
                    <CataloguePicker />
                </nav>
                <div className="col-5">
                    <DeleteCatalogue />
                </div>
            </div>
        </header>
    )
}

export default CataloguesHeader
