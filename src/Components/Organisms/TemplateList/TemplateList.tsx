import { Button as MuiButton, Grid } from '@mui/material'
import {viewMore,results} from '../../../Constants/constants'
import { SearchBar } from '../../Atoms/SearchBar/SearchBar'
import Icon from '../../Atoms/Icon/Icon'
import TypographyComponent from '../../Atoms/Typography/TypographyComponent'


export type templateListProps = {
    imageListSrc:string[],
    classname?:string;
}

export const TemplateList = (props: templateListProps) => {
    const{imageListSrc,classname}=props
 
  return (
    <Grid
      container
      direction="column"
      spacing={1}
      style={{
        width: '296px',
        height: '750px',
        backgroundColor:'#F3F2F7',
        marginLeft:'2px',
        marginTop:'-40px'
            }}
      className={classname}
    >
      <Grid item style={{
          marginLeft:'12px',
          marginTop:'12px'
      }}>
        <SearchBar></SearchBar>
        </Grid>
      <Grid item>
        <Grid container direction='row' spacing={3}>
            <Grid item style={{textAlign:'center', marginLeft:'12px',paddingRight:'13px'}}>
             <TypographyComponent color='#4C2CD9' variant='caption' text={results}></TypographyComponent>
              </Grid>
            <Grid item>
              <TypographyComponent color='#4C2CD9' variant='caption' text={viewMore}/>
              </Grid>
        </Grid>
      </Grid>
      <Grid item>
      {imageListSrc.map((item: string, index: number) => { 
return(
    <Grid item style={{
        marginLeft:'8px'
    }}>

<Icon imageSrc={item}></Icon>
</Grid>
)})}
      </Grid>


    </Grid>
  )
}
