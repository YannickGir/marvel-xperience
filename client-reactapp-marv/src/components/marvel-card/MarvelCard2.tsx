
import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';

import './marvel-card.scss';
import Button from '../button/Button';

type CharacterData = {
    map(arg0: (result: any) => JSX.Element[]): JSX.Element[];
    selectedList: string;
    id: number,
    name: string,
    thumbnail: {
      path: string;
      extension: string;
    },
    stories: {
      available: number;
      collectionURI: string;
      items: {
        resourceURI: string;
        name: string;
        type: string;
      }[];
    },
    comics: {
      available: number;
      collectionURI: string;
      items: {
        resourceURI: string;
        name: string;
        type: string;
      }[];
    },
    series: {
      available: number;
      collectionURI: string;
      items: {
        resourceURI: string;
        name: string;
        type: string;
      }[];
    },
};

type MarvelCardProps = {
    character: CharacterData;
    isloading: boolean;
    dataFromPages: CharacterData[][];

  }

  type CharacterProperty = keyof Pick<CharacterData, 'stories' | 'comics' | 'series'>;
  
  const MarvelCard2 = ({ character, isloading, dataFromPages }: MarvelCardProps) => {

    const { name, thumbnail} = character;
    const [selectedOption, setSelectedOption] = useState<CharacterProperty>('stories');

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
          setSelectedOption(value as CharacterProperty);
      }, []);

      const renderDataFilteredbyApi = () => 
        {
            if (isloading) 
            {
                return <div>Loading data...</div>;
            }
            const selectedList = character[selectedOption];
    if (!selectedList) {
      return <div>Select a list to display</div>;
    }
    const items = selectedList.items;
    return (
      <div className="marvel-card-datas">
        <h2>{selectedOption}</h2>
        {items?.map((item) => (
          <p key={item.resourceURI}>{item.name}</p>
        ))}
      </div>
    );
  };
        
    return (
    <div className="marvel-card-container">
      <section className="card">
        <div className="marvel-card card" style={{ backgroundImage: `url(${thumbnail.path}.${thumbnail.extension})` }}>
          <Button>
            <i className="bx bx-play">Try the checkboxes below!</i> 
          </Button>
        
        </div>
      </section>
      <section>
      <div className="checkbox-list">
            <input type="checkbox" id="stories" value="stories" onChange={handleChange} checked={selectedOption === 'stories'} />
            <label htmlFor="stories">Stories</label>
            <input type="checkbox" id="comics" value="comics" onChange={handleChange} checked={selectedOption === 'comics'} />
            <label htmlFor="comics">Comics</label>
            <input type="checkbox" id="series" value="series" onChange={handleChange} checked={selectedOption === 'series'} />
            <label htmlFor="series">Series</label>
          </div>
        <h1 className="marvel-card__name">{name}</h1>
        
      <hr
      />
        {renderDataFilteredbyApi()}

        <hr className='bottomhr'
      /> <br/>
      </section>
    </div>
    );
  };
  

export default MarvelCard2;