import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { themes } from '../theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
interface HeaderProps extends TouchableOpacityProps{
  themeName: 'dark' | 'light'; 
}

export function Header({themeName, ...rest} : HeaderProps) {
  const theme = themes[themeName]; 
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: `${theme.header.background}`,
    justifyContent: 'space-between',
    
    alignItems: 'center',
    flexDirection: 'row',
  },
  header: {
    paddingBottom: 44,
    backgroundColor:  `${theme.header.background}`,
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
    <SafeAreaView style={styles.container}>
    <View></View>
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
    </SafeAreaView>
  )
}
