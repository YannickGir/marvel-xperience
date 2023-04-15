import React from 'react';
import OutlineButton from '../button/Button';

interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export default function Pagination({
  setCurrentPage,
  totalPosts,
  postsPerPage,
  currentPage
}: PaginationProps) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className='pagination'>
      <OutlineButton onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
        {'<<'}
      </OutlineButton>
      {currentPage !== 1 && (
        <OutlineButton
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {'<'}
        </OutlineButton>
      )}
      <h1 style={{ display: 'inline', margin: '0 0.5rem', fontWeight: 'bold' }}>
        {currentPage}
      </h1>
      {currentPage !== totalPages && currentPage !== 12 && (
        <OutlineButton
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </OutlineButton>
      )}
      <OutlineButton onClick={() => setCurrentPage(12)} disabled={currentPage === 12}>
        {'>>'}
      </OutlineButton>
    </div>
  );
}
