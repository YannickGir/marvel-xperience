import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';

import './marvel-grid.scss';

import MarvelCard from '../marvel-card/MarvelCard';
import Button, { OutlineButton } from '../button/Button';
// import Input from '../input/Input'

// import tmdbApi, { category, marvelType, tvType } from '../../api/tmdbApi';


type CharacterData = {
    id: number;
    name: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };


const MarvelGrid = (_props: any) => {

//-----------------------------

    const [characters, setCharacters] = useState<CharacterData[]>([]);

   useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/');
      const data = await response.json();
      setCharacters(data.data.results);
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
      ))}
            </div>
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

