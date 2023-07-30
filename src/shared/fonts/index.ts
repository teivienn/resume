import localFont from 'next/font/local';

export const nothingFont = localFont({
  src: './nothing-font.ttf',
});

nothingFont.style = {
  ...nothingFont.style,
  //@ts-expect-error
  letterSpacing: 1.3,
};
