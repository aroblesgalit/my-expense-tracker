import React from 'react';
// import './header.css';
import { HeaderContainer, NavWrapper, useStyles, MenuItem, ListItemIcon } from './header.styles';
import { Link, useLocation } from 'react-router-dom';
import { UserConsumer } from '../../utils/UserContext';
import Button from '../Button';
import logo from '../../images/logo.svg';
import mobileLogo from '../../images/logo-responsive.svg';
import { Grid, MenuList, Typography } from '@material-ui/core';
import { DashboardOutlined } from '@material-ui/icons';

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
                                    {/* <li>dashboard</li>
                                    <li className={`${currentPathname === '/expenses' && 'active'}`}><Link to='/expenses'>expenses</Link></li>
                                    <li>income</li>
                                    <li>analytics</li> */}
                                </MenuList>
                            </NavWrapper>
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