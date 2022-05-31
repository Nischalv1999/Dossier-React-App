import { Button as MuiButton, Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core'

import Icon from '../../Atoms/Icon/Icon'
import TypographyComponent from '../../Atoms/Typography/TypographyComponent'

export type footerProps = {
  iconUrl: string
  text: string
}

export const FooterCardItem = (props: footerProps) => {
  const { iconUrl, text } = props


  return (
    <Grid
      container
      direction="column"
      spacing={1}
      style={{
        textAlign: 'center',
        width: '100px',
      }}
    >
      <Grid item style={{
      paddingLeft: 'auto',

      }}>
        <Icon imageSrc={iconUrl} ></Icon>
      </Grid>
      <Grid item style={{  textAlign: 'center', fontWeight:400,
        fontSize:'12px',
        lineHeight:'18px' }}>
        <TypographyComponent
          variant="body1"
          text={text}
          color="#5A5766"
        ></TypographyComponent>
      </Grid>
    </Grid>
  )
}
