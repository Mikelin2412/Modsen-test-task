import React, { useState, useCallback } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FieldContainer } from './style';
import { StyledField, StyledForm } from './style';
import { ARTWORK_SEARCH_URL } from '@constants/environment';
import useDebounce from '@utils/hooks/useDebounce';
import { WARNING_MESSAGES } from '@constants/constants';
import DropdownMenuComponent from '@components/dropdown_menu';

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
              <DropdownMenuComponent
                results={results}
                warningMessage={warningMessage}
                setIsFocused={setIsFocused}
              />
            )}
          </FieldContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

export default FormBody;
