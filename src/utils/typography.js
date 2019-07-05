import Typography from "typography"

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Colfax', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Colfax', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  headerColor: '#000000',
  bodyColor: '#000000',
  headerWeight: 600,
  bodyWeight: 400,
  scaleRatio: 2,
  overrideStyles: () => {
    return {
      '@media only screen and (min-width: 600px)': {
        html: {
          fontSize: `${(18 / 16) * 100}%`,
        },
      },
      '@media only screen and (min-width: 960px)': {
        html: {
          fontSize: `${(20 / 16) * 100}%`,
        },
      },
      '@media only screen and (min-width: 1280px)': {
        html: {
          fontSize: `${(20 / 16) * 100}%`,
        },
      },
      'h2, h3': {
        fontWeight: 500,
      },
      h3: {
        marginBottom: '0.5rem',
      },
      h5: {
        textTransform: 'uppercase',
        fontSize: '0.8rem',
        letterSpacing: '1px',
        fontWeight: 500,
      },
      // eslint-disable-next-line id-length
      p: {
        color: '#555',
      },
    };
  },
});

export default typography;

export const rhythm = typography.rhythm;
export const scale = typography.scale;