import React, { useState, useEffect } from 'react'
import { Box, Typography, TextField, InputBase, Grid } from '@mui/material'
import Avatar from '../../Atoms/Avatar/Avatar'
import UploadImageOptions from '../../Molecules/UploadImageOptions/UploadImageOptions'

import User from 'assets/Avatar1.svg'
import UploadImage from 'assets/upload.png'
import LockIcon from 'assets/lock-icon.svg'
import ThreeDots from 'assets/more.png'
import BoxIcon from 'assets/Boxplus-icon.svg'

import UploadDialogueBox from '../../Molecules/UploadDialogueBox/UploadDialogueBox'
import TypographyComponent from '../../Atoms/Typography/TypographyComponent'
import { makeStyles } from '@material-ui/core'

const imageGrid = {
  paddingTop: '27px',
  paddingLeft: '28px',
  paddingRight: '28px',
  backgroundColor: '#FF6161',
  alignItems: 'center',
  justifyContent: 'center',
}

const box = {
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
  width: '676px',
  height: '379px',
  marginTop: '10px',
}

const avatarBox = {
  boxSizing: 'border-box',
  borderRadius: '0%',
  height: '157px',
  width: '159px',
  paddingTop: '8px',
  paddingLeft: '10px',
  marginTop:'48px'
}
const avatarBox1 = {
  boxSizing: 'border-box',
  borderRadius: '0%',
  height: '157px',
  width: '159px',
  paddingTop: '8px',
  paddingLeft: '10px',
  marginTop:'6px'
}

const nameBox = {
  flexDirection: 'column',
  paddingTop: '37px',
  paddingLeft: '25px',
  paddingRight: '40px',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
}
const dashedBorder = {
  border: `2px dashed #7E64F3`,
}

const portfolioText = {
  fontWeight: 700,
  fontSize: '50px',
  alignItems: 'center',
  display: 'flex',
  lineHeight: '56px',
  color: 'text.primary',
  width: '310px',
  height: '125px',
}
const inputTextBox = {
  paddingRight: '80px',
  paddingTop: '38px',
  marginLeft: '73px',
  alignItems: 'center',
  justifyContent: 'space-between',
}
const secondText = {
  fontWeight: 400,
  fontSize: '12px',
  paddingLeft: '2px',
  marginTop: '10px',
  lineHeight: '18px',
  color: 'text.secondary',
  width: '283px',
  height: '60px',
  alignItems: 'center',
  display: 'flex',
}

const imageUpload = () => {
  document.getElementById('imageUploadButton')?.click()
}
const imageOptions = [
  {
    src: UploadImage,
    action: imageUpload,
  },
  {
    src: LockIcon,
  },
  {
    src: ThreeDots,
  },
  {
    src: BoxIcon,
  },
]
const sxStyles = {
  avatarStyle: {
    width: '136px',
    height: '136px',
  },
}
export type alphaCardProps = {
  designation: string
  heading: string
  userName: string
  description: string
}
const AlphaCard: React.FC<alphaCardProps> = (props) => {
 

  const [progress, setProgress] = useState(0)
  const [textEdit, setTextEdit] = useState(false)
  const [showUploadOption, setShowUploadOption] = useState(false)
  const [fileName, setFileName] = useState('')
  const [userAvatar, setUserAvatar] = useState<any>(User)
  const [heading, setHeading] = useState(props.heading)
  const [showUploadDialogueBox, setShowDialogueBox] = useState(false)

  const showOptions = (e: any) => {
    console.log('flag before: ',showUploadOption)
    if (showUploadOption) {
      setShowUploadOption(false)
    } else {
      setShowUploadOption(true)
    }
    console.log('flag after: ',showUploadOption)

  }

  const handleOnclickTextBox = () => {
    if (textEdit) {
      setTextEdit(false)
    } else {
      setTextEdit(true)
    }
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setShowDialogueBox(false)
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 400)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const handleOnChangeImage = (event: any) => {
    const formData = new FormData()

    formData.append('File', event.target.files[0])
    setFileName(event.target.files[0].name)
    setShowDialogueBox(true)
    setUserAvatar(URL.createObjectURL(event.target.files[0]))
  }

  const cancelUpload = () => {
    setUserAvatar(User)
    setFileName('User.png')
    setShowDialogueBox(false)
  }
  return (
    <>
      <Grid container sx={box}>
        <Grid item xs={4} sx={imageGrid}>
          <Box sx={{ marginTop:'-50px' }}>
            {showUploadOption ? (
              <UploadImageOptions
                options={imageOptions}
              />
            ) : (
              <></>
            )}
          </Box>
          {showUploadOption ? (
            <Box sx={[avatarBox1, dashedBorder]}>
              <Avatar
                variant="circular"
                src={userAvatar}
                onClick={(e) => showOptions(e)}
                sx={sxStyles.avatarStyle}
              />
            </Box>
          ) : (
            <Box sx={[avatarBox]}>
              <Avatar
                variant="circular"
                src={userAvatar}
                onClick={(e) => showOptions(e)}
                sx={sxStyles.avatarStyle}
              />
            </Box>
          )}

          <Box>
            <input
              accept="image/*"
              type="file"
              id="imageUploadButton"
              style={{ display: 'none' }}
              onChange={handleOnChangeImage}
            />
          </Box>

          <Box sx={nameBox}>
            <TypographyComponent
              text={props.userName}
              variant="caption"
              color="#FFFFFF"
            ></TypographyComponent>
            <TypographyComponent
              variant="caption"
              text={props.designation}
              color="#FFFFFF"
            ></TypographyComponent>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={inputTextBox}>
            {textEdit ? (
              <InputBase
                multiline
                sx={[portfolioText, dashedBorder]}
                onClick={handleOnclickTextBox}
                value={heading}
                onChange={(e: any) => {
                  setHeading(e.target.value)
                }}
              />
            ) : (
              <InputBase
                multiline
                sx={portfolioText}
                onClick={handleOnclickTextBox}
                value={heading}
                onChange={(e: any) => {
                  setHeading(e.target.value)
                }}
              />
            )}
            <InputBase
              multiline
              data-testid="input2"
              sx={secondText}
              value={props.description}
            />
          </Box>
          {showUploadDialogueBox ? (
            <UploadDialogueBox
              imageName={fileName}
              progress={progress}
              onClose={cancelUpload}
            />
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default AlphaCard
