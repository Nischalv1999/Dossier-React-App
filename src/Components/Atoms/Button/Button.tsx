import React from 'react'
import './Button.css'
import { Button as MuiButton } from '@mui/material'
import theme from '../../../theme/theme'
import {ThemeProvider} from '@mui/material/styles'

export type ButtonProps = {
  name: string
  variant?: 'contained' | 'text' | 'outlined'
  color?: 'primary' | 'secondary'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  startIcon?: JSX.Element
  width?: string
  height?: string
  fontsize?: string
  fontweight?: string
  textColor?: string
}

export const Button = (props: ButtonProps) => {
  const {
    name,
    variant,
    onClick,
    color,
    className,
    startIcon,
    width,
    height,
    fontsize,
    fontweight,
    textColor,
  } = props

  return (
    <ThemeProvider theme={theme}>
    <MuiButton
      variant={variant}
      onClick={onClick}
      style={{
        borderRadius: '4px',
        fontSize: `${fontsize}`,
        color: `${textColor}`,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: `${fontweight}`,
        lineHeight: '22px',
        textTransform: 'none',
        width: `${width}`,
        height: `${height}`,
      }}
      className={className}
      startIcon={startIcon}
      color={color}
      {...props}
    >
      {name}
    </MuiButton>
    </ThemeProvider>
  )
}
