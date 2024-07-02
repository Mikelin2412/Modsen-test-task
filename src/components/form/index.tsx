import React, { useState, useCallback } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FieldContainer, DropdownMenu, DropdownItem } from './style';
import { useNavigate } from 'react-router-dom';
import { DETAILED_INFO_ROUTE } from '@constants/user_routes';
import { StyledField, StyledForm } from './style';
import { ARTWORK_SEARCH_URL } from '@constants/environment';
import useDebounce from '@utils/hooks/useDebounce';
import { WARNING_MESSAGES } from '@constants/constants';

interface FormValues {
  artName: string;
}

interface Artwork {
  id: number;
  title: string;
}

const FormBody: React.FC = () => {
  const [results, setResults] = useState<Artwork[] | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [warningMessage, setWarningMessage] = useState(WARNING_MESSAGES.noArtworks);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    artName: Yup.string()
      .matches(
        /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~`№]*$/,
        WARNING_MESSAGES.noSpecSymbols,
      )
      .min(1, WARNING_MESSAGES.minLength)
      .nonNullable(),
  });

  const initialValues: FormValues = {
    artName: '',
  };

  const searchSuitableArtworks = useDebounce(async (query: string) => {
    try {
      validationSchema.validateSync({ artName: query });
      const encodedQuery = encodeURIComponent(query);
      const response = await fetch(`${ARTWORK_SEARCH_URL}?q=${encodedQuery}`);
      const data = await response.json();
      setResults(data.data);
      setWarningMessage(WARNING_MESSAGES.noArtworks);
    } catch (err) {
      if (err instanceof Error && err.name === 'ValidationError') {
        setWarningMessage(err.message);
      }
      setResults([]);
    }
  }, 300);

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement>,
      setFieldValue: (field: string, value: string) => void,
    ) => {
      const value = e.target.value;
      setFieldValue('artName', value);
      searchSuitableArtworks(value);
    },
    [],
  );

  const renderError = (message: string) => <h1>{message}</h1>;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {({ setFieldValue }) => (
        <StyledForm>
          <FieldContainer>
            <StyledField
              name="artName"
              type="text"
              className="input"
              placeholder="Search art, work..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, setFieldValue)
              }
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <ErrorMessage name="artName" render={renderError} />
            {isFocused && results && (
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
            )}
          </FieldContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

export default FormBody;
