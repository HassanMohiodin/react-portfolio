import react from 'react';
import Card from '../card/card';

import cardData from '../../data';

import './cardList.css';

class CardList extends react.Component {
    constructor (){
        super(); 
        this.state = {
            cardData: cardData.data
        }
    }

    render () {
        return (
            <div className="wrapper">
                {this.state.cardData.map(project => (
                    <div>
                        <Card {...project} />
                    </div>
                ))}    
            </div>
        )
    }
}

export default CardList;