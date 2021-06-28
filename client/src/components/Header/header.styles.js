import { makeStyles, withStyles } from '@material-ui/core'
import MuiGrid from '@material-ui/core/Grid'
import MuiMenuList from '@material-ui/core/MenuList'
import MuiMenuItem from '@material-ui/core/MenuItem'
import MuiListItemIcon from '@material-ui/core/ListItemIcon'
import MuiDivider from '@material-ui/core/Divider'
import MuiMenu from '@material-ui/core/Menu'

export const HeaderContainer = withStyles({
  root: {
    backgroundColor: '#364F6B',
    fontFamily: 'Roboto, sans-serif',
    padding: '16px 32px',
    height: 'auto',

    '@media (min-width: 960px)': {
      padding: '32px',
      minHeight: '100vh'
    }
  }
})(MuiGrid)

export const NavWrapper = withStyles({
  root: {}
})(MuiGrid)

export const Menu = withStyles({
  paper: {
    padding: '20px'
  }
})(MuiMenu)

export const MenuList = withStyles({
  root: {
    padding: '40px 0 0',
    display: 'none',

    '@media (min-width: 960px)': {
      display: 'block'
    }
  }
})(MuiMenuList)

export const MenuItem = withStyles({
  root: {
    padding: '0',
    color: '#8A9BAE',

    '&:not(:last-child)': {
      padding: '0 0 16px'
    },

    '& a': {
      textDecoration: 'none',
      color: '#8A9BAE'
    },

    '&:hover': {
      backgroundColor: 'transparent',
      color: '#43DDE6'
    },

    '&:hover > div': {
      color: '#43DDE6'
    },

    '&:hover a': {
      color: '#43DDE6'
    },

    '&:hover img': {
      filter:
        'invert(72%) sepia(83%) saturate(1197%) hue-rotate(152deg) brightness(110%) contrast(80%)'
    }
  }
})(MuiMenuItem)

export const ListItemIcon = withStyles({
  root: {
    color: '#8A9BAE',
    minWidth: '38px',

    '& > img': {
      filter:
        'invert(72%) sepia(37%) saturate(188%) hue-rotate(171deg) brightness(80%) contrast(81%)'
    }
  }
})(MuiListItemIcon)

export const Divider = withStyles({
  root: {
    width: '100%',
    margin: '4px 0 20px',
    backgroundColor: '#DEE4EB',

    '@media (min-width: 960px)': {
      margin: '16px 0 32px',
      backgroundColor: '#8A9BAE'
    }
  }
})(MuiDivider)

export const useStyles = makeStyles(() => ({
  headerLogo: {
    maxWidth: '300px',

    '@media (min-width: 960px)': {
      maxWidth: '100%'
    }
  },
  active: {
    color: '#43DDE6!important',

    '&>div': {
      color: '#43DDE6'
    },

    '& a': {
      color: '#43DDE6!important'
    },

    '&>span:first-child': {
      color: '#43DDE6'
    },

    '& img': {
      filter:
        'invert(72%) sepia(83%) saturate(1197%) hue-rotate(152deg) brightness(110%) contrast(80%)'
    }
  },
  mobileHeader: {
    display: 'flex',
    justifyContent: 'space-between',

    '@media (min-width: 960px)': {
      marginBottom: '32px'
    }
  },
  mobileMenuIcon: {
    color: '#43DDE6',
    cursor: 'pointer',

    '@media (min-width: 960px)': {
      display: 'none'
    }
  },
  navIcon: {
    width: '16px'
  }
}))
