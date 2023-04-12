import React from 'react';
import { useParams } from 'react-router';
import PageHeader from '../components/page-header/PageHeader';
import MarvelGrid from '../components/marvel-grid/MarvelGrid';

const Home = () => {
    const { category } = useParams();
    return (
        <>
            <PageHeader/>
            <div className="container">
                <div className="section mb-3">
                    <MarvelGrid category={category}/>
                </div>
            </div>
        </>
    );
}

export default Home;
