import { View, Text, StyleSheet, Pressable } from "react-native";
import { ScrollView } from "react-native";
import { Ionicons, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function HomeScreen() {
    const [showBalance, setShowBalance] = useState(false);

    const actions = [
        { icon: 'bank-outline', label: 'To Bank', badge: 'NEW', library: 'MaterialCommunity' },
        { icon: 'arrow-down-circle-outline', label: 'Withdraw', badge: null, library: 'Ionicons' },
        { icon: 'piggy-bank-outline', label: 'Save', badge: null, library: 'MaterialCommunity' },
        { icon: 'hand-coin-outline', label: 'Invest', badge: null, library: 'MaterialCommunity' },
        { icon: 'trending-up-outline', label: 'High Yield', badge: '🔥', library: 'Ionicons' },
        { icon: 'swap-vertical-outline', label: 'Swap', badge: null, library: 'Ionicons' },
    ];

    const todos = [
        { id: '1', text: 'Update your profile.' },
        { id: '2', text: 'Verify your Phone Number' },
        { id: '3', text: 'Complete KYC Verification Check' },
    ];

    return (
        <ScrollView>
            <View style={{ padding: 10 }}>
                <View style={styles.profileview}>
                    <View style={styles.userpic}> <Ionicons name='person' size={35} color='grey' /></View>
                    <Pressable style={styles.chatIcon}>
                        <Ionicons name='chatbubble-outline' size={25} color='black' />
                    </Pressable>
                </View>
                <View style={styles.headingText}>
                    <Text style={styles.userName}> Hi, @Fernandez_Chinedu</Text>
                    <Text style={styles.subtitle}>Start Saving now</Text>
                </View>

                <View>
                    <View style={styles.portfolio}>
                        <View style={styles.portfolioText}>
                            <Text style={{ color: 'white', fontWeight: '700', fontSize: 15, }}> PORTFOLIO BALANCE</Text>

                            <Pressable onPress={() => setShowBalance(!showBalance)}>
                                <Ionicons name={showBalance ? 'eye-off-outline' : 'eye-outline'} size={23} color='white' />
                            </Pressable>
                            <Text style={styles.portfolioText}>Transaction History <Ionicons name="chevron-forward-outline" size={20} color='white' /></Text>
                        </View>

                        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', marginTop: 10, }}> {showBalance ? 'N 2,450,120.00' : '*******'}</Text>

                    </View>

                    <View style={styles.portfolio2}>
                        <View style={styles.portfolioIcon}>
                            <MaterialCommunityIcons name="sprout-outline" size={30} color='#2043C0' />
                        </View>
                        <Text style={{ color: '#2043C0', fontSize: 18, fontWeight: 'bold', marginLeft: 73, marginTop: -54, }}>Total Savings</Text>

                        <Text style={{ color: '#2043C0', fontSize: 24, fontWeight: 'bold', marginLeft: 67, }}> {showBalance ? 'N 890,000.00' : '*******'}</Text>

                        <View style={styles.portfolioPlan}>
                            <Text style={{ color: '#2043C0', fontSize: 17, fontWeight: 'bold' }}>Plans <Ionicons name="chevron-forward" size={20} color='#2043C0' /></Text>
                        </View>

                    </View>

                    <View style={{ padding: 10, marginTop: 20, }}>
                        <Text style={{ color: 'gray', fontWeight: 'bold' }}>QUICK ACTIONS </Text>


                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16, padding: 10 }}>
                            {actions.map((item) => (
                                <Pressable key={item.label} style={{ alignItems: 'center', width: '28%' }}>
                                    <View style={{
                                        backgroundColor: 'white',
                                        borderRadius: 16,
                                        padding: 16,
                                        position: 'relative'
                                    }}>
                                        {item.library === 'Ionicons'
                                            ? <Ionicons name={item.icon as any} size={28} color="#2043C0" />
                                            : <MaterialCommunityIcons name={item.icon as any} size={28} color="#2043C0" />
                                        }
                                        {item.badge && (
                                            <View style={{
                                                position: 'absolute',
                                                top: -8,
                                                right: -8,
                                                backgroundColor: item.badge === 'NEW' ? 'red' : 'transparent',
                                                borderRadius: 5,
                                                paddingHorizontal: 4,
                                                paddingVertical: 2
                                            }}>
                                                <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                                                    {item.badge}
                                                </Text>
                                            </View>
                                        )}
                                    </View>
                                    <Text style={{ color: '#afafaf', fontSize: 13, marginTop: 6 }}>{item.label}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>

                    <View style={{ padding: 10, marginTop: 20, }}>
                        <Text style={{ color: 'gray', fontWeight: 'bold', marginBottom: 13, }}>TO DO</Text>

                        {todos.map((item) => (
                            <View key={item.id} style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: '#1E1E1E',
                                borderRadius: 12,
                                padding: 16,
                                marginBottom: 10,
                                gap: 12
                            }}>
                                <Fontisto name="checkbox-passive" size={24} color="#3B82F6" />
                                <Text style={{ color: 'white', fontSize: 16 }}>{item.text}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    profileview: {
        flexDirection: 'row',
        padding: 15,
        marginLeft: -10,
        justifyContent: 'space-between',
    },

    userpic: {
        backgroundColor: '#2b2b2b',
        borderWidth: 3,
        borderColor: '#007AFF',
        borderRadius: 38,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },

    userName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 8,
        // marginVertical: 20,
    },

    headingText: {
        // padding: 10,
        gap: 5,
        marginLeft: 65,
        marginTop: -65,
    },

    subtitle: {
        color: 'grey',
        fontSize: 14,
        marginLeft: 13,
        fontWeight: 'bold',

    },

    chatIcon: {
        backgroundColor: 'white',
        height: 49,
        width: 49,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 25,
        marginTop: 10,
        // marginLeft: 60,
        left: '4%',
    },

    portfolio: {
        padding: 10,
        backgroundColor: '#2043C0',
        height: 130,
        borderRadius: 15,
        marginTop: 20,
        color: 'white',
    },

    portfolioText: {
        flexDirection: 'row',
        gap: 9,
        color: 'white',
        fontSize: 15,

    },

    portfolio2: {
        // flexDirection: 'row',
        // gap: 5,
        padding: 10,
        backgroundColor: '#e5f1fd',
        height: 100,
        borderRadius: 15,
        marginTop: -25,
        color: 'white',
    },

    portfolioIcon: {
        backgroundColor: 'white',
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
    },

    portfolioPlan: {
        borderWidth: 2,
        borderColor: '#2043C0',
        width: 90,
        height: 33,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 250,
        marginTop: -42,
    }

})