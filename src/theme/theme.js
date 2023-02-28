import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'
import palette from './palette'

const theme = createTheme({
  palette: palette,
  direction: 'rtl',
  spacing: 2,
  typography: {
    allVariants: {
      fontFamily: 'IRANSans',
    },
    body2:{
      fontSize:14
    }
  },
})

export default responsiveFontSizes(theme)
