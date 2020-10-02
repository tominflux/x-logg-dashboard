import React from 'react'

const DeleteCatalogue = () => {
    const catalogueName = "[Catalogue Name]"
    //Render
    return (
        <button className="btn btn-danger">
            Delete {catalogueName}
        </button>
    )
}

export default DeleteCatalogue
