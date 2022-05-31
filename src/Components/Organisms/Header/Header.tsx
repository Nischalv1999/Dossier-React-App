import { Button as MuiButton, Grid } from '@mui/material'
import { makeStyles, withStyles } from '@material-ui/core'
import User from 'assets/user.svg'
import Help from 'assets/help.svg'
import Notification from 'assets/notification.svg'
import * as React from 'react';

import Icon from '../../Atoms/Icon/Icon'
import TypographyComponent from '../../Atoms/Typography/TypographyComponent'
import Dossier from 'assets/dossier-header.svg'
import Avatar from '../../Atoms/Avatar/Avatar'

export type headerProps = {}

// const useStyles = makeStyles({
//   dossierIcon: {
//     paddingLeft: 'auto',
//     paddingUp: 'auto',
//     width: '18px',
//     height: '18px',
//     paddingTop:'7px'
//   },
//   icon: {
//     paddingLeft: '8px',
//     paddingTop:'7px'

//   },
//   avatar:{
//   height:'36px',
//   width:'36px',
//   paddingBottom:'3px',
//   paddingLeft: '7px',

//   },
//   text: {
//     fontSize: '18px',
//     lineHeight: '20px',
//     width: '76px',
//     height: '20px',
//     fontFamily: 'Poppins',
//     fontWeight: 500,
//     paddingTop:'7px'
//   },
// })

const styles: { [key: string]: React.CSSProperties } = {
  dossierIcon: {
    paddingLeft: 'auto',
    width: '18px',
    height: '18px',
    paddingTop:'15px'
  },
  icon: {
    paddingLeft: '8px',
    paddingTop:'15px'

  },
  avatar:{
  height:'36px',
  width:'36px',
  paddingBottom:'5px',
  paddingLeft: '7px',

  },
  text: {
    fontSize: '18px',
    lineHeight: '20px',
    width: '76px',
    height: '20px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    paddingTop:'15px',
    paddingLeft:'15px'
  },
};



export const Header:React.FC = (props: headerProps) => {

return (
    <Grid
      container
      direction="row"
      spacing={1}
      style={{
        border: '2px solid #D4D2D9',
        width:'1336px',
        height:'55px',        
marginTop:'-16px',
marginLeft:'-16px'

      }}
    >
      <Grid item style={styles.dossierIcon}>
        <Icon imageSrc={Dossier} 
        // classname={styles.dossierIcon}
        ></Icon>
      </Grid>
      <Grid item md={10} sm={4} style={styles.text}>
        <TypographyComponent
          variant="body1"
          text="DOSSIER"
          color="#4C2CD9"
          // classname={styles.text}
        ></TypographyComponent>
      </Grid>
      <Grid item style={{
         paddingLeft: '8px',
         paddingTop:'15px'
      }}>
        <Icon imageSrc={Help}></Icon>
      </Grid>
      <Grid item style={styles.icon}>
        <Icon imageSrc={Notification} ></Icon>
      </Grid>
      <Grid item >
        <Avatar variant={'circular'} src={User}></Avatar>
      </Grid>
    </Grid>


  )
}
