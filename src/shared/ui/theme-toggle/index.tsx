import { CSS, styled } from '@nextui-org/react';
import { useTheme } from '~/providers/theme';
import { Moon, Sun } from '~/shared/icons';

const StyledButton = styled('button', {
  dflex: 'center',
  size: 'auto',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  padding: 0,
  '& .theme-selector-icon': {
    color: '$colors$accents6',
  },
  '@xsMax': {
    px: '$2',
  },
});

interface Props {
  className?: string;
  css?: CSS;
}

export const ThemeToggle = ({ className, css }: Props) => {
  const { mode, toggleMode } = useTheme();
  const handleToggleTheme = () => {
    toggleMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <StyledButton
      aria-label="toggle a light and dark color scheme"
      className={`theme-selector-container; ${className}`}
      css={css}
      onClick={handleToggleTheme}
    >
      {mode === 'dark' ? (
        <Moon filled className="theme-selector-icon" size={20} />
      ) : (
        <Sun filled className="theme-selector-icon" size={20} />
      )}
    </StyledButton>
  );
};
