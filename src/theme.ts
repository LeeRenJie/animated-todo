import { extendTheme } from 'native-base'

// Configuration options for the theme
const config = {
  useSystemColorMode: false, // Disables automatic color mode based on the system preference
  initialColorMode: 'light' // Sets the initial color mode to 'light'
}

// Color palette for the theme
const colors = {
  primary: {
    50: '#EEF2F6',
    100: '#CFD9E7',
    200: '#B1C1D8',
    300: '#92A9C9',
    400: '#7491B9',
    500: '#5578AA',
    600: '#446088',
    700: '#334866',
    800: '#223044',
    900: '#111822'
  }
}

// Create and export the extended theme using the configuration and colors
export default extendTheme({ config, colors })
