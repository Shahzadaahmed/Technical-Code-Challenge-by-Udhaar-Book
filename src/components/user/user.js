// Note: User component...!

import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

// Note: Importing reuseable components...!
import UserModalBox from '../user-modal/user-modal';

const User = (props) => {
    // console.log("User: ", props);
    let { userIndex, userData } = props;

    // Note: Handeling states here...!
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState(null);

    // Note: Function to close modal box...!
    const modalBoxHandler = () => {
        setModalVisible(false);
        setModalData(null);
    }

    // Function to handle user name...!
    const handleUserName = (name) => {
        let initialChar = name.charAt(0).toUpperCase();
        let remainingChars = name.slice(1).toLowerCase();
        let fullName = initialChar + remainingChars;
        return fullName;
    };

    // Note: Function to open model box...!
    const openModelBox = (data) => {
        // console.log('User Data: ', data);
        setModalVisible(true);
        setModalData(data);
    };

    return (
        <>
            <UserModalBox
                modalStatus={isModalVisible}
                data={modalData}
                modalHandler={modalBoxHandler}
            />

            <TouchableOpacity
                key={userIndex}
                onPress={() => openModelBox(userData)}
                style={styles.userContainer}
            >
                <Image
                    style={styles.userImage}
                    resizeMode='contain'
                    source={{ uri: userData?.avatar_url }}
                />

                <View style={styles.innerSection}>
                    <Text style={styles.username}>
                        {handleUserName(userData.login)}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

// Note: Handeling styling here...!
const styles = StyleSheet.create({
    userContainer: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: "#7051C8",
    },

    innerSection: {
        flex: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10
    },

    userImage: {
        height: 60,
        width: 60,
        resizeMode: "contain",
        margin: 5,
        borderRadius: 20,
    },

    username: {
        color: "white",
        fontSize: 17,
        fontWeight: "700"
    }
});

export default User;