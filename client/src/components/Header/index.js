import React, { useContext } from 'react';
// import './header.css';
import { HeaderContainer, NavWrapper, useStyles, MenuList, MenuItem, ListItemIcon, Divider, Menu } from './header.styles';
import { Link, useLocation } from 'react-router-dom';
import { UserConsumer } from '../../utils/UserContext';
import Button from '../Button';
import logo from '../../images/logo.svg';
import mobileLogo from '../../images/logo-responsive.svg';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { AccountBalanceOutlined, BarChartOutlined, DashboardOutlined, MonetizationOnOutlined } from '@material-ui/icons';
import HeaderContext from '../../utils/HeaderContext';

function Header() {

    // Use path endpoint to determine active page
    const location = useLocation();
    const currentPathname = location.pathname;

    const classes = useStyles();

    const desktopWidth = useMediaQuery('(min-width:960px)');

    const { anchorEl, handleMenuClick } = useContext(HeaderContext);

    return (
        <UserConsumer>
            {
                value => {
                    const { isLoggedIn, handleLogout } = value;

                    return isLoggedIn && (
                        <HeaderContainer component='header' container item md={2} xs={12} alignContent='flex-start'>
                            <Grid container item xs={12} className={classes.mobileHeader}>
                                <img className={classes.headerLogo} src={desktopWidth ? logo : mobileLogo} alt='logo' />
                                <div onClick={e => handleMenuClick(e)}>Menu</div>
                                <Menu open={Boolean(anchorEl)} anchorEl={anchorEl}>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <DashboardOutlined fontSize='small' />
                                        </ListItemIcon>
                                        <Typography variant='inherit'>dashboard</Typography>
                                    </MenuItem>
                                    <MenuItem className={currentPathname === '/expenses' ? classes.active : ''}>
                                        <ListItemIcon>
                                            <MonetizationOnOutlined fontSize='small' />
                                        </ListItemIcon>
                                        <Typography variant='inherit'>
                                            <Link to='/expenses'>expenses</Link>
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem>
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
                                    </MenuItem>
                                </Menu>
                            </Grid>
                            <NavWrapper component='nav' container item xs={12}>
                                <MenuList>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <DashboardOutlined fontSize='small' />
                                        </ListItemIcon>
                                        <Typography variant='inherit'>dashboard</Typography>
                                    </MenuItem>
                                    <MenuItem className={currentPathname === '/expenses' ? classes.active : ''}>
                                        <ListItemIcon>
                                            <MonetizationOnOutlined fontSize='small' />
                                        </ListItemIcon>
                                        <Typography variant='inherit'>
                                            <Link to='/expenses'>expenses</Link>
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem>
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
                                    </MenuItem>
                                </MenuList>
                            </NavWrapper>
                            <Divider />
                            <Button
                                type='button'
                                text='Log out'
                                action='secondary'
                                color='gray'
                                onClick={handleLogout}
                            />
                        </HeaderContainer>
                    )
                }
            }
        </UserConsumer>
    )
}

export default Header;