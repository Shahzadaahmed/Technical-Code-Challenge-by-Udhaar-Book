// Note: SearchUser component...!

import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import IconFromMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SearchUser = (props) => {
    // console.log("SearchUser: ", props);
    let { inputValue, onChange, refrence, disableSearch } = props;

    return (
        <View style={styles.searchInputHandler}>
            <TouchableOpacity onPress={disableSearch}>
                <IconFromMaterialCommunityIcons
                    name="arrow-left"
                    color="#7051C8"
                    size={22}
                />
            </TouchableOpacity>

            <TextInput
                ref={refrence}
                placeholder="Search User..."
                placeholderTextColor="lightblue"
                style={styles.textInput}
                autoCapitalize="none"
                value={inputValue}
                onChangeText={(event) => onChange(event)}
            />
        </View>
    );
};

// Note: Handeling styling here...!
const styles = StyleSheet.create({
    searchInputHandler: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10
    },

    textInput: {
        flex: 1,
        color: "#7051C8",
        fontSize: 18,
        paddingLeft: 10
    }
});

export default SearchUser;