import React, { useState, useEffect, useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { debounce } from '@utils/libs/libs';

interface FormValues {
  artName: string;
}

const FormBody: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState([]);

  const validationSchema = Yup.object({
    artName: Yup.string(),
  });

  const initialValues: FormValues = {
    artName: '',
  };

  const handleSearch = async (query: string) => {
    if (query) {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${query}`,
      );
      const data = await response.json();
      setResults(data.data);
      console.log(data);
      console.log(results);
    } else {
      setResults([]);
    }
  };

  const debouncedSearch = useCallback(debounce(handleSearch, 500), []);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: string) => void,
  ) => {
    const value = e.target.value;
    setFieldValue('artName', value);
    setSearchTerm(value);
  };

  const renderError = (message: string) => <h1>{message}</h1>;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {({ setFieldValue }) => (
        <Form>
          <div className="field">
            <Field
              name="artName"
              type="text"
              className="input"
              placeholder="Search art, work..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, setFieldValue)
              }
            />
            <ErrorMessage name="artName" render={renderError} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormBody;
