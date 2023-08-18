import { styled, Text } from '@nextui-org/react';
import { NothingText } from '../hothing-text';
import { ubuntuMono } from '~/shared/fonts';

const Container = styled('dev', {
  dflex: 'center',
  size: 'auto',
  borderColor: '$text',
  borderLeftWidth: 3,
  borderLeftStyle: 'solid',
  paddingLeft: 5,
  height: 25,
  justifyContent: 'flex-start',
});

interface QuoteProps {
  label: string;
}

export const Quote = ({ label }: QuoteProps) => {
  return (
    <Container>
      <Text size={18} transform="uppercase">
        {label}
      </Text>
    </Container>
  );
};
