import React, { useState } from 'react'
import {
  useStyles,
  FeaturesContainer,
  LogoWrapper,
  FeatureImagePaper,
  CaptionTypography,
  ArrowBackIos,
  ArrowForwardIos
} from './features.styles'
import { Grid } from '@material-ui/core'
import mainLogo from '../../images/x-pense_logo_main.svg'
import ssExpenses from '../../images/ss_xpense_expenses.PNG'
import ssDashboard1 from '../../images/ss_xpense_dashboard_1.PNG'
import ssDashboard2 from '../../images/ss_xpense_dashboard_2.PNG'

function Features () {
  const classes = useStyles()

  // Carousel
  const [index, setIndex] = useState(0)
  const screenshots = [
    { src: ssDashboard1, alt: 'Dashboard' },
    { src: ssDashboard2, alt: 'Dashboard' },
    { src: ssExpenses, alt: 'Expenses' }
  ]
  function handleClick (direction) {
    if (direction === 'right') {
      if (index >= 0 && index < screenshots.length - 1) {
        setIndex(index + 1)
      } else {
        setIndex(0)
      }
    } else {
      if (index >= 1) {
        setIndex(index - 1)
      } else {
        setIndex(screenshots.length - 1)
      }
    }
  }

  return (
    <FeaturesContainer
      component='section'
      container
      item
      md={7}
      xs={12}
      alignContent='flex-start'
    >
      <LogoWrapper container item xs={12} justify='center'>
        <img src={mainLogo} alt='x-pense logo' className={classes.logo} />
      </LogoWrapper>
      <Grid container item xs={12} justify='center' alignContent='flex-start'>
        <Grid container item xs={12}>
          <Grid
            container
            item
            xs={1}
            alignContent='center'
            justify='flex-start'
          >
            <ArrowBackIos onClick={() => handleClick('left')} />
          </Grid>
          <Grid container item xs={10}>
            <FeatureImagePaper elevation={1}>
              {
                <img
                  src={screenshots[index].src}
                  alt={screenshots[index].alt}
                />
              }
            </FeatureImagePaper>
          </Grid>
          <Grid container item xs={1} alignContent='center' justify='flex-end'>
            <ArrowForwardIos onClick={() => handleClick('right')} />
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <CaptionTypography variant='body1' align='center'>
            Icons made by{' '}
            <a href='https://www.freepik.com' title='Freepik'>
              Freepik
            </a>{' '}
            from{' '}
            <a href='https://www.flaticon.com/' title='Flaticon'>
              www.flaticon.com
            </a>
          </CaptionTypography>
        </Grid>
        <Grid container item xs={12} className={classes.slickDots}>
          {screenshots.map((ss, i) => (
            <span
              className={i === index && classes.activeSlickDot}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </Grid>
      </Grid>
    </FeaturesContainer>
  )
}

export default Features
