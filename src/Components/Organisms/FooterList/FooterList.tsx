import { Button as MuiButton, Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core'

import { FooterCardItem } from '../../Molecules/FooterCardItem/FooterCardItem'
import { useState } from 'react'
import './FooterList.css'

export type OptionType = {
  src: any
  text: string
}
export type footerProps = {
  footerItems: Array<OptionType>
}

export const FooterList = (props: footerProps) => {

    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {    
       if (!showScroll && window.pageYOffset > 400){
          setShowScroll(true)    
       } else if (showScroll && window.pageYOffset <= 400){
          setShowScroll(false)    
       }  
    };
    window.addEventListener('scroll', checkScrollTop)

  const { footerItems } = props
 

  return (
    <Grid container className='footer-list' direction="row" spacing={1} >
          {footerItems.map((item: OptionType, index: number) => {
              return (
                  <Grid item style={{
                    width:'180px'
                  }} >
                      <FooterCardItem iconUrl={item.src} text={item.text}></FooterCardItem>
                  </Grid>
              )
          })}
      </Grid>
  
  )}
