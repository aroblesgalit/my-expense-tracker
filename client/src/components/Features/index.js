import React from 'react';
// import './features.css';
import { useStyles, FeaturesContainer, LogoWrapper, FeatureImagePaper, CaptionTypography, ArrowBackIos, ArrowForwardIos } from './features.styles';
import { Grid } from '@material-ui/core';
import logo from '../../images/logo.svg';
// import { UserConsumer } from '../../utils/UserContext';

function Features() {

    const classes = useStyles();

    return (
        <FeaturesContainer component='section' container item sm={7} xs={12} alignContent='flex-start'>
            <LogoWrapper item xs={12}>
                <img src={logo} alt='logo' />
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
        // <UserConsumer>
        //     {
        //         value => {
        //             const { isLoggedIn } = value;
        //             return !isLoggedIn && (
        //                 <div className='features-container'>
        //                     <div>
        //                         <div className='logo'>my expense tracker</div>
        //                     </div>
        //                     <div className='features-wrapper'>
        //                         <div className='features'>
        //                             <div className='feat-left-arrow'><img src={leftArrow} alt="Left arrow" /></div>
        //                             <div className='feat-image-wrapper'>image</div>
        //                             <div className='feat-right-arrow'><img src={rightArrow} alt="Left arrow" /></div>
        //                         </div>
        //                         <p>Add a transaction</p>
        //                         <div className='feat-slick-dots'>
        //                             <span className='active'></span>
        //                             <span></span>
        //                             <span></span>
        //                             <span></span>
        //                             <span></span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             )
        //         }
        //     }
        // </UserConsumer>
    )
}

export default Features;