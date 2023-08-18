import { useRouter } from 'next/router';

export const useQueryParams = () => {
  const query = useRouter().query;

  const getParam = (key: string): string | undefined => {
    return query[key] as string | undefined;
  };

  return {
    getParam,
    query,
  };
};
