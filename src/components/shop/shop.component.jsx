import React, { Component } from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from "../component-preview/collection-preview.component";

export default class ShopPage extends Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }


    render() {

        return (
            <div className="shop-page">
                {
                    this.state.collections.map(({id,...otherCollectionProps})=>(
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
};
