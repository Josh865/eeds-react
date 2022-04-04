import axios from 'axios';
import useSWR from 'swr';

const getResults = async (key, { searchString, searchType }) => {
  // Treat everything before the first space as the first name and everything
  // after the first space as the last name. ...rest is always an array, so
  // it's converted back to a string using join().
  const [firstName, ...rest] = searchString.split(' ');
  const lastName = rest.join(' ');

  const response = await axios.get('ajax_functions.aspx', {
    params: {
      Function_ID: 135,
      First_Name: firstName,
      Last_Name: lastName,
      Do_Search_for_Coordinator: searchType === 'coordinator',
    },
  });

  return response.data;
};

export const useSearch = ({ searchString, searchType }) => {
  const { data, error } = useSWR(
    searchString ? ['getResults', { searchString, searchType }] : null,
    getResults
  );

  return {
    results: data,
    isError: error,
    isLoading: searchString && !data && !error,
  };
};
