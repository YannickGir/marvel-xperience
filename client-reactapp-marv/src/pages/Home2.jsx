import React from 'react';

import { useParams } from 'react-router';

import PageHeader from '../components/page-header/PageHeader';

import MarvelGrid2 from '../components/marvel-grid/MarvelGrid2';

const Home = () => {

    const { category } = useParams();

    return (
        <>
            <PageHeader/>
           
            <div className="container">
                <div className="section mb-3">
                    <MarvelGrid2 category={category}/>
                </div>
            </div>
        </>
    );
}

export default Home;
