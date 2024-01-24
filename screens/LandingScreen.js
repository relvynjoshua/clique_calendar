import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <TouchableOpacity onPress={() => {navigation.navigate('Scheduler')}}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Calendar</Text>
            </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        margin: 10,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: '#007aff',
        borderColor: '#007aff',
      },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#fff',
      },
});