import * as React from 'react'
import { Text, Box, Center, VStack, useColorModeValue } from "native-base"
import ThemeToggle from "../components/theme-toggle"

export default function MainScreen() {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }} // Dark mode background color
      _light={{ bg: 'blueGray.50' }} // Light mode background color
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box p="10" bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text color={useColorModeValue('white', 'black')}>Hello</Text> {/* Text color depending on the color mode */}
        </Box>
        <ThemeToggle /> {/* Theme toggle component */}
      </VStack>
    </Center>
  )
}
