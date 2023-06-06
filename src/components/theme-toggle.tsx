import React from 'react'
import { Text, HStack, Switch, useColorMode } from 'native-base'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      {/* Switch component to toggle between light and dark mode */}
      <Switch
        isChecked={colorMode === 'light'} // Check if the current mode is light
        onToggle={toggleColorMode} // Function to toggle the color mode
      ></Switch>
      <Text>Light</Text>
    </HStack>
  );
}
