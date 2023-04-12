

import React, { useState, useEffect } from 'react';
import OutlineButton from '../button/Button';
import MarvelCard2 from '../marvel-card/MarvelCard2';
import './marvel-grid.scss';
const apiUrl = process.env.NODEJS_API_URL;


type CharacterData = {
    map(arg0: (result: any) => JSX.Element[]): JSX.Element[];
    selectedList: string;
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

const MarvelGrid2 = () => {
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [pages, setPages] = useState<CharacterData[][]>([]);
    const [isloading, setIsLoading] = useState<boolean>(false);
    const [selectedList, setSelectedList] = useState<string>('comic');


    useEffect(() => {
        const fetchData = async (list: string) => {
            try {
                setIsLoading(true);
                const response = await fetch(`${process.env.REACT_APP_API_URL}/marvel-api?list=${list}?page=${page}`);
                const data = await response.json();
                if (data && data.data && data.data.total) {
                    setTotalPage(data.data.total);
                    setPages([...pages, data.data.results]);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData(selectedList);
    }, [page, selectedList]);

//   useEffect(() => {
//     console.log(pages);
//   }, [pages]);

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
                {pages.flat().slice(0, page * 8).map((characterFromPages: CharacterData) => (
                <MarvelCard2 key={characterFromPages.id} character={characterFromPages} isloading={isloading} dataFromPages={pages}/>
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

export default MarvelGrid2;
