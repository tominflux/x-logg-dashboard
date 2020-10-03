import React from 'react'
import PropTypes from 'prop-types'
import { conClass } from '../../../../misc/className'

const CollectionAccordionCard = ({ collectionName, show }) => {
    //Computations
    const collapseClassName = conClass(
        "collapse",
        show ? "show" : null
    )
    //Render
    return (
        <div className="card">
            <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                    <button className="btn btn-link">
                        {collectionName}
                    </button>
                </h5>
            </div>
            <div className={collapseClassName}>
                <div className="card-body">
                    Hello World.
                </div>
            </div>
        </div>
    )
}

CollectionAccordionCard.propTypes = {
    collectionName: PropTypes.string,
    show: PropTypes.bool
}

export default CollectionAccordionCard