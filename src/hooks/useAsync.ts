import { useState, useCallback } from 'react';

export interface UseAsyncState<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

export const useAsync = <T,>(
  asyncFunction: () => Promise<T>,
  immediate: boolean = true
) => {
  const [state, setState] = useState<UseAsyncState<T>>({
    data: null,
    error: null,
    loading: immediate,
  });

  const execute = useCallback(async () => {
    setState({ data: null, error: null, loading: true });
    try {
      const response = await asyncFunction();
      setState({ data: response, error: null, loading: false });
      return response;
    } catch (error) {
      setState({
        data: null,
        error: error instanceof Error ? error : new Error('Unknown error'),
        loading: false,
      });
    }
  }, [asyncFunction]);

  React.useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { ...state, execute };
};

import React from 'react';
