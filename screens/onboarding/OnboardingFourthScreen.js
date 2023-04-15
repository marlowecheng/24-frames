import { StyleSheet, View, FlatList } from "react-native";
import { Text } from "@rneui/themed";

export default function OnboardingFourthScreen({ navigation }) {


    return (
        <View style={styles.container}>
            <View style={{ flex:1 }}>
                <Text h1>
                    This is the Fourth Onboarding screen.
                </Text>
            </View>
            <View style={styles.progBarWrap}>
                <View style={styles.progBar}></View>
                <Text style={{ fontSize:10, marginLeft:5 }}>3/4</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EFDF",
    },
    progBarWrap: {
        width:"100%",
    },
    progBar: {
        backgroundColor:"#56BFD9",
        height:18,
        width:"75%",
        marginBottom: 2,
    }
});