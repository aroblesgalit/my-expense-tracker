import React from 'react';
import { useStyles, FeaturesContainer, LogoWrapper, FeatureImagePaper, CaptionTypography, ArrowBackIos, ArrowForwardIos } from './features.styles';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import logo from '../../images/logo.svg';
import mobileLogo from '../../images/logo-responsive.svg';

function Features() {

    const classes = useStyles();

    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <FeaturesContainer component='section' container item md={7} xs={12} alignContent='flex-start'>
            <LogoWrapper container item xs={12} justify={desktop ? 'flex-start' : 'center'}>
                <img src={desktop ? logo : mobileLogo} alt='logo' />
            </LogoWrapper>
            <Grid container item xs={12} container='column' justify='center' alignContent='flex-start'>
                <Grid container item xs={12}>
                    <Grid container item xs={1} alignContent='center' justify='flex-start'>
                        <ArrowBackIos />
                    </Grid>
                    <Grid container item xs={10}>
                        <FeatureImagePaper elevation={1}>image</FeatureImagePaper>
                    </Grid>
                    <Grid container item xs={1} alignContent='center' justify='flex-end'>
                        <ArrowForwardIos />
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <CaptionTypography variant='body1' align='center'>Add a transaction</CaptionTypography>
                </Grid>
                <Grid container item xs={12} className={classes.slickDots}>
                    <span className={classes.activeSlickDot}></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </Grid>
            </Grid>
        </FeaturesContainer>
    )
}

export default Features;