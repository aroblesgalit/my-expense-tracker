import React from 'react';
import './features.css';
import { useStyles, FeaturesContainer, ArrowBackIos, ArrowForwardIos } from './features.styles';
import { Grid, Paper } from '@material-ui/core';
// import { UserConsumer } from '../../utils/UserContext';

function Features() {

    const classes = useStyles();

    return (
        <FeaturesContainer component='section' container item sm={7} xs={12}>
            <Grid item xs={12}>
                <div className={classes.logo}>my expense tracker</div>
            </Grid>
            <Grid container item xs={12} container='column'>
                <Grid container item xs={12}>
                    <Grid container item xs={1}>
                        <ArrowBackIos />
                    </Grid>
                    <Grid container item xs={10}>
                        <Paper elevation={1}>image</Paper>
                    </Grid>
                    <Grid container item xs={1}>
                        <ArrowForwardIos />
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <p>Add a transaction</p>
                </Grid>
                <Grid container item xs={12} className='feat-slick-dots'>
                    <span className='active'></span>
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