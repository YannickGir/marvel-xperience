
import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';

import './marvel-card.scss';
import Button from '../button/Button';

type CharacterData = {
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
};

type CharacterProperty = keyof Pick<CharacterData, 'stories' | 'comics' | 'series' | 'name'>;
const MarvelCard = ({ character }: MarvelCardProps) => {
    const { id, name, thumbnail, stories, comics, series } = character;
  
    const [selectedOption, setSelectedOption] = useState<CharacterProperty>('name');
  
    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value as CharacterProperty;
      setSelectedOption(value);
    }, []);
  
    const renderDataFilteredbyReact = useCallback(() => {
      switch (selectedOption) {
        case 'stories':
          return (
            <div className="marvel-card-datas">
              <h2>Stories</h2>
              <br />
              {stories?.items?.map((story) => (
                <p key={story.resourceURI}>{story.name}</p>
              ))}
            </div>
          );
        case 'comics':
          return (
            <div className="marvel-card-datas ">
              <h2>Comics</h2>
              <br />
              {comics?.items?.map((comic) => (
                <p key={comic.resourceURI}>{comic.name}</p>
              ))}
            </div>
          );
        case 'series':
          return (
            <div className="marvel-card-datas ">
              <h2>Series</h2>
              <br />
              {series?.items?.map((series) => (
                <p key={series.resourceURI}>{series.name}</p>
              ))}
            </div>
          );
        default:
          return null;
      }
    }, [selectedOption, stories?.items, comics?.items, series?.items]);
  
    const renderCharacterName = useCallback(() => {
      switch (selectedOption) {
        case 'stories':
          return name;
        case 'comics':
          return `${name} - Comics`;
        case 'series':
          return `${name} - Series`;
        default:
          return null;
      }
    }, [selectedOption, name]);

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
            <div className="checkbox-list marvel-card-datas-checkboxes ">
                        <input type="radio" id="name" value="name" onChange={handleChange} checked={selectedOption === 'name'} />
                        <label htmlFor="name">Name</label>
                        <input type="radio" id="stories" value="stories" onChange={handleChange} checked={selectedOption === 'stories'} />
                        <label htmlFor="stories">Stories</label>
                        <input type="radio" id="comics" value="comics" onChange={handleChange} checked={selectedOption === 'comics'} />
                        <label htmlFor="comics">Comics</label>
                        <input type="radio" id="series" value="series" onChange={handleChange} checked={selectedOption === 'series'} />
                        <label htmlFor="series">Series</label>
            </div>
            <hr />
             {selectedOption === 'name' ? (
              <h1 className="marvel-card__name">{name}</h1>
            ) : (
              renderDataFilteredbyReact()
            )} 
            <hr className="bottomhr" />
          </section>
        </div>
      );
            }

export default MarvelCard;
