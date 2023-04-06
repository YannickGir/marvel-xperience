

import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import { useParams } from 'react-router';

import './marvel-grid.scss';

import MarvelCard from '../marvel-card/MarvelCard';
import Button, { OutlineButton } from '../button/Button';
// import Input from '../input/Input'

// import tmdbApi, { category, marvelType, tvType } from '../../api/tmdbApi';

type CharactersData = { id: number,
    name: string,
    thumbnail: {
      path: string;
      extension: string;
    },
    aliases: string[],
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

type CharacterData = {
    id: number,
    name: string,
    thumbnail: {
      path: string;
      extension: string;
    },
    aliases: string[],
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

  type CharacterProperty = 'aliases' | 'stories' | 'comics' | 'series';

const MarvelGrid = (_props: any) => {

    //-----------------------------

    const [characters, setCharacters] = useState<CharactersData[]>([]);
    const [character, setCharacter] = useState<CharacterData>();
    const [selectedOption, setSelectedOption] = useState<CharacterProperty>('stories');
    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value as CharacterProperty;
        if (value in characters[0]) {
          setSelectedOption(value);
        }
      }, [characters]);

   useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/');
      const data = await response.json();
      setCharacters(data.data.results);
    //   console.log(characters.length && characters.map((index) => characters[]);
      
    //   setLoading(false);
    } catch (error) {
      console.error(error);
    //   setError('Something went wrong');
    }
  };


    fetchData();
    }, []);

    return (
        <>
                    <div className="marvel-grid">
                        {characters.map((character) => (
                            <MarvelCard key={character.id} character={character} />
                        ))} <h1>{characters.length > 0 && characters[1].id}</h1>
                         {/* <h1>{characters.map(({name})=> { 
        console.log(`${name} `)}</h1>
      }); */}
                    </div>


{/* 
                    <>
      {characters.map((character) => (
        <div key={character.name}>
          <p>{character.name}</p>
          <div>
            <input
              type="radio"
              id={`${character.name}-stories`}
              name={`${character.name}-list`}
              value="stories"
              checked={selectedOption === "stories"}
              onChange={handleChange}
            />
            <label htmlFor={`${character.name}-stories`}>Stories</label>

            <input
              type="radio"
              id={`${character.name}-comics`}
              name={`${character.name}-list`}
              value="comics"
              checked={selectedOption === "comics"}
              onChange={handleChange}
            />
            <label htmlFor={`${character.name}-comics`}>Comics</label>

            <input
              type="radio"
              id={`${character.name}-series`}
              name={`${character.name}-list`}
              value="series"
              checked={selectedOption === "series"}
              onChange={handleChange}
            />
            <label htmlFor={`${character.name}-series`}>Series</label>
          </div> */}
        {/* {character[selectedOption] && character[selectedOption] && (
  <ul>
    {characters.map((item: any, index: number) => (
      <li key={index}>{item.selectedOption}</li>
    ))}
  </ul>
)} */}
        {/* </div>
      ))} */}
    {/* </> */}




            {/* <div>
                    <h1>Marvel Characters</h1>
                    <ul>
                        {characters.map((character) => (
                            <li key={character.id}>
                                <label>
                                    <input
                                    type="radio"
                                    name="character"
                                    value={character.id}
                                    checked={selectedCharacter?.id === character.id}
                                    onChange={handleCharacterSelection}
                                    />
                                    {character.name}
                                </label>
                            </li>
                        ))}
                    </ul>
                {selectedCharacter && (
                    <>
                        <h2>{selectedCharacter.name}</h2>
                        <div>
                        <label>
                            <input
                            type="radio"
                            name="displayType"
                            value="aliases"
                            checked={displayType === 'aliases'}
                            onChange={handleDisplayTypeChange}
                            />
                            Aliases
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="displayType"
                            value="stories"
                            checked={displayType === 'stories'}
                            onChange={handleDisplayTypeChange}
                            />
                            Stories
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="displayType"
                            value="comics"
                            checked={displayType === 'comics'}
                            onChange={handleDisplayTypeChange}
                            />
                            Comics
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="displayType"
                            value="series"
                            checked={displayType === 'series'}
                            onChange={handleDisplayTypeChange}
                            />
                            Series
                        </label>
                            </div>

                            {displayType === 'aliases' && (
                                <ul>
                                    {selectedCharacter?.aliases.map((alias) => (
                                        <li key={alias}>{alias}</li>
                                    ))}
                                </ul>
                            )}
                            {displayType === 'stories' && (
                                <ul>
                                    {selectedCharacter?.stories.items.map((story) => (
                                        <li key={story.resourceURI}>{story.name}</li>
                                    ))}
                                </ul>
                            )}
                            {displayType === 'comics' && (
                                <ul>
                                    {selectedCharacter?.comics.items.map((comic) => (
                                        <li key={comic.resourceURI}>{comic.name}</li>
                                    ))}
                                </ul>
                            )}
                            {displayType === 'series' && (
                                <ul>
                                    {selectedCharacter?.series.items.map((series) => (
                                        <li key={series.resourceURI}>{series.name}</li>
                                    ))}
                                </ul>
                            )}
                    </>
                )}
            </div> */}
        </>
    );
}


export default MarvelGrid;


// function setLoading(_arg0: boolean) {
//     throw new Error('Function not implemented.');
// }

// function setError(_arg0: string) {
//     throw new Error('Function not implemented.');
// }

