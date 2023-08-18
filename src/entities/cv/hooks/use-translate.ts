import { useRouter } from 'next/router';
import { useQueryParams } from '~/shared/hooks/use-query-params';
import { getTranslate, Locale } from '../locale';
import { useMemo } from 'react';

export const useTranslate = () => {
  const isRu = useQueryParams().getParam('lang') === 'ru';

  return useMemo(() => getTranslate(isRu ? Locale.Ru : Locale.En), [isRu]);
};
