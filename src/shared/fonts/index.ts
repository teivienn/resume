import localFont from 'next/font/local';

export const nothingFont = localFont({
  src: './nothing-font.ttf',
});

nothingFont.style = {
  ...nothingFont.style,
  //@ts-expect-error
  letterSpacing: 1.3,
};

const ubuntuMonoRegular = localFont({ src: './UbuntuMono-Regular.ttf' });
const ubuntuMonoBoldItalic = localFont({ src: './UbuntuMono-BoldItalic.ttf' });
const ubuntuMonoItalic = localFont({ src: './UbuntuMono-Italic.ttf' });
const ubuntuMonoBold = localFont({ src: './UbuntuMono-Bold.ttf' });

ubuntuMonoBold.style = {
  ...ubuntuMonoBold.style,
  //@ts-expect-error
  letterSpacing: 1.2,
};

export const ubuntuMono = {
  Regular: ubuntuMonoRegular,
  BoldItalic: ubuntuMonoBoldItalic,
  Italic: ubuntuMonoItalic,
  Bold: ubuntuMonoBold,
};
