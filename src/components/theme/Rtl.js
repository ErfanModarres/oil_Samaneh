import React from 'react'
import { StylesProvider, jssPreset } from '@material-ui/core/styles'
import { create } from 'jss'
import rtl from 'jss-rtl'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

function RTL({ children }) {
  return <StylesProvider jss={jss}>{children}</StylesProvider>
}
export default RTL
