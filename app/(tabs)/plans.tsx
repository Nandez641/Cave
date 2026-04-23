import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, View, } from "react-native";

export default function Plans() {
    return (
        <ScrollView>
            <View style={{
                padding: 15,
            }}>
                <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', }}>Plans</Text>
                <View style={styles.saving}>
                    <Text style={{ color: 'white', fontWeight: '600', marginLeft: 10 }}> SAVINGS PLAN</Text>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', marginTop: 12, marginLeft: 10 }}>USD 0.00</Text>
                </View>

                <View style={styles.plans}>
                    <Pressable style={styles.p1}>
                        <View style={styles.icon}>
                            <MaterialCommunityIcons name="piggy-bank-outline" size={38} color='orange' />
                        </View>
                        <Text style={{ color: 'orange', fontSize: 20, fontWeight: 'bold', }}>Create Plan</Text>
                        <Text style={{ color: 'white', marginTop: 10, }}>Create a new fixed savings plan</Text>
                    </Pressable>

                    <Pressable style={styles.p2}>
                        <View style={styles.icon2}>
                            <Ionicons name="calculator-outline" size={33} color='blue' />
                        </View>
                        <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold', }}>Interest Calculator</Text>
                        <Text style={{ color: 'white', marginTop: 10, }}>Calculate the interest on your savings</Text>
                    </Pressable>
                </View>


                <Text style={{ color: 'grey', fontSize: 15, marginTop: 12 }}> ALL SAVINGS PLANS</Text>

                <View style={styles.plans}>
                    <Pressable style={styles.p3}>

                        <Text style={{ color: 'grey', marginTop: 10, fontWeight: 'bold', marginTop: 5, }}>FLEXIBLE SAVINGS</Text>
                        <Text style={{ color: 'white', fontSize: 38, fontWeight: 'bold', marginTop: 12, }}>$0.00</Text>

                        <View style={styles.icon3}>
                            <MaterialCommunityIcons name="plus" size={25} color='white' />
                        </View>
                        <Text style={styles.ptext}>ADD FUNDS</Text>
                    </Pressable>


                    <Pressable style={styles.p4}>

                        <Text style={{ color: 'grey', fontWeight: 'bold', }}>FIXED SAVINGS</Text>
                        <Text style={{ color: 'white', fontSize: 38, fontWeight: 'bold', marginTop: 12, }}>$0.00</Text>
                        <View style={styles.icon4}>
                            <MaterialCommunityIcons name="menu" size={25} color='white' />
                            <Text style={styles.ptext2}>VIEW ALL PLANS</Text>
                        </View>
                    </Pressable>

                </View>
                           <View style ={{
                        padding: 10,
                    }}>
                        <Text style= {{color: 'grey', fontWeight: 'bold'}}>TODAY'S RATE</Text>
                        <Text style= {{color: 'grey', marginTop: 10,}}>This rate is updated daily (Apr 13, 2026 02:43 AM) </Text>

                    </View>
            </View>
        </ScrollView>

    )

}
const styles = StyleSheet.create({
    saving: {
        padding: 10,
        backgroundColor: '#2043C0',
        height: 120,
        borderRadius: 15,
        marginTop: 20,
        color: 'white',
    },
    plans: {
        padding: 10,
        flexDirection: 'row',
    },
    p1: {
        padding: 10,
        backgroundColor: '#1a1a1a',
        color: 'white',
        borderWidth: 2,
        borderColor: 'orange',
        borderRadius: 13,
        height: 187,
        width: 155,
        marginTop: 13,
        // marginLeft: -10,
    },

    p2: {
        padding: 10,
        backgroundColor: '#1a1a1a',
        color: 'white',
        borderWidth: 2.5,
        borderColor: '#2043C0',
        borderRadius: 13,
        height: 187,
        width: 150,
        marginTop: 13,
        marginLeft: 25,
    },

    icon: {
        backgroundColor: '#fbf1e8',
        width: 43,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },

    icon2: {
        backgroundColor: '#6486dd',
        width: 45,
        height: 43,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },

    p3: {
        padding: 10,
        backgroundColor: '#1a1a1a',
        color: 'white',
        borderWidth: 2.5,
        borderColor: '#1a1a1a',
        borderRadius: 13,
        height: 187,
        width: 158,
        marginTop: 13,
        // marginLeft: -10,
    },
    icon3: {
        backgroundColor: 'blue',
        width: 35,
        height: 35,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 28,
        marginLeft: -5,
    },

    ptext: {
        color: 'white',
        marginLeft: 40,
        marginTop: -30,
        fontWeight: 'bold',
        fontSize: 13,
    },

    p4: {
        padding: 10,
        backgroundColor: '#1a1a1a',
        color: 'white',
        borderWidth: 2.5,
        borderColor: '#1a1a1a',
        borderRadius: 13,
        height: 187,
        width: 158,
        marginTop: 13,
        marginLeft: 25,
    },
    icon4: {
        backgroundColor: 'blue',
        width: 35,
        height: 35,
        borderRadius: 40,
        alignItems: 'center',
        marginTop: 28,
        marginLeft: -5,
    },

    ptext2: {
        color: 'white',
        marginLeft: 220,
        marginTop: -20,
        fontWeight: 'bold',
        fontSize: 13,
        flexDirection: 'row',
        width: 170,
        // backgroundColor: 'blue',
    },
})