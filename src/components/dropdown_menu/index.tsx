import React from 'react';
import { DropdownMenu, DropdownItem } from './style';
import { useNavigate } from 'react-router-dom';
import { DETAILED_INFO_ROUTE } from '@constants/user_routes';

interface Artwork {
  id: number;
  title: string;
}

interface DropdownMenuProps {
  results: Artwork[];
  warningMessage: string;
  setIsFocused: (focus: boolean) => void;
}

const DropdownMenuComponent: React.FC<DropdownMenuProps> = ({ results, warningMessage, setIsFocused }) => {
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      {results.length > 0 ? (
        results?.map((result) => (
          <DropdownItem
            key={result.id}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              navigate(DETAILED_INFO_ROUTE + `/${result.id}`);
              setIsFocused(false);
            }}
          >
            {result.title}
          </DropdownItem>
        ))
      ) : (
        <DropdownItem>{warningMessage}</DropdownItem>
      )}
    </DropdownMenu>
  );
};

export default React.memo(DropdownMenuComponent);
