import React from 'react';

//vediamo come funziona il componente withRouter
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

//anche in questo caso posso usare un functional component
// NOTA BENE history posso usarlo come props solo perché ho usato il wrapping con withRouter!!!
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div
        className = {`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtile'>SHOP NOW</span>
        </div>
    </div>
);

//questo era prima di usare writeRouting component
// export default MenuItem;

//ora usando writeRouting il componente menù item ha accesso a match, history e location props
export default withRouter(MenuItem)