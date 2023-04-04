import React, { ReactNode } from 'react';
import './page-header.scss';
import bg from '../../assets/images/Marvelbackg.jpg';
import { TopSection } from '../top-section/topSection';


interface PageHeaderProps {
  children: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
      <h2>{children} </h2> 
      <TopSection />
    </div>
  );
};

export default PageHeader;
