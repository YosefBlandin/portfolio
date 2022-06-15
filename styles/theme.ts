import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        color: '#fff',
        height: { base: '45px' },
        maxWidth: { base: '270px', md: '300px' },
        width: '100%',
        marginTop: '20px',
        _hover: { boxShadow: '0 0 0 0', }
      },
      variants: {
        primary: {
          backgroundColor: '#0070f3',
          _hover: { boxShadow: '0 0 0 0', _disabled: {
						background: '#0070f3'
					} },
          boxShadow: '0 4px 14px 0 rgb(0 118 255 / 39%)'
        },
        secondary: {
          backgroundColor: '#000',
					_hover: {
						_disabled: {
							background: '#000'
						}
					},
          boxShadow: '0 4px 14px 0 rgb(0 0 0 / 39%)'
        }
      }
    }
  }
})
