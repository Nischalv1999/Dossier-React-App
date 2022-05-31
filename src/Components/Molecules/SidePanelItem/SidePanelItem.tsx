import { Button as MuiButton, Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import Link from '@mui/material/Link'

import Icon from '../../Atoms/Icon/Icon'
import TypographyComponent from '../../Atoms/Typography/TypographyComponent'
import { useState } from 'react'
import React from 'react'

export type sidePanelProps = {
  iconUrl: string
  text: string
  classname?: string
  onClick:(flag:boolean)=>void;
  index?:number;
}

export const SidePanelItem = (props: sidePanelProps) => {
  const { iconUrl, text, classname,onClick,index } = props


  var [flag, setFlag] = useState(false)
  


  function handleOnClick() {
    console.log("index:",index)
    console.log('flagBefore: ',flag)
  if(flag){
    console.log("aa")
setFlag(false)
}
  else{
    setFlag(true)
  }

}

React.useEffect(() => {
  console.log('flag in useEffect',flag)
  handleFlag(flag)

  }, [flag])

function handleFlag(flag:boolean){
  console.log('flag in side Panel item',flag)
  onClick(flag)
}

  return (
    <Grid
      container
      direction="column"
      spacing={1}
      style={{
        textAlign: 'center',
        height: '65px',
        paddingTop: '14px',
        width: '100px',
        marginLeft: '-27px',
        backgroundColor: flag ? '#EEEBFF' : '#FFFFFF',
        backgroundSize: '100px 10px',
      }}
    >
      <Link underline="none" onClick={() => handleOnClick()}>
        <Grid item style={{
      paddingLeft: 'auto',
        }}>
          <Icon imageSrc={iconUrl} ></Icon>
        </Grid>
        <Grid item style={{ textAlign: 'center',  fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px', }}>
          <TypographyComponent
            variant="body1"
            text={text}
            color="#5A5766"
          ></TypographyComponent>
        </Grid>
      </Link>
    </Grid>
  )
}
