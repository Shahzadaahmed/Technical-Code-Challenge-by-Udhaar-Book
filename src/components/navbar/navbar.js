// Note: Navbar component...!

import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import IconFromFontAwesome from "react-native-vector-icons/FontAwesome";

const Navbar = (props) => {
    // console.log("Navbar: ", props);
    let { search } = props;

    return (
        <View style={styles.searchHeader}>
            <Text style={styles.usersText}>
                Users
            </Text>

            <TouchableOpacity onPress={() => search()}>
                <IconFromFontAwesome
                    name='search'
                    color='white'
                    size={20}
                />
            </TouchableOpacity>
        </View>
    );
};

// Note: Handeling styling here...!
const styles = StyleSheet.create({
    searchHeader: {
        // backgroundColor: "yellow",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 13
    },

    usersText: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        fontFamily: "georgia"
    },
});

export default Navbar;