import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import COLLECTION_ACTIONS from '../../../redux/actions/collection'
import { getCollections } from '../../../requests/catalogue/collection'
import CollectionAccordionCard from './card'

const CollectionAccordion = () => {
    //Hooks 
    const {
        selectedCatalogueName: catalogueId
    } = useSelector(state => state.Catalogue)
    const {
        //fetchingCollectionNames,
        parentCatalogueId,
        collectionNames,
        //selectedCollectionName
    } = useSelector(state => state.Collection)
    const dispatch = useDispatch()
    //Getters
    const getCards = () => collectionNames ?
        collectionNames.map((collectionName, index) => (
            <CollectionAccordionCard
                key={index}
                collectionName={collectionName}
                show
            />
        )) : null
    //Effects
    // - Fetch Collection Names 
    React.useEffect(() => {
        const retrieveCollectionNames = async () => {
            try {
                const fetchCollectionNames =
                    COLLECTION_ACTIONS.fetchCollectionNames(catalogueId)
                dispatch(fetchCollectionNames)
                const receivedCollectionNames = await getCollections(catalogueId)
                const receiveCollectionNames =
                    COLLECTION_ACTIONS.receiveCollectionNames(receivedCollectionNames)
                dispatch(receiveCollectionNames)
            } catch (err) {
                const fetchCollectionNamesFailed =
                    COLLECTION_ACTIONS.fetchCollectionNamesFailed(err)
                dispatch(fetchCollectionNamesFailed)
            }
        }
        if (parentCatalogueId !== catalogueId)
            retrieveCollectionNames()
    })
    //Render
    return (
        <section className="container-fluid px-xs-0 px-md-3 px-lg-5">
            {getCards()}
        </section>
    )
}

export default CollectionAccordion