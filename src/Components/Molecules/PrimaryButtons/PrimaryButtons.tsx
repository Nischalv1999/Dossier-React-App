import { Button } from '../../Atoms/Button/Button'
import { Grid } from '@mui/material'



export const PrimaryButtons = () => {
 

  return (
      <Grid container direction='row' spacing={1}>
    <Grid item><Button name={'Preview'} variant="text" color='secondary' width='50px'></Button></Grid>
    <Grid item><Button name={'Save As Draft'} variant="outlined" color='secondary' width='130px'></Button></Grid>
    <Grid item><Button name={'Publish'} variant="contained" color='secondary' width='130px'></Button></Grid>
    </Grid>
  )
}
