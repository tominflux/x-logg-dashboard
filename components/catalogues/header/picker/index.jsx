import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { conClass } from '../../../../misc/className'
import CATALOGUE_ACTIONS from '../../../../redux/actions/catalogue'
import styles from './picker.module.css'

const CataloguesPicker = () => {
    //Hooks
    const {
        //fetchingCatalogueNames,
        catalogueNames,
        selectedCatalogueName
    } = useSelector(state => state.Catalogue)
    const dispatch = useDispatch()
    //Ref
    const ref = React.createRef()
    //State
    const [isOpen, setOpen] = React.useState(false)
    //Events
    const onToggleClick = () => setOpen(!isOpen)
    const onClickAway = () => setOpen(false)
    const onCatalogueClick = (catalogueName) => {
        const selectCatalogue = CATALOGUE_ACTIONS.selectCatalogue(catalogueName)
        dispatch(selectCatalogue)
    }
    //Computations
    const pickerClassName = conClass(
        "dropdown",
        "x-dropdown",
        styles.root
    )
    const buttonClassName = conClass(
        "btn",
        "x-btn",
        "x-btn-primary",
        isOpen ? "x-btn--flat-bottom" : null,
        "dropdown-toggle",
        styles.button
    )
    const menuClassName = conClass(
        "dropdown-menu",
        "x-dropdown-menu",
        isOpen ? "show" : null,
        styles.menu
    )
    const itemClassName = conClass(
        "dropdown-item",
        "x-dropdown-item"
    )
    const isEnabled = (catalogueNames !== null && catalogueNames.length > 0)
    //Effects
    // - If none selected, select first.
    React.useEffect(() => {
        if (isEnabled && selectedCatalogueName === null) {
            const firstCatalogue = catalogueNames[0]
            const selectCatalogue = CATALOGUE_ACTIONS.selectCatalogue(firstCatalogue)
            dispatch(selectCatalogue)
        }
    })
    // - Detect On Click Away
    React.useEffect(() => {
        if (typeof "document" === undefined) return
        const onBodyClick = () => {
            if (ref.current === null) return
            onClickAway()
        }
        document.addEventListener("click", onBodyClick)
        return () => document.removeEventListener("click", onBodyClick)
    })
    //Render
    return (
        <div
            className={pickerClassName}
            onClick={() => onToggleClick()}
            ref={ref}
        >
            <button
                className={buttonClassName}
                type="button"
                disabled={!isEnabled}
            >
                {selectedCatalogueName}
            </button>
            <div className={menuClassName}>
                {
                    catalogueNames ?
                        catalogueNames.map((catalogueName, index) => (
                            <span
                                key={index}
                                className={itemClassName}
                                onClick={() => onCatalogueClick(catalogueName)}
                            >
                                {catalogueName}
                            </span>
                        )) : null
                }
            </div>
        </div>
    )
}

export default CataloguesPicker
