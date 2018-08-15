const heroStyles = theme => ({
  hero: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-around',
    height: '100vh',
    background: 'radial-gradient(circle at bottom, #e01171, #560071, #0f0766)',
    color: theme.palette.primary.text
  },
  top: {
    wordWrap: 'break-word',
    color: theme.palette.primary.second
  },
  topFont: {
    fontFamily: 'RequiemFine',
    fontWeight: 'bolder',
  },
  topFontSecondary: {
    fontWeight: 200,
  },
  bottom: {
    fontFamily: 'Roboto',
    alignItems: 'flex-end',
    color: theme.palette.primary.main
  },
  bottomFont: {
    fontWeight: '300',
    fontSize: '2.3rem'
  },
  text: {
    color: theme.palette.text,
    fontWeight: '500'
  }
});

export default heroStyles;
