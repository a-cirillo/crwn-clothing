import React from 'react'

import './homepage.style.scss';

//componente funzione perchè non necessità so
//
// dinessun lifecyle methods
const HomePage = () => (
    <div className="homepage">
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='subtile'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>JACKET</h1>
                    <span className='subtile'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SNEAKER</h1>
                    <span className='subtile'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>WOMENS</h1>
                    <span className='subtile'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MENS</h1>
                    <span className='subtile'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

//non mi devo dimenticare di fare l'export
export default HomePage;