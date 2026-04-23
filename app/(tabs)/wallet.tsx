import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Ionicons, } from "@expo/vector-icons";
import { useState } from "react";

export default function HomeScreen() {

    const [showBalance, setShowBalance] = useState(false);
    const currencies = [
        { letter: 'N', name: 'CNGN', subtitle1: 'Compliant Naira', amount: '1,200.00', subtitle2: '= $1,200', color: '#8B5CF6', icon: 'chevron-forward-circle' },
        { letter: 'T', name: 'USDT', subtitle1: 'Tether USD', amount: '1,200.00', subtitle2: '= $1,200', color: '#10B981', icon: 'chevron-forward-circle' },
        { letter: '$', name: 'USDC', subtitle1: 'USD Coin', amount: '1,200.00',subtitle2: '= $1,200', color: '#3B82F6', icon: 'chevron-forward-circle' },
    ];

    return (
        <ScrollView>
            <View style={{
                padding: 15,
            }}>
                <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', }}>Wallets</Text>
                <View style={styles.saving}>
                    <Text style={{ color: 'white', fontWeight: '600', marginLeft: 10, fontSize: 17, marginTop: 12 }}> My Asset Portfolio</Text>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', marginTop: 12, }}> {showBalance ? '$ 12,480.22' : '*******'}</Text>

                    <Pressable style={styles.eye} onPress={() => setShowBalance(!showBalance)}>
                        <Ionicons name={showBalance ? 'eye-off-outline' : 'eye-outline'} size={20} color='white' />
                    </Pressable>
                </View>

                <View style={styles.container}>
                    <View>
                        <Pressable style={styles.icon}>
                            <Ionicons name="add-outline" color='blue' size={25} />
                        </Pressable>
                        <Text style={styles.iconsText}>Add Funds</Text>
                    </View>

                    <View>
                        <Pressable style={styles.icon}>
                            <Ionicons name="arrow-down-circle-outline" color='blue' size={25} />
                        </Pressable>
                        <Text style={styles.iconsText}>Withdraw</Text>
                    </View>

                    <View>
                        <Pressable style={styles.icon}>
                            <Ionicons name="swap-vertical-outline" color='blue' size={25} />
                        </Pressable>
                        <Text style={styles.iconsText}>Swap</Text>
                    </View>

                    <View>
                        <Pressable style={styles.icon}>
                            <Ionicons name="document-text-outline" color='blue' size={25} />
                        </Pressable>
                        <Text style={styles.iconsText}>Statement</Text>
                    </View>
                </View>
                <View style={styles.heading}>
                    <Pressable style={styles.press}>
                        <Text style={{ color: 'white', marginTop: 5, }}>Stablecoins</Text>
                    </Pressable>

                    <Pressable>
                        <Text style={{ color: 'white', marginLeft: -25, }}>Utility</Text>
                    </Pressable>

                    <Pressable>
                        <Text style={{ color: 'white', marginLeft: -20, marginTop: -3, }}>Memes <Ionicons name="flame" size={20} color='red' /></Text>
                    </Pressable>
                </View>

                {currencies.map((item) => (
                    <View key={item.name} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10,
                        marginTop: 10,
                        borderBottomWidth: 1,
                        borderBottomColor:  'rgba(255, 255, 255, 0.1)',
                    }}>
                        <View style={{
                            backgroundColor: item.color,
                            borderRadius: 25,
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>{item.letter}</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.mapText}>{item.name}</Text>
                            <Text style={{color: 'grey'}}>{item.subtitle1}</Text>
                        </View>
                        <View>
                            <Text style={styles.mapText}>{item.amount}</Text>
                            <Text style={{color: 'grey'}}>{item.subtitle2}</Text>
                        </View>

                        <Ionicons style ={styles.mapIcon} name={item.icon as any} size={30} color= '#515151' />
                    </View>
                ))}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    saving: {
        padding: 10,
        backgroundColor: '#2043C0',
        height: 130,
        borderRadius: 15,
        marginTop: 20,
        color: 'white',
    },
    eye: {
        marginLeft: 290,
        marginTop: -90,
    },
    container: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        marginTop: 10,
    },

    icon: {
        backgroundColor: '#f5f7f7',
        width: 52,
        height: 52,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconsText: {
        color: 'white',
        marginTop: 10,
        textAlign: 'center'
    },

    heading: {
        padding: 10,
        flexDirection: 'row',
        gap: 96,
        backgroundColor: '#2c2c2c',
        borderRadius: 25,
        justifyContent: 'center',
        height: 45,
        width: 370,
        marginLeft: -5,
    },

    press: {
        // position: 'relative',
        backgroundColor: '#2043C0',
        width: 100,
        height: 35,
        marginTop: -5,
        alignItems: 'center',
        borderRadius: 15,
    },

    mapText: {
        color: 'white',
        // textAlign: 'center',
        fontWeight: 'bold',
    },

    mapIcon: {
        left: 12,
    }
})