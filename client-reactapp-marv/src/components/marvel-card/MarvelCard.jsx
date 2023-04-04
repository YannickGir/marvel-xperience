import React from 'react';

import './marvel-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

// import { category } from '../../api/tmdbApi';
// import apiConfig from '../../api/apiConfig';

const MarvelCard = props => {

    const item  = props.item;

    // const link = '/' + category[props.category] + '/' + item.id;

    // const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link>
            <div className="marvel-card" style={{backgroundImage: `https://www.google.fr/url?sa=i&url=https%3A%2F%2Fwww.disney.fr%2Ffilms%2Fmarvel&psig=AOvVaw14_wfCCIbS5_IY4EnPr-Ya&ust=1680705145954000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLD83tu4kP4CFQAAAAAdAAAAABAJ`}}>
                <Button>
                    <i className="bx bx-play">dwgdgf</i>
                </Button>
            </div>
            <h3>TEST</h3>
        </Link>
    );
}

export default MarvelCard;
