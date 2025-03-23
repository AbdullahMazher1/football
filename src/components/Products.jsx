import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Products.css';
import { FaLongArrowAltRight } from 'react-icons/fa';

const ProductCard = ({ image, text }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2, 
    });

    return (
        <div ref={ref} className={`current-product ${inView ? 'slide-in' : 'hidden'}`}>
            <div className='current-im'>
                <img className='im-product' src={image} alt='' />
                <div className="product-hover-box"></div>
            </div>
            <div>
                <p className='product-para'>{text}</p>
                <div className='product-btn-container'>
                    <p className="product-button">
                        Read more <FaLongArrowAltRight className="forward-icon" size={15} />
                    </p>
                    <hr className='read-more-line'></hr>
                </div>
            </div>
        </div>
    );
}

function Products() {
    const products = [
        { image: '/f (6).jpg', text: 'The future of everyday health is changing and we’re the people changing it. You can be part of this.' },
        { image: '/f (8).jpg', text: 'Haleon has a strong portfolio of brands and is well positioned to play a vital role for people around the world. We have nine Power Brands, which are supported by Local Growth Brands.' },
        { image: '/f (3).jpg', text: 'Our strategy seeks to deliver sustainable above-market growth and attractive returns, while running a responsible business which is integral to all we do.' },
    ];

    return (
        <div className='products'>
            {products.map((product, index) => (
                <ProductCard key={index} image={product.image} text={product.text} />
            ))}
        </div>
    );
}

export default Products;
