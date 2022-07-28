import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
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
          backgroundColor: '#000',
          boxShadow: '0 2px 10px 0 rgb(100, 100, 100)',
          _hover: { boxShadow: '0 0 0 0', _disabled: {
						background: '#000'
					} },
        },
        secondary: {
          backgroundColor: '#000',
					_hover: {
						_disabled: {
							background: '#000'
						}
					},
        }
      }
    }
  }
})
