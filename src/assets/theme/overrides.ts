import { Overrides } from '@material-ui/core/styles/overrides';

const overrides: Overrides = {
  MuiPaper: {
    root: {
      boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.08)'
    },
    elevation1: {
      boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.08)'
    }
  },

  MuiButton: {
    root: {
      boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.08)'
    }
  }
};

export default overrides;
