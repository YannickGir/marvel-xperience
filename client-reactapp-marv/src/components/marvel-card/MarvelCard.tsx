
import React, {useState, useEffect, useRef} from 'react';

import './marvel-card.scss';

import Button from '../button/Button';

type CharacterData = {
    id: number;
    name: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
  
  type MarvelCardProps = {
    character: CharacterData;
  };

  const MarvelCard = ({ character }: MarvelCardProps) => {
    const { id, name, thumbnail } = character;

    return (
        <div>
            <div className="marvel-card" style={{backgroundImage:`url(${thumbnail.path}.${thumbnail.extension})`}}>
                <Button>
                    <i className="bx bx-play">Try the chekboxes below !</i>
                </Button>
                
            </div>
            <h2 className="marvel-card__name">{name}</h2>

        </div>
    );
}

export default MarvelCard;
