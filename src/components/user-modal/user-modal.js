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
    };

    return (
        <View>
            <Modal
                isVisible={modalStatus}
                animationIn="fadeInUpBig"
                animationOut="fadeOutDownBig"
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
                            {" " + data?.login}
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

                    <TouchableOpacity
                        onPress={closeModalBox}
                        style={{ marginVertical: 5 }}
                    >
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
        height: '35%',
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
        paddingVertical: 3
    },

    image: {
        resizeMode: 'contain',
        height: 60,
        width: 60,
    },

    closeBtn: {
        color: 'red',
        fontSize: 20,
        textAlign: 'right'
    }
});

export default UserModalBox;