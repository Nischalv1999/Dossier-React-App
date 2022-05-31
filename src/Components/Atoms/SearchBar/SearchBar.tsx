import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import Icon from '../Icon/Icon';
import searchIcon from 'assets/searchIcon.svg'
import { makeStyles } from '@material-ui/core';
import { Input } from '@mui/material';


export type searchBarProps = {onChange?:React.ChangeEventHandler<
  HTMLTextAreaElement | HTMLInputElement
>;
defaultValue?: string;
placeholder?: string;
}

export const SearchBar = (props: searchBarProps) => {
  let {onChange,defaultValue,placeholder} = props

 defaultValue="Finance"
 placeholder="Enter Text"

const styles: { [key: string]: React.CSSProperties } = {
  searchicon: {
    paddingTop:'2px',
    paddingLeft:'10px'
   },
}

  return (
    <div style={{
height:'60px'
    }}>
      <Input placeholder={placeholder} onChange={onChange} defaultValue={defaultValue} disableUnderline
      startAdornment={(<InputAdornment position="start" style={styles.searchicon}>
      <Icon imageSrc={searchIcon} ></Icon>
                  </InputAdornment>)} 
      inputProps={{
        disableUnderline: true, 
        startAdornment: (
          <InputAdornment position="start" style={styles.searchicon}>
<Icon imageSrc={searchIcon} ></Icon>
            </InputAdornment>
        ),
      }}
      style={{
        width:'256px',
          backgroundColor:"#FFFFFF",
          borderRadius:'10px',
          height:'36px'
      }}
      />
    </div>
  )
}
