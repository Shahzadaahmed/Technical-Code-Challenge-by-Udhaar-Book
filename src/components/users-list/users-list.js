// Note: UsersList component...!

import
React,
{
    Fragment,
    useState,
    useEffect,
    useRef
}
    from
    'react';
import {
    StatusBar,
    StyleSheet,
    View,
    ScrollView,
    Text,
    InteractionManager
}
    from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../store/acion/app-actions';

// Note: Importing reuseable components...!
import Loader from '../loader/loader';
import User from '../user/user';
import Navbar from '../navbar/navbar';
import SearchUser from '../search-bar/search';

const UsersList = () => {

    // Note: Creating a refrence for input field...!
    const inputRef = useRef(null);

    // Note: Handeling states here...!
    const [enableSearchBar, setEnableSearchBar] = useState(false);
    const [searchUser, setSearchUser] = useState("");

    // Note: Handeling redux here...!
    const dispatch = useDispatch();

    // Note: Functtion to handle search bar...!
    const handleSearchBar = () => setEnableSearchBar(true);

    // Note: Funtion to disable search bar...!
    const disableSearchBar = () => {
        setEnableSearchBar(false);
        setSearchUser("");
    };

    // Note: Function to handle to handle form input...!
    const onChangehandler = (formValue) => setSearchUser(formValue);

    // Note: Function to open keyboard when enableSearchBar state is true...!
    const focusInputWithKeyboard = () => {
        if (enableSearchBar) {
            InteractionManager.runAfterInteractions(() => {
                inputRef.current.focus();
            });
        };
    };

    // Note: This hook will run when enableSearchBar state will be true...!
    useEffect(() => {
        focusInputWithKeyboard();
    }, [enableSearchBar == true]);

    // Note: When this component mounted then this hook will run...!
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, []);

    // Note: Fetching users list from redux...!
    const users = useSelector(({ appStates }) => appStates.users)
        .filter((item) => {
            return item.login.toLowerCase().includes(searchUser.toLowerCase());
        });
    // console.log("Users: ", users);

    return (
        <Fragment>
            <StatusBar backgroundColor='#7051C8' barStyle="light-content" />

            {/* Note: Main container */}
            <View style={styles.container}>

                {/* Note: Header section */}
                <View style={styles.header}>
                    {
                        (enableSearchBar)
                            ?
                            (
                                <SearchUser
                                    refrence={inputRef}
                                    inputValue={searchUser}
                                    disableSearch={disableSearchBar}
                                    onChange={onChangehandler}
                                />
                            )
                            :
                            (<Navbar search={handleSearchBar} />)
                    }

                    <View style={styles.chattingHeaderSection}>
                        <Text style={styles.chattingHeaderText}>
                            Users List
                        </Text>
                    </View>
                </View>

                {/* Note: Footer section */}
                <View style={styles.footer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            (users && users.length > 0)
                                ?
                                (
                                    users.map((item) => {
                                        return (
                                            <User
                                                userIndex={item.id}
                                                userData={item}
                                            />
                                        );
                                    })
                                )
                                :
                                (<Loader />)
                        }
                    </ScrollView>
                </View>
            </View>
        </Fragment>
    );
}

// Note: Handeling styling here...!
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7051C8"
    },

    header: {
        flex: 1,
        position: "relative",
        paddingTop: 5
    },

    chattingHeaderSection: {
        position: "absolute",
        left: 13,
        bottom: 10
    },

    chattingHeaderText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "georgia"
    },

    footer: {
        flex: 3,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
});

export default UsersList;