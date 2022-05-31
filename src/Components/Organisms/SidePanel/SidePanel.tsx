import { Button as MuiButton, Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { SidePanelItem } from '../../Molecules/SidePanelItem/SidePanelItem'
import './SidePanel.css'

export type OptionType = {
  src: any;
  text:string;
  onClick:(flag:boolean)=>void;
};
export type sidePanelProps = {
  sidePanelItems: Array<OptionType>;
};

export const SidePanel = (props: sidePanelProps) => {

  const{sidePanelItems}=props

  
  return (
    <Grid 
      container className='side-panel'
      direction="column"
      spacing={5}
      style={{
        width:'100px',
        height:'704px',
      }}
    >
      
      {sidePanelItems.map((item: OptionType, index: number) => { 
return(
    <Grid  item style={{marginLeft:'-13px'}}>

<SidePanelItem iconUrl={item.src}  index={index} onClick={item.onClick}  text={item.text}></SidePanelItem>

</Grid>
)})}
    </Grid>
  )
}
