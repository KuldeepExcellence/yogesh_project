import React from 'react';
import {
    Text,
    StyleSheet,
    Image,
    View,
    SafeAreaView,
} from 'react-native';
import RideList from '../screens/RideList';

const BookingCard = (props) => {
    const { ride, key } = props;
    return (
        <SafeAreaView style={styles.SearchCard}>
            <Image style={styles.userprofile} source={ride.profilePic ? ride.profilePic : require('../Assets/userprofile.png')}></Image>

            <View style={styles.textItems}>
                <Text style={styles.UserText}> {ride["_data"]["bookedBy"][0]} </Text>
                <Text style={styles.textstyle}> From : {ride["_data"]["leavingFrom"]} </Text>
                <Text style={styles.textstyle}> To : {ride["_data"].goingTo} </Text>
                <Text style={styles.textstyle}> On: {"Oct 29"} </Text>
            </View>
            <Text style={styles.price}>{ride["_data"].pricePerRider} $</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    SearchCard: {
        width: '90%',
        height: 150,
        backgroundColor: '#F6F6F6',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    userprofile: {
        width: '30%',
        height: 100,
        marginTop: 20,
    },
    textstyle: {
        fontSize: 16,
        marginBottom: 10,
    },
    textItems: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 10,
    },
    UserText: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
        marginTop: 20
    },
    price: {
        fontSize: 25,
        fontWeight: '700',
        margin: 20,
    }
});

export default BookingCard;