import { Button } from '../../Atoms/Button/Button'
import { Grid } from '@mui/material'
import { SidePanel, sidePanelProps } from '../../Organisms/SidePanel/SidePanel';

import template from 'assets/template.svg'
import typography from 'assets/typography.svg'
import elements from 'assets/elements.svg'
import infographics from 'assets/infographics.svg'
import upload from 'assets/upload-2.svg'
import { Header } from '../../Organisms/Header/Header';
import { useState } from 'react';



export type landingPageprops = {
  children?: JSX.Element;
  onClickSidePanelItem:(flag:boolean)=>void;
}


export const LandingPageTemplate = (props:landingPageprops) => {
 

const sidePanelList=[
   {
       src:template,
       text:'Templates',
       onClick:showTemplates,
   },
   {
      src: elements,
      text:'Themes',
      onClick:()=>{} 
   },
   {
       src: typography,
       text:'Typography',
       onClick:()=>{}

 
    },
    {
       src: elements,
       text:'Elements',
       onClick:()=>{}

 
    },
    {
       src: infographics,
       text:'Infographics',
       onClick:()=>{}

 
    },
    {
       src:upload,
       text:'Upload',
       onClick:()=>{}

 
    },
 ]
   
   var [showTemplateFlag, setShowTemplateFlag] = useState(false)

function showTemplates(flag:boolean) {
console.log('flag in template ',flag)
setShowTemplateFlag(flag)
onClickSidePanelItem(flag)

}
const{children,onClickSidePanelItem}=props

  return (
      <Grid container direction='column' spacing={5}>
    <Grid item style={{
       marginTop:'16px',
       marginLeft:'15.5px'
    }}><Header></Header></Grid>
    <Grid item>
    <Grid container direction='row'>
    <Grid item style={{marginTop:'-3px',marginLeft:'42px'}}><SidePanel sidePanelItems={sidePanelList}></SidePanel></Grid>
    <Grid item>{children}</Grid>
    </Grid>
    </Grid>
    </Grid>
  )
}

