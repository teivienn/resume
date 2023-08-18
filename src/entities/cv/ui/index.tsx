import { Container, Spacer, Text } from '@nextui-org/react';
import { ContactInfo } from './segments/contact-info';
import { Summary } from './segments/summary';
import { Experience } from './segments/experience';
import { Education } from './segments/education';
import { Projects } from './segments/projects';
import { Languages } from './segments/languages';
import { Tools } from './segments/tools';

export const CvPage = () => {
  return (
    <Container fluid xs css={{ pt: 50 }}>
      <ContactInfo />

      <Spacer y={2} />

      <Summary />

      <Spacer y={2} />

      <Experience />

      <Spacer y={2} />

      <Education />

      <Spacer y={2} />

      <Languages />

      <Spacer y={2} />

      <Projects />
      <Spacer y={2} />

      <Tools />
      <Spacer y={5} />
    </Container>
  );
};
