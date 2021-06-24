import { makeStyles, withStyles } from '@material-ui/core'
import MuiGrid from '@material-ui/core/Grid'
// import MuiTypography from '@material-ui/core/Typography'

export const useStyles = makeStyles(() => ({
  mobilePadding: {
    padding: '0 32px',

    '@media (min-width: 960px)': {
      padding: '0 80px'
    }
  }
}))

// export const ExpensesContainer = withStyles({
//     root: {
//         backgroundColor: '#F7F7F7',
//         minHeight: 'calc(100vh - 68px)',

//         '@media (min-width: 960px)': {
//             minHeight: '100vh',
//         }
//     }
// })(MuiGrid);

// export const PageHeader = withStyles({
//     root: {
//         backgroundColor: '#364F6B',
//         padding: '16px 32px',

//         '@media (min-width: 960px)': {
//             backgroundColor: 'transparent',
//             padding: '50px 80px 0'
//         }
//     }
// })(MuiGrid);

// export const PageTitle = withStyles({
//     root: {
//         fontSize: '42px',
//         fontWeight: '700',
//         color: '#F0F0F0',

//         '@media (min-width: 960px)': {
//             fontSize: '48px',
//             color: '#364F6B',
//         }
//     }
// })(MuiTypography);

// export const WelcomeMessage = withStyles({
//     root: {
//         fontSize: '14px',
//         fontWeight: '700',
//         textAlign: 'right',
//         color: '#F0F0F0',

//         '@media (min-width: 960px)': {
//             textAlign: 'left',
//             color: '#8A9BAE',
//         }
//     }
// })(MuiTypography);

export const TableTopContent = withStyles({
  root: {
    margin: '32px 32px 16px',
    width: '100%',
    maxWidth: '900px',

    '@media (min-width: 960px)': {
      margin: '0 80px 16px'
    }
  }
})(MuiGrid)

export const TotalsContainer = withStyles({
  root: {
    width: '100%',
    backgroundColor: 'rgba(54, 79, 107, 0.15)',
    padding: '32px',
    marginTop: '32px',
    overflowX: 'scroll',

    '@media (min-width: 960px)': {
      padding: '32px 80px'
    }
  }
})(MuiGrid)

export const CardsWrapper = withStyles({
  root: {
    gap: '20px',
    flexWrap: 'nowrap'
  }
})(MuiGrid)

// export const SectionHeading = withStyles({
//     root: {
//         fontSize: '24px',
//         fontWeight: '700',
//         color: 'rgba(54, 79, 107, 0.72)',
//         paddingBottom: '20px'
//     }
// })(MuiTypography);
