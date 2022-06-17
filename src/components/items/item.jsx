import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Search = ({children})=>{
    return(<>
    <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
          <TextField id="standard-basic" label="Search Star Wars" variant="standard" size="small"
          sx={{
              backgroundColor: "#EFD3D7",
          }} />
      </Box>
      </>

    );
}