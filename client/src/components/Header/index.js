import React from 'react';
// import './header.css';
import { HeaderContainer, NavWrapper, useStyles, MenuList, MenuItem, ListItemIcon, Divider } from './header.styles';
import { Link, useLocation } from 'react-router-dom';
import { UserConsumer } from '../../utils/UserContext';
import Button from '../Button';
import logo from '../../images/logo.svg';
// import mobileLogo from '../../images/logo-responsive.svg';
import { Grid, Typography } from '@material-ui/core';
import { AccountBalanceOutlined, BarChartOutlined, DashboardOutlined, MonetizationOnOutlined } from '@material-ui/icons';

function Header() {

    // Use path endpoint to determine active page
    const location = useLocation();
    const currentPathname = location.pathname;

    const classes = useStyles();

    return (
        <UserConsumer>
            {
                value => {
                    const { isLoggedIn, handleLogout } = value;

                    return isLoggedIn && (
                        <HeaderContainer component='header' container item md={2} xs={12} alignContent='flex-start'>
                            <Grid container item xs={12}>
                                <img className={classes.headerLogo} src={logo} alt='logo' />
                            </Grid>
                            <NavWrapper component='nav' container item xs={12}>
                                <MenuList>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <DashboardOutlined fontSize='16' />
                                        </ListItemIcon>
                                        <Typography variant='inherit'>dashboard</Typography>
                                    </MenuItem>
                                    <MenuItem className={currentPathname === '/expenses' && classes.active}>
                                        <ListItemIcon>
                                            <MonetizationOnOutlined fontSize='16' />
                                        </ListItemIcon>
                                        <Typography variant='inherit'>
                                            <Link to='/expenses'>expenses</Link>
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <AccountBalanceOutlined fontSize='16' />
                                        </ListItemIcon>
                                        <Typography variant='inherit'>income</Typography>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <BarChartOutlined fontSize='16' />
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