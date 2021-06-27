import React, { useContext } from 'react'
import {
  HeaderContainer,
  NavWrapper,
  useStyles,
  MenuList,
  MenuItem,
  ListItemIcon,
  Divider,
  Menu
} from './header.styles'
import { Link, useLocation } from 'react-router-dom'
import { UserConsumer } from '../../utils/UserContext'
// import Button from '../Button'
import mainLogo from '../../images/x-pense_logo_main.svg'
import mobileLogo from '../../images/x-pense_logo_mobile.svg'
import dashboardIcon from '../../images/icon_nav_dashboard.svg'
import expensesIcon from '../../images/icon_nav_expenses.svg'
import logoutIcon from '../../images/icon_nav_logout.svg'
import { Grid, Typography, useMediaQuery } from '@material-ui/core'
import {
  // AccountBalanceOutlined,
  // BarChartOutlined,
  // MonetizationOnOutlined,
  Menu as MenuIcon
  // ExitToAppOutlined
} from '@material-ui/icons'
import HeaderContext from '../../utils/HeaderContext'

function Header () {
  // Use path endpoint to determine active page
  const location = useLocation()
  const currentPathname = location.pathname

  const classes = useStyles()

  const desktopWidth = useMediaQuery('(min-width:960px)')

  const { anchorEl, handleMenuClick, handleMenuItemClick } = useContext(
    HeaderContext
  )

  return (
    <UserConsumer>
      {value => {
        const { isLoggedIn, handleLogout } = value

        return (
          isLoggedIn && (
            <HeaderContainer
              component='header'
              container
              item
              md={2}
              xs={12}
              alignContent='flex-start'
            >
              <Grid container item xs={12} className={classes.mobileHeader}>
                <img
                  className={classes.headerLogo}
                  src={desktopWidth ? mainLogo : mobileLogo}
                  alt='logo'
                />
                <MenuIcon
                  className={classes.mobileMenuIcon}
                  fontSize='large'
                  onClick={e => handleMenuClick(e)}
                />
                <Menu
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  onClose={handleMenuItemClick}
                >
                  <MenuItem
                    onClick={handleMenuItemClick}
                    className={
                      currentPathname === '/dashboard' ? classes.active : ''
                    }
                  >
                    <ListItemIcon>
                      <img
                        src={dashboardIcon}
                        alt='Dashboard icon'
                        className={classes.navIcon}
                      />
                    </ListItemIcon>
                    <Typography variant='inherit'>
                      <Link to='/dashboard'>dashboard</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuItemClick}
                    className={
                      currentPathname === '/expenses' ? classes.active : ''
                    }
                  >
                    <ListItemIcon>
                      <img
                        src={expensesIcon}
                        alt='Expenses icon'
                        className={classes.navIcon}
                      />
                    </ListItemIcon>
                    <Typography variant='inherit'>
                      <Link to='/expenses'>expenses</Link>
                    </Typography>
                  </MenuItem>
                  {/* <MenuItem onClick={handleMenuItemClick}>
                    <ListItemIcon>
                      <AccountBalanceOutlined fontSize='small' />
                    </ListItemIcon>
                    <Typography variant='inherit'>income</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleMenuItemClick}>
                    <ListItemIcon>
                      <BarChartOutlined fontSize='small' />
                    </ListItemIcon>
                    <Typography variant='inherit'>analytics</Typography>
                  </MenuItem> */}
                  <Divider />
                  <MenuItem
                    onClick={() => {
                      handleMenuItemClick()
                      handleLogout()
                    }}
                  >
                    <ListItemIcon>
                      <img
                        src={logoutIcon}
                        alt='Logout icon'
                        className={classes.navIcon}
                      />
                    </ListItemIcon>
                    <Typography variant='inherit'>Log out</Typography>
                  </MenuItem>
                </Menu>
              </Grid>
              <NavWrapper component='nav' container item xs={12}>
                <MenuList>
                  <MenuItem
                    className={
                      currentPathname === '/dashboard' ? classes.active : ''
                    }
                  >
                    <ListItemIcon>
                      <img
                        src={dashboardIcon}
                        alt='Dashboard icon'
                        className={classes.navIcon}
                      />
                    </ListItemIcon>
                    <Typography variant='inherit'>
                      <Link to='/dashboard'>dashboard</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    className={
                      currentPathname === '/expenses' ? classes.active : ''
                    }
                  >
                    <ListItemIcon>
                      <img
                        src={expensesIcon}
                        alt='Expenses icon'
                        className={classes.navIcon}
                      />
                    </ListItemIcon>
                    <Typography variant='inherit'>
                      <Link to='/expenses'>expenses</Link>
                    </Typography>
                  </MenuItem>
                  {/* <MenuItem>
                    <ListItemIcon>
                      <AccountBalanceOutlined fontSize='small' />
                    </ListItemIcon>
                    <Typography variant='inherit'>income</Typography>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <BarChartOutlined fontSize='small' />
                    </ListItemIcon>
                    <Typography variant='inherit'>analytics</Typography>
                  </MenuItem> */}
                  <Divider />
                  <MenuItem
                    onClick={() => {
                      handleMenuItemClick()
                      handleLogout()
                    }}
                  >
                    <ListItemIcon>
                      <img
                        src={logoutIcon}
                        alt='Logout icon'
                        className={classes.navIcon}
                      />
                    </ListItemIcon>
                    <Typography variant='inherit'>Log out</Typography>
                  </MenuItem>
                </MenuList>
              </NavWrapper>
              {/* {desktopWidth && (
                <>
                  <Divider />
                  <Button
                    type='button'
                    text='Log out'
                    action='secondary'
                    color='gray'
                    onClick={handleLogout}
                  />
                </>
              )} */}
            </HeaderContainer>
          )
        )
      }}
    </UserConsumer>
  )
}

export default Header
