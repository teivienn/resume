import { useTheme } from '~/providers/theme';

export default function Home() {
  const { mode, toggleMode } = useTheme();
  return (
    <div onClick={() => toggleMode(mode === 'dark' ? 'light' : 'dark')}>
      hello: {mode}
    </div>
  );
}
