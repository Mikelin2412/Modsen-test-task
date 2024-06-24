import React, { useState, useEffect } from 'react';
import { PaginationWrapper, PaginationBody } from './style';
import PaginationCard from '@components/pagination_card';
import { IArtworkData } from '@utils/interfaces';
import PaginationControls from '@components/pagination_controls';
import Loader from '@components/loader';

const Pagination: React.FC = () => {
  const [arts, setArts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [artsLimit, setArtsLimit] = useState(3);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async (page: number, limit: number) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`,
        );
        if (!response.ok) {
          throw new Error(`HTTP Error! Status code: ${response.status}`);
        }
        const result = await response.json();
        const transformedData = result.data.map((art: IArtworkData) => {
          const imageUrl = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;
          return { ...art, image: imageUrl };
        });
        setArts(transformedData);
        setTotalPages(Math.floor(result.pagination.total_pages / 2000));
        setArtsLimit(result.pagination.limit);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData(currentPage, artsLimit);
  }, [currentPage, artsLimit]);

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <PaginationWrapper>
      {loading ? (
        <Loader />
      ) : (
        <PaginationBody>
          {arts.map((art: IArtworkData) => (
            <PaginationCard
              key={art.id}
              id={art.id}
              artName={art.title}
              artistName={art.artist_title}
              imageUrl={art.image}
            />
          ))}
        </PaginationBody>
      )}
      <PaginationControls
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </PaginationWrapper>
  );
};

export default Pagination;
