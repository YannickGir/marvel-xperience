
import React, { useState, useEffect } from 'react';
import MarvelCard from '../marvel-card/MarvelCard';
import OutlineButton from '../button/Button';
import './marvel-grid.scss';

const apiUrl = process.env.REACT_APP_NODEJS_API_URL;
type CharactersData = {
    id: number;
    name: string;
    thumbnail: {
        path: string;
        extension: string;
    };
  aliases: string[];
  stories: {
    available: number;
    collectionURI: string;
    items: {
        resourceURI: string;
        name: string;
        type: string;
    }[];
  };
  comics: {
    available: number;
    collectionURI: string;
    items: {
        resourceURI: string;
        name: string;
        type: string;
    }[];
  };
  series: {
    available: number;
    collectionURI: string;
    items: {
        resourceURI: string;
        name: string;
        type: string;
    }[];
  };
};

const MarvelGrid = () => {
  //------------setup loading page-------------
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  //-------------------------------------------
const [pages, setPages] = useState<CharactersData[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_NODEJS_API_URL}/marvel-api?page=${page}`);
            const data = await response.json();
            setTotalPage(data.data.total);
            setPages(prevPages => [...prevPages, data.data.results]);
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
                {pages.flat().slice(0, page * 8).map((character: CharactersData) => (
                    <MarvelCard key={`${character.id}-${character.name}`} character={character} />
                ))}
            </div>
            <div className="load-buttons load-more">
                {pages.length < totalPage && (
                    <>
                        <OutlineButton onClick={handleLoadMore}>Load More</OutlineButton>
                        {page > 1 && (
                            <OutlineButton onClick={handleLoadLess}>Load Less</OutlineButton>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default MarvelGrid;

