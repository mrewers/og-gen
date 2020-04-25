import { css, SerializedStyles } from '@emotion/core';

export const container: SerializedStyles = css({
  background: 'linear-gradient(27deg, rgba(5, 55, 130, 1) 0%, rgba(29, 136, 224, 1) 100%)',
  display: 'flex',
  height: 630,
  width: 1200,
});

export const headline: SerializedStyles = css({
  color: '#e8f3fc',
  fontFamily: '"Oswald", sans-serif',
  height: '100%',
});

export const inner: SerializedStyles = css({
  background: '#030e17',
  borderRadius: 8,
  boxShadow: `0 11.5px 3.5px rgba(0, 0, 0, 0.025),
  0 20.1px 11.5px rgba(0, 0, 0, 0.036),
  0 27.2px 27.7px rgba(0, 0, 0, 0.042),
  0 36.5px 53.4px rgba(0, 0, 0, 0.048),
  0 69px 69px rgba(0, 0, 0, 0.07)`,
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '30px',
  padding: '30px',
});

export const tagline: SerializedStyles = css({
  color: 'white',
  fontFamily: 'Cascadia Code',
  fontSize: 24,
});

export const textfit: ITextFitStyle = {
  lineHeight: 1.25,
  maxHeight: '80%',
  maxWidth: '80%',
  minHeight: '80%',
};
