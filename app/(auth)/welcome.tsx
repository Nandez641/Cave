import { View, Pressable, } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { ScrollView, Text } from "react-native";
import { PrimaryButton } from "@/components/primaty-button";
import { StyleSheet } from "react-native";
// import { useRouter } from "expo-router";


export default function Welcome() {

    return (
        <ScrollView>
            <View style={{
                padding: 20,
                // alignItems: 'center',i
            }}>
                <Pressable style={{
                    position: 'relative',
                    backgroundColor: 'white',
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    padding: 5,
                    borderRadius: 25,
                    marginTop: -8,
                    left: '90%',

                }}>
                    <Ionicons name='chatbubble-outline' size={27} color='black' />
                </Pressable>


                <Image
                    source={require('@/assets/images/profile.png')}
                    style={styles.profile}
                />

                <Text style={styles.heading}> Welcome to the </Text>
                <Text style={styles.heading2}> Future of finance </Text>

                <Text style={{ textAlign: 'center', marginTop: 10, color: 'white' }}> To get started create an account, if you already have an account we will log you in  </Text>

                <PrimaryButton title='Continue with Email' icon={<Ionicons name="mail-outline" size={20} color='white' />} onPress={() => { }}/>

                <PrimaryButton title='Continue with Google' icon={<AntDesign name="google" size={20} color='white' />} onPress={() => { }} />

                <PrimaryButton title='Continue with Apple' icon={<AntDesign name="apple" size={20} color='white' />} onPress={() => { }} />

                <Text style={styles.end}>{<Ionicons name="shield-checkmark" size={20} color='green' />} Deposits insured by NDIC</Text>
                <Text style={styles.end}>Reviewed by</Text>
                <Text style={styles.end}>Google Play store & App store</Text>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    profile: {
        position: 'relative',
        width: 110,
        height: 110,
        borderRadius: 55,
        marginTop: 10,
        left: '32%',

    },
    heading: {
        marginTop: 13,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    heading2: {
        // marginTop: 13,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    end: {
        textAlign: 'center',
        marginTop: 10,
        color: 'white',
    },
    // end1: {
    //   backgroundColor: '#007AFF',
    //   width: 50,
    //   marginLeft: '75%',

    //   alignItems: 'center',
});