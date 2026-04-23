import { View, Text, StyleSheet, Pressable} from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen() {
    return (
        <View style={{
            padding: 10,
            flex: 1,
        }}>
            <View style={styles.heading}>
                <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', }}>Referral</Text>
                <Text style={{ color: 'grey', fontSize: 17, }}>Share your code and earn rewards with every friend who joins.</Text>
            </View>

            <View style={styles.saving}>
                <View style={styles.gift}>
                    <Ionicons name="gift" size={42} color='#2043C0' />
                </View>

                <View style={styles.giftText}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 23, marginTop: 12, }}> Rewards</Text>
                    <Text style={{ color: 'white', fontSize: 16, marginTop: 7, marginLeft: 7 }}>Let's grow together - refer your friends and family with your referral code</Text>
                </View>
            </View>

            <View style={styles.saving1}>
                <View>
                    <Text style={{ color: 'grey', fontSize: 16, marginTop: 12, }}> Your referral code</Text>
                    <Text style={{ color: 'white', fontSize: 26, fontWeight: 'bold', marginTop: 7, marginLeft: 7 }}>XEND-FERNANDEZ</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', gap: 10, }}>
                    <Ionicons name="copy-outline" size={27} color='blue' />
                    <Text style={{ color: 'blue', fontSize: 17, fontWeight: 'bold' }}>Copy code</Text>
                </View>
            </View>

            <View style={styles.below}>
                <View style={styles.saving2}>
                    <Text style={{ color: 'white', fontSize: 26, marginTop: 12, fontWeight: 'bold' }}> 0 </Text>
                    <Text style={{ color: 'grey', fontSize: 16, marginTop: 7, }}>Referrals</Text>
                </View>

                <View style={styles.saving2}>
                    <Text style={{ color: 'white', fontSize: 26, marginTop: 12, fontWeight: 'bold' }}>0</Text>
                    <Text style={{ color: 'grey', fontSize: 16, }}>Points</Text>
                </View>
            </View>

            <Pressable style={styles.continue}>

                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Share invite link</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 10,
        padding: 10,
    },

    saving: {
        padding: 10,
        backgroundColor: '#2043C0',
        height: 140,
        borderRadius: 15,
        marginTop: 10,
        color: 'white',
    },

    gift: {
        // flexDirection: 'row',
        backgroundColor: 'white',
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 25,
    },

    giftText: {
        marginLeft: 76,
        marginTop: -90,
    },

    saving1: {
        padding: 10,
        backgroundColor: '#1f1f1f',
        height: 140,
        borderRadius: 15,
        marginTop: 17,
        color: 'white',
    },

    below: {
        flexDirection: 'row',
        gap: 15,
        marginLeft: 14,
        marginTop: 10,
    },

    saving2: {
        padding: 10,
        backgroundColor: '#1f1f1f',
        width: 165,
        height: 100,
        borderRadius: 15,
        marginTop: 17,
        color: 'white',
        alignItems: 'center',
    },

    continue: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#2043C0',
    borderWidth: 2,
    padding: 12,
    borderRadius: 25,
    height: 55,
    width: '94%',
    marginLeft: 13,
    marginTop: 25,
  },
})