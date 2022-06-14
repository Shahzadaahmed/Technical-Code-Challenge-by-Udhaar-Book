// Note: Loader component...!

import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator
}
    from 'react-native';

const Loader = () => {

    // Note: Handeling states here...!
    const [dataFound, setDataFound] = useState(true);

    // Note: When this component mounted then this hook will run...!
    useEffect(() => {
        setTimeout(() => {
            setDataFound(false);
        }, 20000);
    }, []);

    return (
        <View style={styles.container}>
            {
                (dataFound)
                    ?
                    (<ActivityIndicator size="large" color="#7051C8" />)
                    :
                    (
                        <Text style={styles.notFoundtext}>
                            Data Not Found!
                        </Text>
                    )
            }
        </View>
    );
}

// Note: Handeling styling here...!
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    notFoundtext: {
        color: "purple",
        fontFamily: "georgia",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default Loader;