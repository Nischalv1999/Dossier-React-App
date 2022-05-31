import React from 'react'
import { Box, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import LinearProgress from '@mui/material/LinearProgress'
import UploadIcon from 'assets/uploadIcon.svg'
import SnackbarContent from '@mui/material/SnackbarContent'
import Icon from '../../Atoms/Icon/Icon'
import { makeStyles } from '@material-ui/core'
import TypographyComponent from '../../Atoms/Typography/TypographyComponent'
import {ThemeProvider} from '@mui/material/styles'
import { createTheme } from "@mui/material";

const theme = createTheme({
  spacing: 4,

  palette: {
    primary: {
      main: "#9986F0;", 
      light: "#4ABAAD;", 
    }
  }})
export type ImageUploadProgressProp = {
  progress: number
  imageName: string
  onClose?: any
}
const imageNameStyle={
  fontWeight: 400,
      fontSize: '14px',
      lineHeight: '22px',
      color: '#FFFFFF',
      fontFamily: 'Roboto',
}

const UploadDialogueBox: React.FC<ImageUploadProgressProp> = (props) => {
  
  return (
    <>
      <SnackbarContent
        style={{
          width: '412px',
          height: '64px',
        }}
        action={
          <Box>
            <CloseIcon data-testid={'close'}
              onClick={props.onClose}
              sx={{ paddingBottom: '5px', paddingRight: '5px' }}
            />
          </Box>
        }
        message={
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon imageSrc={UploadIcon}  />
            <Box sx={{ paddingBottom: '4px', paddingLeft: '17px' }}>
              <Box
                sx={{
                  justifyContent: 'space-between',
                  display: 'flex',
                }}
              ><Box style={imageNameStyle}>
                <TypographyComponent
                  text={props.imageName}
                ></TypographyComponent>
                </Box>
                <Box style={imageNameStyle}>
                <TypographyComponent
                  text="Uploading"
                ></TypographyComponent>
                </Box>
              </Box>
<ThemeProvider theme={theme}>
              <LinearProgress
                variant="determinate"
                value={props.progress}
                color='primary'
                sx={{ width: '290px',backgroundColor:'#FFFFFF', height: '6px', borderRadius: '4px' }}
              />
              </ThemeProvider>
            </Box>
          </Box>
        }
      ></SnackbarContent>
    </>
  )
}

export default UploadDialogueBox
