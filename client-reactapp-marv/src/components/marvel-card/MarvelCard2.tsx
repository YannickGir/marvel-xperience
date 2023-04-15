
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
    currentPosts:CharacterData[];
  }
  
  type CharacterPropertyname = keyof Pick<CharacterData, 'name'>;
  type CharacterProperty =  'stories' | 'comics' | 'series'| null;
  
  const MarvelCard2 = ({ character, isloading, dataFromPages, currentPosts }: MarvelCardProps) => {

    const { thumbnail} = character;
    const [selectedOption, setSelectedOption] = useState<CharacterProperty | null>(null);
    const [characterName, setCharacterName] = useState('');
    const [showCharacterName, setShowCharacterName] = useState<CharacterPropertyname>('name');

    const handleChangeName = useCallback(() => {
        setSelectedOption(null);
        setShowCharacterName('name');
      }, []
    );
      
    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedOption(value as CharacterProperty);
        if (value === 'name') {
          handleChangeName();
        }
      }, [handleChangeName]
    );

    var characterfromcurrentPage: CharacterData;
    currentPosts.map((characterfromcurrent:CharacterData)=> {characterfromcurrentPage=characterfromcurrent})
//   useEffect (()=>{
//       console.log(characterfromcurrentPage)}, []
//       )

    const renderDataFilteredbyApi = () => {
        if (isloading) {
            return <div>Loading data...</div>;
        }
        if (!selectedOption) {
            return <h1 className="marvel-card__name">{showCharacterName ? characterName : ''}</h1>
        } 
        else {
            const selectedList = characterfromcurrentPage[selectedOption];
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
        }
      };
    
    useEffect(() => {
        if (character) {
            setCharacterName(character.name);
            setShowCharacterName('name');
        }
    }, [character, setShowCharacterName]);

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
                    <input
                        type="radio"
                        id="name"
                        onChange={handleChangeName}
                        checked={!selectedOption}
                        value="name"
                        />
                    <label htmlFor="showName">Name</label>
                    <input 
                        type="radio" 
                        id="stories" 
                        value="stories"
                        onChange={handleChange} 
                        checked={selectedOption === 'stories'} 
                    />
                    <label htmlFor="stories">Stories</label>
                    <input 
                        type="radio" 
                        id="comics" 
                        value="comics" 
                        onChange={handleChange} 
                        checked={selectedOption === 'comics'} 
                    />
                    <label htmlFor="comics">Comics</label>
                    <input 
                        type="radio" 
                        id="series" 
                        value="series" 
                        onChange={handleChange} 
                        checked={selectedOption === 'series'} 
                    />
                    <label htmlFor="series">Series</label>
                </div>
                <hr/>
                {renderDataFilteredbyApi()}
                <hr className='bottomhr'/> 
                <br/>
            </section>
        </div>
    );
};
  
export default MarvelCard2;
