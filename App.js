import React from 'react';
import Loading from './Loading';
import {Alert} from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "286077434f7cbfee68ed654f6ac23486";

export default class extends React.Component {
  state = {

    isLoading : true,
    temp : 0,
    condition : 'checking'
  };

  getWeather = async(latitude,longitude) => {
    const {data:{main:{temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    console.log(weather[0].main);
    this.setState({isLoading : false, temp, condition:weather[0].main});
  };
  
  getLocation = async() => {
    try{
      //throw Error();
    //await Location.getForegroundPermissionsAsync();
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
    console.log(latitude, longitude);
    this.getWeather(latitude, longitude);
    
    }catch (error){
      Alert.alert("Can't find you","So sad");
    }
  };
  
  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, temp, condition} = this.state;

  return isLoading?<Loading />:<Weather temp = {temp} condition = {condition} />;
  
}
}

