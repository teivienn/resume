import { Text, Spacer, Link, Divider } from '@nextui-org/react';
import { useTranslate } from '../../hooks/use-translate';
import { Quote } from '~/shared/ui/quote';
import React from 'react';

export const Experience = () => {
  const t = useTranslate();

  return (
    <>
      <Quote label={t.labels.experience} />
      <Spacer y={0.5} />

      {t.cv.experience.map((experience, index) => {
        const isLast = index === t.cv.experience.length - 1;
        return (
          <>
            <div
              key={experience.company}
              style={{ flexDirection: 'row', display: 'flex' }}
            >
              <div style={{ width: 220 }}>
                <Link href={experience.link}>
                  <Text size={20}>{experience.company}</Text>
                </Link>
                <Text>{experience.dates}</Text>
              </div>

              <div>
                <Text size={20}>{experience.position}</Text>

                {experience.responsibilities?.map((text) => (
                  <Text css={{ opacity: 0.5 }} key={text}>
                    - {text}
                  </Text>
                ))}
              </div>
            </div>

            {!isLast && (
              <>
                <Spacer y={0.5} />

                <Divider />
                <Spacer y={0.5} />
              </>
            )}
          </>
        );
      })}
    </>
  );
};
