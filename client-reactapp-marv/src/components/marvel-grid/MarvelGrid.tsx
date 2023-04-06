import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import './marvel-grid.scss';

import MarvelCard from '../marvel-card/MarvelCard';

import OutlineButton from '../button/Button';

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


const MarvelGrid = (_props: any) => {

    //------------setup loading page-------------
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const { keyword } = useParams();
    //-----------------------------

    const [characters, setCharacters] = useState<CharactersData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/?page=${page}`);
                const data = await response.json();
                setTotalPage(data.data.total);
                setCharacters([...characters, ...data.data.results]);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [page]);

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    const handleLoadLess = () => {
        if (page > 1) {
          setPage(page - 1);
        }
    };

    return (
        <>
            <div className="marvel-grid">
                {characters.slice(0, page * 8).map((character) => (
                    <MarvelCard key={character.id} character={character} />
                ))}
            </div>
            <div className="load-buttons load-more">
        {characters.length < totalPage && (
          <>
            <OutlineButton onClick={handleLoadMore}>Load More</OutlineButton>
            <OutlineButton onClick={handleLoadLess}>Load Less</OutlineButton>
          </>
        )}
      </div>
    </>
  );
};

export default MarvelGrid;
