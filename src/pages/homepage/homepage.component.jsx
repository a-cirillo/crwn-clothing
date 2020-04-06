import React from 'react'

import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component";

//componente funzione perchè non necessità so
//
// dinessun lifecyle methods
const HomePage = () => (
    <div className="homepage">
       <Directory/>
    </div>
);

//non mi devo dimenticare di fare l'export
export default HomePage;