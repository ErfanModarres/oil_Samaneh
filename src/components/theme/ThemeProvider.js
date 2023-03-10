import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import Theme from '../../theme/theme'

export default function ThemeProviderApp({ children }) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}
