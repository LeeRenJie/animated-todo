import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from "native-base"
import theme from '../theme'

type Props = {
  children: React.ReactNode
} // Defining the 'Props' type that expects a 'children' prop of type 'React.ReactNode'


export default function AppContainer(props: Props){ // Defining a default function component 'AppContainer' that accepts 'props' of type 'Props'
  return ( // Returning the following JSX code
    // Using the 'NavigationContainer' component as a container for navigation functionality
    <NavigationContainer>
      {/* Using the 'NativeBaseProvider' component as a container for rendering the app's UI, with the 'theme' object passed as a prop, and rendering the children passed to the 'AppContainer' component */}
      <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
    </NavigationContainer>
  )
}