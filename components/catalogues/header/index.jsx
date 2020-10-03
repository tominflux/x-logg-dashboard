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
        //fetchingCatalogueNames,
        catalogueNames,
        //selectedCatalogueName
    } = useSelector(state => state.Catalogue)
    const dispatch = useDispatch()
    //Effects
    // - Fetch Catalogue Names
    React.useEffect(() => {
        const retrieveCatalogueNames = async () => {
            try {
                const catalogueNames = await getCatalogues()
                const receiveCatalogueNames =
                    CATALOGUE_ACTIONS.receiveCatalogueNames(catalogueNames)
                dispatch(receiveCatalogueNames)
            } catch (err) {
                const fetchCatalogueNamesFailed =
                    CATALOGUE_ACTIONS.fetchCatalogueNamesFailed(err)
                dispatch(fetchCatalogueNamesFailed)
            }
        }
        if (catalogueNames === null) {
            retrieveCatalogueNames()
        }
    })
    //Render
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-7 text-center">
                    <CataloguePicker />
                </div>
                <div className="col-5">
                    <DeleteCatalogue />
                </div>
            </div>
        </div>
    )
}

export default CataloguesHeader
