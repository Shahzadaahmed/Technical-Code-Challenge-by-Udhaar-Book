// Note: UserModalBox component...!

import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import Modal from "react-native-modal";

const UserModalBox = (props) => {
    // console.log("User: ", props);
    let { modalStatus, data, modalHandler } = props;

    // Note: Function to close modal box...!
    const closeModalBox = () => {
        modalHandler();
    }

    return (
        <View>
            <Modal
                isVisible={modalStatus}
                animationIn="bounce"
                animationOut="bounceOut"
                animationOutTiming={300}
                onBackdropPress={() => closeModalBox()}
            >
                <View style={styles.container}>
                    <Image
                        source={{ uri: data?.avatar_url }}
                        resizeMode="contain"
                        style={styles.image}
                    />

                    <View style={styles.miniContainer}>
                        <Text style={styles.headingText}>
                            User:
                        </Text>

                        <Text style={styles.valueText}>
                            {data?.login}
                        </Text>
                    </View>

                    <View style={styles.secondContainer}>
                        <Text style={styles.headingText}>
                            Url:
                        </Text>

                        <Text style={styles.valueText}>
                            {data?.url}
                        </Text>
                    </View>

                    <TouchableOpacity onPress={closeModalBox}>
                        <Text style={styles.closeBtn}>
                            Close
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

// Note: Handeling styling here...!
const styles = StyleSheet.create({
    container: {
        backgroundColor: "whitesmoke",
        height: '40%',
        borderRadius: 8,
        padding: 20,
        borderColor: '#7051C8'
    },

    miniContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },

    headingText: {
        fontSize: 20,
        color: 'black'
    },

    valueText: {
        fontSize: 18,
        color: '#7051C8',
        paddingLeft: 5,
        paddingVertical: 10
    },

    image: {
        resizeMode: 'contain',
        height: 60,
        width: 60,
    },

    closeBtn: {
        color: 'red',
        fontSize: 20,
        textAlign: 'right',
        paddingTop: 30
    }
});

export default UserModalBox;