// import { Image } from 'expo-image';
import { StyleSheet, TextInput } from 'react-native';
import { View, Text, Pressable, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from 'expo-router';

export default function HomeScreen() {

  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()

  return (
    <ScrollView>
      <View style={{
        position: 'relative',
        padding: 10,
      }}>

        <Feather style={styles.bar} name='bar-chart-2' /><Text style={styles.header}>XEND</Text> 
        <Text style={styles.header2}> Finance</Text>

        <Pressable style={{
          position: 'absolute',
          backgroundColor: 'white',
          height: 40,
          width: 40,
          alignItems: 'center',
          padding: 5,
          borderRadius: 25,
          // marginLeft: 295,
          left: '85%',

        }}>
          <Ionicons name='chatbubble-outline' size={27} color='black' />
        </Pressable>
      </View>

      <View style={styles.profileview}>
        <View style={styles.userpic}> <Ionicons name='person' size={53} color='grey' /></View>
        <Text style={styles.userName}>Welcome, Nelson</Text>
      </View>

      <Text style={styles.p1}>Enter your password</Text>
      <Text style={styles.p2}>Your Password</Text>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        width: '95%',
        height: 55,
        marginLeft: 10,
        borderColor: '#ccc',
        borderRadius: 2,
        padding: 10
      }}>

        <Ionicons name='lock-closed-outline' size={20} color='white' />
        <TextInput
          placeholder='Password'
          secureTextEntry={!showPassword}
          style={{ flex: 1, marginLeft: 8, color: 'white', outline: 'none' }}
          underlineColorAndroid='transparent'
        />
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color='white' />
        </Pressable>


      </View>
      <Text style={styles.forgot}>Forgot Password?</Text>

      <View style={{
        width: 73,
        height: 73,
        borderRadius: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        left: '40%',
        marginTop: 10,

      }}>
        <Ionicons name="scan-outline" size={35} color="orange" />
      </View>


      <Pressable style={styles.continue} onPress={() => { router.replace('/(tabs)') }}>

        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Login</Text>
      </Pressable>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25, }}>

        <Text style={{ color: 'white', fontSize: 15, }}>Not you?</Text> <Text style={{ color: 'orange', textAlign: 'right', fontSize: 15, }}>Switch account</Text>

      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, }}>
        <Text style={{ color: 'white', }} >{<Ionicons name="shield-checkmark" size={20} color='green' />} Deposits insured by |</Text>

        <View style={styles.tidal}><Text style={{ color: 'white', fontWeight: 'bold' }}>---tidal</Text></View>
      </View>

      <View style={{ alignItems: 'center', marginTop: 20, }}>
        <Text style ={{color: 'grey'}}>Backed by </Text>
        <Text style ={{color: 'grey', marginTop: 6,}}>Google FOR STARTUPS   <MaterialCommunityIcons name='rhombus' size={13} color='grey' />BINANCE</Text>
      </View>

    </ScrollView >
  )



}


const styles = StyleSheet.create({

  header: {
    position: 'relative',
    color: 'white',
    marginLeft: '10%',
    marginTop: '-8%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  header2: {
    position: 'relative',
    color: 'white',
    // marginLeft: '25%',
    marginLeft: 90,
    marginTop: -28,
    fontSize: 20,
  },

  bar: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',

  },

  profileview: {
    flexDirection: 'row',
    padding: 15,
  },

  userpic: {
    backgroundColor: 'black',
    borderWidth: 3,
    borderColor: '#007AFF',
    borderRadius: 38,
    height: 75,
    width: 75,
    alignItems: 'center',
  },

  userName: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 12,
    marginVertical: 22,
  },

  p1: {
    color: 'white',
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },

  p2: {
    color: 'grey',
    padding: 10,
    fontSize: 15,
    marginTop: -9,
  },

  forgot: {
    color: 'white',
    padding: 10,
    fontSize: 16,
    marginLeft: '59%',
  },

  continue: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#007AFF',
    borderWidth: 2,
    padding: 12,
    borderRadius: 25,
    height: 55,
    width: '94%',
    marginLeft: 13,
    marginTop: 20,
  },

  tidal: {
    backgroundColor: '#1e4e82',
    width: '14%',
    marginLeft: 5,
    marginTop: 5,
  },


});