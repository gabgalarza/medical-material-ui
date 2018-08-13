//import Background from '../../imgs/harold-hero.jpg';

const heroStyles = theme => ({
  hero: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-between',
    height: '100vh',
    background: 'linear-gradient(to bottom, #d00040, #b9005d, #950074, #652181, #1d2c81)',
    color: theme.palette.primary.text
  },
  top: {
    alignItems: 'flex-start',
    wordWrap: 'break-word',
    color: theme.palette.primary.main
  },
  topFont: {
    fontFamily: 'RequiemFine',
    fontSize: '2.8rem',
    fontWeight: 'bolder',
    letterSpacing: '2.5rem'
  },
  bottom: {
    padding: '0 1.5rem 5rem',
    fontFamily: 'Roboto',
    alignItems: 'flex-end',
    color: theme.palette.primary.second
  },
  bottomFont: {
    fontWeight: '300',
    fontSize: '2.8rem'
  },
  bottomSecondary: {
    color: theme.palette.text,
    fontWeight: '500'
  }
});

export default heroStyles;
