export default {
  root: {
    fontSize: '1.5em',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30
  },
  input: {
    height: 50,
    margin: 5,
    borderRadius: 4,
    boxShadow: 'none',
  },
  error: {
    border: '1px solid rgb(184, 15, 15)',
    boxShadow: '0 0 5px red',
    background: 'rgba(235, 154, 154, 0.5)',
    ':focus': {
      boxShadow: '0 0 10px 1px rgba(162, 13, 13, 1)',
      outline: 'rgba(238, 81, 81, 1) auto 5px',
      padding: '3px 0px 3px 3px',
      margin: '5px 1px 3px 0px',
      border: '1px solid rgba(238, 81, 81, 1)'
    }
  },
  tooltip: {
    fontSize: '.6em',
    color: 'grey',
    paddingLeft: 15,
  },
  strongGlow: {
    ':focus': {
      boxShadow: '0 0 10px 5px rgba(18, 172, 215, 1)',
      padding: '3px 0px 3px 3px',
      margin: '5px 1px 3px 0px',
      border: '1px solid rgba(81, 203, 238, 1)'
    }
  },
  flatLiner: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderBottom: '1px solid grey',
    ':focus': {
      borderBottom: '1px solid #333',
      outline: 'none'
    }
  }
}
