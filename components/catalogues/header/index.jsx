import React from 'react'
import DeleteCatalogue from './delete'
import CataloguesPicker from './picker'
//import PropTypes from 'prop-types'

const CataloguesHeader = () => (
    <div className="row">
        <div className="col-8">
            <CataloguesPicker />
        </div>
        <div className="col-4">
            <DeleteCatalogue />
        </div>
    </div>
)

export default CataloguesHeader
