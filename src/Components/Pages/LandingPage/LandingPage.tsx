import { Grid } from '@mui/material'
import { LandingPageTemplate } from '../../Templates/LandingPageTemplate/LandingPageTemplate'
import  { useState } from 'react'
import { TemplateList } from '../../Organisms/TemplateList/TemplateList'
import template1 from 'assets/Template1.svg'
import template2 from 'assets/Template2.svg'
import template3 from 'assets/Template3.svg'
import template4 from 'assets/Template4.svg'
import { PrimaryButtons } from '../../Molecules/PrimaryButtons/PrimaryButtons'
import AlphaCard from '../../Organisms/AlphaCard/AlphaCard'
import Bin from 'assets/Bin.svg'
import Icon from '../../Atoms/Icon/Icon'
import footer1 from 'assets/Footer1.svg'
import footer2 from 'assets/Footer2.svg'
import footer3 from 'assets/Footer3.svg'
import footer4 from 'assets/Footer4.svg'
import footer5 from 'assets/Footer5.svg'

import {
  userName,
  designation,
  heading,
  description,
} from '../../../Constants/constants'
import { FooterList } from '../../Organisms/FooterList/FooterList'

export type landingPageprops = {}

export const LandingPage = (props: landingPageprops) => {
  const [showTemplates, setShowTemplates] = useState(false)

  function handleShowTemplate(flag: boolean) {
    console.log('flag in landing page: ', flag)
    setShowTemplates(flag)
  }
  

  const {} = props
  const templates = [template1, template2, template3, template4]

  const footerList = [
    { src: footer1, text: '1.Cover' },
    { src: footer2, text: '2.Personal Details' },
    { src: footer3, text: '3.Education Details' },
    { src: footer4, text: '4.Experience' },
    { src: footer5, text: '5.Certification' },
  ]

  return (
    <LandingPageTemplate
      onClickSidePanelItem={handleShowTemplate}
      children={
        <Grid container direction="row" spacing={2}>
          <Grid item>
            {showTemplates ? (
              <TemplateList imageListSrc={templates}></TemplateList>
            ) : (
              <></>
            )}
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                style={{
                  marginLeft: '500px',
                }}
              >
                <PrimaryButtons></PrimaryButtons>
              </Grid>
              <Grid
                item
                style={{
                  marginLeft: '50px',
                }}
              >
                <AlphaCard
                  designation={designation}
                  heading={heading}
                  userName={userName}
                  description={description}
                ></AlphaCard>
              </Grid>
              <Grid
                item
                style={{
                  marginLeft: '350px',
                }}
              >
                {' '}
                <Icon imageSrc={Bin}></Icon>{' '}
              </Grid>
              <Grid
                item
                style={{
                  marginTop: '30px',
                }}
              >
                <FooterList footerItems={footerList}></FooterList>{' '}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      }
    ></LandingPageTemplate>
  )
}
