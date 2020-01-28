import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCollectionForPreview} from '../../redux/shop/shop.selectors'

import {CollectionsPreviewContainer} from './collections-overview.styles';


import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({collections}) => (
    <CollectionsPreviewContainer>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </CollectionsPreviewContainer>
);

const mapSateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapSateToProps)(CollectionsOverview);

