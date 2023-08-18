import { Quote } from '~/shared/ui/quote';
import { useTranslate } from '../../hooks/use-translate';
import { Container, Spacer, Text } from '@nextui-org/react';

export const Summary = () => {
  const t = useTranslate();

  return (
    <>
      <Quote label={t.labels.summary} />
      <Spacer y={0.5} />

      {t.cv.summary.map((summary) => {
        return <Text key={summary}>{summary}</Text>;
      })}
    </>
  );
};
