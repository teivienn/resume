import { ThemeToggle } from '~/shared/ui/theme-toggle';
import { NothingText } from '~/shared/ui/hothing-text';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        height: '100vh',
      }}
    >
      <div
        style={{
          borderRadius: 25,
          borderWidth: 8,
          width: 360,
          height: 700,
          borderColor: '#000',
          border: 'solid',
          padding: 10,
        }}
      >
        <ThemeToggle />

        <NothingText h2 size={30} transform="uppercase" unselectable="off">
          Vitaly Statsura
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

        <NothingText
          p
          css={{ marginTop: 30 }}
          size={10}
          transform="uppercase"
          unselectable="off"
        >
          Coming soon...
        </NothingText>
      </div>
    </div>
  );
}
