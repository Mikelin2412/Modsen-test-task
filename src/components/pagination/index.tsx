import React, { useState, useEffect } from 'react';
import { PaginationWrapper, PaginationBody } from './style';
import PaginationCard from '@components/pagination_card';
import { IArtworkData, IArtworks } from '@utils/interfaces';
import PaginationControls from '@components/pagination_controls';
import Loader from '@components/loader';
import useFetch from '@utils/hooks/useFetch';

const Pagination: React.FC = () => {
  const [arts, setArts] = useState<IArtworkData[] | null>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [artsLimit, setArtsLimit] = useState(3);
  const [totalPages, setTotalPages] = useState(0);
  const { data, loading, error } = useFetch<IArtworks>(
    `https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=${artsLimit}`,
  );

  useEffect(() => {
    if (data && !loading && !error) {
      const transformedData = data.data.map((art: IArtworkData) => {
        const imageUrl = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;
        return { ...art, image: imageUrl };
      });
      setArts(transformedData);
      setTotalPages(Math.floor(data.pagination.total_pages / 2000));
      setArtsLimit(data.pagination.limit);
    }
  }, [data, loading, error, currentPage, artsLimit]);

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <PaginationWrapper>
      {loading ? (
        <Loader />
      ) : (
        <PaginationBody>
          {arts?.map((art: IArtworkData) => (
            <PaginationCard
              key={art.id}
              id={art.id}
              artName={art.title}
              artistName={art.artist_title}
              imageUrl={art.image ?? ''}
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
