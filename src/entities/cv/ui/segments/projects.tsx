import { Quote } from '~/shared/ui/quote';
import { Text, Spacer, Link, Divider } from '@nextui-org/react';

import { useTranslate } from '../../hooks/use-translate';
import { Fragment } from 'react';

export const Projects = () => {
  const t = useTranslate();

  return (
    <>
      <Quote label={t.labels.projects} />
      <Spacer y={0.5} />

      {t.cv.projects.map((project, index) => {
        const isLast = index === t.cv.projects.length - 1;

        return (
          <Fragment key={project.name}>
            <div>
              <Text size={20}>{project.name}</Text>
              <Text css={{ opacity: 0.5 }}>{project.descriptions}</Text>
            </div>
            <Spacer y={0.5} />
            <Text>Role: {project.role}</Text>
            <Text>Responsibilities: </Text>
            <div style={{ paddingLeft: 10 }}>
              {project.responsibilities.map((text) => (
                <Text key={text}>- {text}</Text>
              ))}
            </div>

            {!isLast && (
              <>
                <Spacer y={0.5} />

                <Divider />
                <Spacer y={0.5} />
              </>
            )}
          </Fragment>
        );
      })}
    </>
  );
};
