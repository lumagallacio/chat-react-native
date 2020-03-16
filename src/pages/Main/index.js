import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {Container} from './styles';

import User from '../User';

import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #e0dfde;
`;
const Input = styled.TextInput`
  padding-horizontal: 20px;
  padding-vertical: 10px;
  border-radius: 5px;
  background-color: #fff;
  align-self: stretch;
  margin-bottom: 15px;
  margin-horizontal: 20px;
  font-size: 16px;
`;

const Logo = styled.Image`
  height: 40%;
  width: 60%;
  marginbottom: 40px;
  backgroundcolor: #e0dfde;
`;

const Label = styled.Text`
  margin: 20px 20px;
`;

// console.tron.log(value);

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    const {navigate} = this.props.navigation;
    console.tron.log('name');

    return (
      <Container>
        <Label>Nome</Label>
        <Input
          placeholder="Nome"
          onChangeText={text => this.setState({text})}
          value={this.state.text}></Input>
        <Text style={{padding: 10, fontSize: 42}}>{this.state.text}</Text>
        <Button
          type="outline"
          title="Login"
          onPress={() =>
            navigate('User', {
              name: this.state.text,
            })
          }
        />
      </Container>
    );
  }
}
{
  /* <Logo source={require('../../images/my_app.png')} resizeMode="contain" /> */
}

{
  /* export default function Main({navigation}) {
   return <Container />;
 }  */
}
