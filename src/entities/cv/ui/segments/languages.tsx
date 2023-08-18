import { Quote } from '~/shared/ui/quote';
import { useTranslate } from '../../hooks/use-translate';
import { Text, Spacer, Link, Divider } from '@nextui-org/react';

export const Languages = () => {
  const t = useTranslate();

  return (
    <>
      <Quote label={t.labels.languages} />
      <Spacer y={0.5} />

      {t.cv.languages.map((lang) => {
        return (
          <div key={lang.name}>
            <Text>
              {lang.name} - {lang.level}
            </Text>
          </div>
        );
      })}
    </>
  );
};
