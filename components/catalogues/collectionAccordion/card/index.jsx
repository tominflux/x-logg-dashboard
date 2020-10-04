import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { GridFill } from 'react-bootstrap-icons'
import { conClass } from '../../../../misc/className'
import styles from './card.module.css'

const CollectionAccordionCard = ({ collectionName, show, onToggle }) => {
    //Computations
    const cardClassName = conClass(
        "card",
        "x-accord"
    )
    const headerClassName = conClass(
        "card-header",
        "x-accord__header"
    )
    const collapseClassName = conClass(
        "collapse",
        show ? "show" : null
    )
    //Render
    return (
        <div className={cardClassName}>
            <div className={headerClassName} onClick={() => onToggle()}>
                <h5 className="mb-0">
                    <GridFill className={styles.collectionIcon} />
                    {collectionName}
                </h5>
            </div>
            <div className={collapseClassName}>
                <div className="card-body x-accord__body">
                    Hello World.
                </div>
            </div>
        </div>
    )
}

CollectionAccordionCard.propTypes = {
    collectionName: PropTypes.string,
    show: PropTypes.bool,
    onToggle: PropTypes.func
}

export default CollectionAccordionCard