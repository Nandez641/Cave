import { View, Text, StyleSheet, } from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Switch } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
    const [isEnabled, setIsEnabled] = useState(false);
    const account = [
        { icon: 'person-add-outline', name: 'Account Settings', subtitle: 'Edit your profile and  next of kin', color: '#2b2b2b', icon2: 'chevron-forward-circle' },
        { icon: 'shield-checkmark-outline', name: 'Verify Phone Number', subtitle: 'Enable OTP notifications', color: '#2b2b2b', icon2: 'chevron-forward-circle' },
        { icon: 'card-outline', name: 'KYC verification', subtitle: 'Complete your KYC', color: '#2b2b2b', icon2: 'chevron-forward-circle' },
        { icon: 'chatbubble-ellipses-outline', name: 'Support', subtitle: 'Chat with our support agents', color: '#2b2b2b', icon2: 'chevron-forward-circle' },
        { icon: 'finger-print-outline', name: 'Biometrics', subtitle: 'Enable Secure Login', color: '#2b2b2b', icon2: 'chevron-forward-circle', hasSwitch: true },
        { icon: 'shield-outline', name: 'Security', subtitle: 'Add an extra layer of security', color: '#2b2b2b', icon2: 'chevron-forward-circle' },
    ];

    return (
        <View style={{
            padding: 15,
            flex: 1,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', }}>Account</Text>
                <Ionicons style={styles.accountIcon} name="ellipsis-vertical" size={30} color='white' />
            </View>

            <View style={styles.profileview}>
                <View style={styles.userpic}> <Ionicons name='person' size={45} color='grey' /></View>
                <Text style={styles.userName}>@Fernandez_Chinedu</Text>
                <Ionicons style={styles.copyIcon} name="copy-outline" size={24} color='grey' />
            </View>

            <View style={styles.saving}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 23, marginTop: 12, }}> Referral</Text>
                <Text style={{ color: 'white', fontSize: 16, marginTop: 7, marginLeft: 7 }}>Refer friends and earn points</Text>

                <View style={styles.ricon}>
                    <Ionicons name="trophy" size={25} color='orange' />
                    <Ionicons name="chevron-forward" size={25} color='white' />
                </View>
            </View>

            <View style = {{
                backgroundColor: '#111111',
                borderRadius: 12,
                padding: 10,
                marginTop: 12,
            }}>
                {account.map((item) => (
                    <View key={item.name} style={{
                        flexDirection: 'row',
                        padding: 10,
                        marginTop: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(255, 255, 255, 0.1)',
                    }}>
                        <View style={{
                            backgroundColor: item.color,
                            borderRadius: 10,
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Ionicons name={item.icon as any} size={25} color='#007AFF' />
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.mapText}>{item.name}</Text>
                            <Text style={{ color: 'grey' }}>{item.subtitle}</Text>
                        </View>
                       
                        {item.hasSwitch ? (
                            <Switch value={isEnabled} onValueChange={() =>setIsEnabled(!isEnabled)} trackColor={{false: '#767577', true: '#007AFF'}}/>
                        ) : (
                             <Ionicons name={item.icon2 as any} size={30} color='#515151' />
                        ) }
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    accountIcon: {
        marginTop: 13,
    },

    profileview: {
        flexDirection: 'row',
        padding: 15,
        marginLeft: -12,
    },

    userpic: {
        backgroundColor: '#2b2b2b',
        borderWidth: 3,
        borderColor: '#007AFF',
        borderRadius: 38,
        height: 75,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center',
    },

    userName: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 12,
        marginVertical: 22,
    },

    copyIcon: {
        marginLeft: 44,
        marginTop: 25,
    },

    saving: {
        padding: 10,
        backgroundColor: '#2043C0',
        height: 100,
        borderRadius: 15,
        marginTop: 10,
        color: 'white',
    },

    ricon: {
        flexDirection: 'row',
        gap: 18,
        marginLeft: 270,
        marginTop: -45,
    },
    mapText: {
        color: 'white',
    },
})