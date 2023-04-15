

import React, { useState, useEffect } from 'react';
import MarvelCard2 from '../marvel-card/MarvelCard2';
import './marvel-grid.scss';
import Pagination2 from '../pagination/Pagination';

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
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(8)


    useEffect(() => {
        const fetchData = async (list: string) => {
            try {
                setIsLoading(true);
                const response = await fetch(`${process.env.REACT_APP_NODEJS_API_URL}/marvel-api?list=${list}?page=${page}`);
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

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = pages.flat().slice(firstPostIndex, lastPostIndex)

    return (
        <>
        <div className="marvel-grid">
                {pages.flat().slice(firstPostIndex, page * lastPostIndex).map((characterFromPages: CharacterData) => (
                <MarvelCard2 key={characterFromPages.id} character={characterFromPages} isloading={isloading} dataFromPages={pages} currentPosts={currentPosts}/>
        ))}
            </div>
            <div className='pagination'>
            <Pagination2 totalPosts = {totalPage} postsPerPage = {postsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div> 
            
        </>
    );
  
};

export default MarvelGrid2;
