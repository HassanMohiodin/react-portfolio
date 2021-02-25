import react from 'react';
import Card from '../card/card';

import './cardList.css';

class CardList extends react.Component {
    constructor (){
        super(); 
        this.state = {
            cardData: [
                {
                    label: 'About Ghost + Gatsby',
                    cardText: 'Build an API driven static-site with Gatsby.js and use Ghost as a completely decoupled headless CMS. Read more about how it works and how to use this starter theme here!',
                    footerText: 'Ghost',
                    time: '2',
                    imageUrl: 'https://gatsby.ghost.io/content/images/2019/01/ghost-headless-feature-image.png'
                },
                {
                    label: 'Welcome To Ghost',
                    cardText: 'Build an API driven static-site with Gatsby.js and use Ghost as a completely decoupled headless CMS. Read more about how it works and how to use this starter theme here!',
                    footerText: 'Gatsby',
                    time: '5',
                    imageUrl: 'https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png'
                },
                {
                    label: 'Writing Posts with Ghost',
                    cardText: 'Build an API driven static-site with Gatsby.js and use Ghost as a completely decoupled headless CMS. Read more about how it works and how to use this starter theme here!',
                    footerText: 'Ghost Posts',
                    time: '3',
                    imageUrl: 'https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png'
                },
                {
                    label: 'Publishing Options',
                    cardText: 'Build an API driven static-site with Gatsby.js and use Ghost as a completely decoupled headless CMS. Read more about how it works and how to use this starter theme here!',
                    footerText: 'Publishing Posts',
                    time: '10',
                    imageUrl: 'https://static.ghost.org/v3.0.0/images/publishing-options.png'
                },
                {
                    label: 'Managing Admin Settings',
                    cardText: 'Build an API driven static-site with Gatsby.js and use Ghost as a completely decoupled headless CMS. Read more about how it works and how to use this starter theme here!',
                    footerText: 'Ghost Posts',
                    time: '6',
                    imageUrl: 'https://static.ghost.org/v3.0.0/images/admin-settings.png'
                },
            ]
        }
    }

    render () {
        return (
            <div className="wrapper">
                {this.state.cardData.map(x => (
                    <div>
                        <Card label={x.label} cardText={x.cardText} footerText={x.footerText} time={x.time} imageUrl={x.imageUrl}/>
                    </div>
                ))}    
            </div>
        )
    }
}

export default CardList;