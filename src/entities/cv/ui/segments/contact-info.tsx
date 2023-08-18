import { NothingText } from '~/shared/ui/hothing-text';
import { useTranslate } from '../../hooks/use-translate';
import { Quote } from '~/shared/ui/quote';
import { Text, Spacer, Link } from '@nextui-org/react';
import { ubuntuMono } from '~/shared/fonts';

export const ContactInfo = () => {
  const t = useTranslate();

  return (
    <>
      <NothingText
        size={30}
        style={ubuntuMono.Bold.style}
        transform="uppercase"
      >
        {t.contact.me}
      </NothingText>
      <NothingText
        p
        css={{ marginTop: -10 }}
        size={10}
        transform="uppercase"
        unselectable="off"
      >
        React Native Developer
      </NothingText>
      <Spacer y={2} />
      <Text>
        Email:{' '}
        <Link href="mailto: vstatsura@outlook.com">vstatsura@outlook.com</Link>
      </Text>
      <Text>
        Telegram: <Link href="https://t.me/teivienn">@teivienn</Link>
      </Text>
      <Text>
        LinkedIn:{' '}
        <Link href="https://linkedin.com/in/vstatsura/">@vstatsura</Link>
      </Text>
    </>
  );
};
