import { Quote } from '~/shared/ui/quote';
import { useTranslate } from '../../hooks/use-translate';
import { Text, Spacer, Link, Divider } from '@nextui-org/react';

export const Education = () => {
  const t = useTranslate();

  return (
    <>
      <Quote label={t.labels.education} />
      <Spacer y={0.5} />

      {t.cv.education.map((education) => (
        <div
          key={education.university}
          style={{ flexDirection: 'row', display: 'flex' }}
        >
          <div style={{ width: 320 }}>
            <Text size={20}>{education.university}</Text>
            <Text>{education.dates}</Text>
          </div>

          <div>
            <Text size={20}>{education.position}</Text>
          </div>
        </div>
      ))}
    </>
  );
};
