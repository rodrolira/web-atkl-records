import React from 'react'
import { VisibilityOff } from '@mui/icons-material'
import {
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  Typography
} from '@mui/material'
import { colors } from '/src/theme'
import PropTypes from 'prop-types'

const CustomInput = ({ isIconActive, label, placeholder }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignContent='center'
      justifyContent='flex-center'
      mb={2}
    >
      <Box display='flex' flexDirection='column' justifyContent='flex-center'>
        <Typography color='white' pb={1} textAlign={'center'}>
          {label}
        </Typography>
        <Paper
          sx={{
            background: colors.input[500],
            width: '100%'
          }}
        >
          <InputBase
            placeholder={placeholder}
            fullWidth
            sx={{
              bgcolor: colors.input[500],
              p: 1,
              borderRadius: '5px'
            }}
            endAdornment={
              isIconActive && (
                <InputAdornment position='end' sx={{ pr: 1 }}>
                  <IconButton edge='end'>
                    <VisibilityOff />
                  </IconButton>
                </InputAdornment>
              )
            }
          />
        </Paper>
      </Box>
    </Box>
  )
}

CustomInput.propTypes = {
  isIconActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default CustomInput
