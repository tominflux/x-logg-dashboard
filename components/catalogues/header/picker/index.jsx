import React from 'react'

const CataloguesPicker = () => {
    //State
    const [isOpen, setOpen] = React.useState(false)
    //Events
    const onToggleClick = () => setOpen(!isOpen)
    const onCatalogueClick = (catalogueName) => { }
    //Computations
    const rootClassName = `dropdown${isOpen ? " show" : ""}`
    //Render
    return (
        <div className={rootClassName} onClick={() => onToggleClick()}>
            <button
                className="btn btn-primary dropdown-toggle"
                type="button"
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
                <span className="dropdown-item">Action</span>
                <span className="dropdown-item">Another action</span>
                <span className="dropdown-item">Something else here</span>
            </div>
        </div>
    )
}

export default CataloguesPicker
