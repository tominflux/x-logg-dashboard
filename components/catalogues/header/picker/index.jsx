import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CATALOGUE_ACTIONS from '../../../../redux/actions/catalogue'

const CataloguesPicker = () => {
    //Hooks
    const {
        //fetchingCatalogueNames,
        catalogueNames,
        selectedCatalogueName
    } = useSelector(state => state.Catalogue)
    const dispatch = useDispatch()
    //State
    const [isOpen, setOpen] = React.useState(false)
    //Events
    const onToggleClick = () => setOpen(!isOpen)
    const onCatalogueClick = (catalogueName) => {
        const selectCatalogue = CATALOGUE_ACTIONS.selectCatalogue(catalogueName)
        dispatch(selectCatalogue)
    }
    //Computations
    const rootClassName = `dropdown${isOpen ? " show" : ""}`
    const isDisabled = (catalogueNames === null && catalogueNames.length > 0)
    //Effects
    // - If none selected, select first.
    React.useEffect(() => {
        if (!isDisabled && selectedCatalogueName === null) {
            const firstCatalogue = catalogueNames[0]
            const selectCatalogue = CATALOGUE_ACTIONS.selectCatalogue(firstCatalogue)
            dispatch(selectCatalogue)
        }
    })
    //Render
    return (
        <div className={rootClassName} onClick={() => onToggleClick()}>
            <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                disabled={isDisabled}
            >
                {selectedCatalogueName}
            </button>
            <div className="dropdown-menu">
                {
                    catalogueNames.map((catalogueName, index) => (
                        <span
                            key={index}
                            className="dropdown-item"
                            onClick={() => onCatalogueClick(catalogueName)}
                        >
                            {catalogueName}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default CataloguesPicker
