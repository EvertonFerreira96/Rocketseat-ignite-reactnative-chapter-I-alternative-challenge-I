import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { themes } from '../theme';

interface HeaderProps extends TouchableOpacityProps{
  themeName: 'dark' | 'light'; 
}

export function Header({themeName, ...rest} : HeaderProps) {
  const theme = themes[themeName]; 

  const styles = StyleSheet.create({
    header: {
      paddingTop: StatusBar.currentHeight,
      paddingBottom: 44,
      backgroundColor: `${theme.header.background}`,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    headerText: {
      fontSize: 24,
      color: `${theme.header.color}`,
      fontFamily: 'Poppins-Regular',
    }
  });
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
      <View>
        <TouchableOpacity {...rest} style={{
    paddingBottom: 44}}>
          <Text style={{paddingRight:16}}>🖍</Text>
        </TouchableOpacity>
      </View>
      </>
  )
}

