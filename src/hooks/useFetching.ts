import {useState} from 'react';

type FetchingFunction = <T>(...args: T[]) => Promise<void>;

export const useFetching = (
  callback: FetchingFunction,
): [FetchingFunction, boolean, string] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetching: FetchingFunction = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
