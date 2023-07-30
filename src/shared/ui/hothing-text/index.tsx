import { Text, TextProps } from '@nextui-org/react';
import { nothingFont } from '~/shared/fonts';

export const NothingText = (props: TextProps) => {
  return <Text {...props} style={{ ...nothingFont.style, ...props?.style }} />;
};
