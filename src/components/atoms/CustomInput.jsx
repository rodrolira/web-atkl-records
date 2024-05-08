import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
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

// eslint-disable-next-line react/display-name
const CustomInput = React.forwardRef(
  (
    { isIconActive, label, placeholder, type, id, name, value, ...props },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    // eslint-disable-next-line no-unused-vars
    const [password, setPassword] = useState('')

    const togglePasswordVisibility = () => {
      setShowPassword(prev => !prev)
    }

    return (
      <Box
        display='flex'
        flexDirection='column'
        alignContent='center'
        justifyContent='flex-center'
        mb={2}
      >
        <Box display='flex' flexDirection='column' justifyContent='flex-center'>
          <Typography color='white' pb={1} textalign={'center'}>
            {label}
          </Typography>
          <Paper
            sx={{
              background: colors.input[500],
              width: '100%'
            }}
          >
            <InputBase
              {...props}
              ref={ref}
              id={id}
              name={name}
              placeholder={placeholder}
              fullWidth
              type={
                type === 'password'
                  ? showPassword
                    ? 'text'
                    : 'password'
                  : type
              }
              value={value}
              onChange={e => setPassword(e.target.value)}
              sx={{
                bgcolor: colors.input[500],
                p: 1,
                borderRadius: '5px'
              }}
              endAdornment={
                isIconActive && (
                  <InputAdornment position='end' sx={{ pr: 1 }}>
                    <IconButton edge='end' onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
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
)

CustomInput.propTypes = {
  id: PropTypes.string.isRequired,
  isIconActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']).isRequired,
  value: PropTypes.string
}

CustomInput.defaultProps = {
  type: 'text',
  id: '',
  name: ''
}

export default CustomInput
