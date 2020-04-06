import React from 'react';
import './directory.styles.scss'
import MenuItem from "../menu-item/menu-item.component";

//qui uso una class component perchè avrò bisogno di gestire gli states, quindi avrò un constructor con il super

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats',
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }

    //con shortcuts sulle props
    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }

    //senza shortCuts sulle props
    // render(){
    //     return (
    //         <div className='directory-menu'>
    //             {
    //                 this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
    //                     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
    //                 ))
    //             }
    //         </div>
    //     )
    // }

    //nota potevo avere lo stesso risultato usando
    // render(){
    //     return (
    //         <div className='directory-menu'>
    //             {
    //                 this.state.sections.map(section => (
    //                     <MenuItem key={section.id} title={section.title}/>
    //                 ))
    //             }
    //         </div>
    //     )
    // }
}

export default Directory;

