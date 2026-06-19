import React from 'react';
import productFeedJSON from "../customizations/productfeed.json";
import ProductFeed from '../types/productfeed';
import './Products.css';

const Products: React.FC = () => {
    const productFeed: ProductFeed = productFeedJSON;

    // Replace '&quot;' with '"' in the description
    const cleanDescription = (description: string) => {
        return description.replace(/&quot;/g, '"');
    }

    const truncateDescription = (description: string, maxLength: number = 150) => {
        return description.length <= maxLength ? description : description.slice(0, maxLength) + '...';
    };

    const renderProductItems = () => {
        if (!productFeed || !productFeed.item) return null;

        const items = Array.isArray(productFeed.item) ? productFeed.item : [productFeed.item];
        
        return items.map(item => (
            <div className="product-item" key={item.guid}>
                <a href={`${item.link}?rf=238132560883807003`} target="_blank" rel="noopener noreferrer" className="product-link">
                    <div className="product-image-container">
                        <img src={item["media:content"]["@_url"]} alt={item.title} className="product-image"/>
                        <div className="product-hover-banner">
                            <span className="product-title">{item["media:title"]}</span>
                            <span className="product-description">{truncateDescription(cleanDescription(item["media:description"]))}</span>
                        </div>
                    </div>
                    <div className="product-price">{item["media:price"]}</div>
                </a>
            </div>
        ));
    }

    return(
        <section id="store" className="mx-auto mt-12">
            <div className="headercontainer">
                <h1>Store</h1>
            </div>
            <div className="product-grid">
                {renderProductItems()}
            </div>
        </section>
    )
}

export default Products;
