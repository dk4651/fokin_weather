import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Clear : {
        iconName : 'white-balance-sunny',
        gradientcolor : ['#0575E6','#00F260'],
        title : 'Clear',
        subtitle : 'Its sunny'
    },

    Clouds : {
        iconName : 'weather-cloudy',
        gradientcolor : ['#6D6027','#D3CBB8'],
        title : 'Cloud',
        subtitle : 'Its cloudy'

    }


}
export default function Weather({temp, condition}){
    return (
    //<View style = {styles.container}>
        <LinearGradient
            // Button Linear Gradient
            colors={weatherOptions[condition].gradientcolor}
            style={styles.container}>

        <StatusBar barStyle = 'light-content' />

        <View style = {styles.halfcontainer}>
            <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={89} />
            <Text style = {styles.text}>{condition}</Text>       
            <Text style = {styles.text}>{temp}</Text>
        </View>
        <View style = {{...styles.halfcontainer,...styles.textcontainer}}>
            <Text style = {styles.title}>
                {weatherOptions[condition].title}
            </Text>
            <Text style = {styles.subtitle}>
                {weatherOptions[condition].subtitle}
            </Text>
        </View>
         </LinearGradient>
    //</View>
    )


}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
 /*   condition : PropTypes.oneOf([
        "Clear"
    ]).isRequired*/
  };

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        //paddingHorizontal : 30,
        //paddingVertical : 100 ,
        //backgroundColor : '#FDF6AA',
        alignItems : 'center'

    },

    text : {
        color : '#2c2c2c',
        fontSize : 30
    },
    halfcontainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },

    title : {
        color : 'white',
        fontSize : 39,
        fontWeight : '500',
        marginBottom : 10
    },
    subtitle : {
        color : 'white',
        fontSize : 29,
        fontWeight : '200'

    },
    textcontainer : {
        paddingHorizontal : 20,
        alignItems : 'flex-start'

  

    }

});