import React from 'react';
import {View, Text} from 'react-native';

import styled from 'styled-components/native';

import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #e0dfde;
`;
const ContainerMsgs = styled.View`
  flex: 10;
  align-self: stretch;
  background-color: #00ff00;
`;
const ContainerInput = styled.View`
  flex: 1;
  flex-direction: row;
  align-self: stretch;
  background-color: #ff0080;
  align-items: flex-start;
`;
const SendView = styled.View`
  flex: 1;
  flex-direction: column-reverse;
  align-self: center;
  /* background-color:#0000ff; */
  margin-horizontal: 10px;
`;
const InputMsg = styled.TextInput`
  border-radius: 5px;
  /* align-self: stretch; */
  align-self: center;
  height: 70%;
  width: 75%;
  margin-horizontal: 10px;
  background-color: #fff;
`;

// export default function User({route, navigation}) {
//   var name = route.params.name;
//   return (
//     <Container>
//       <ContainerMsgs></ContainerMsgs>
//       <ContainerInput>
//         <InputMsg></InputMsg>

//         <SendView>
//           <Icon name="send" color="#6a6aff" size={30}
//           onPress={() => {
//             this.sendMsg
//           }}
//           />
//           {/* <Button
//             icon={{
//               name: 'send',
//               size: 15,
//               color: 'white',
//             }}
//           /> */}
//         </SendView>
//       </ContainerInput>
//     </Container>
//   );
// }
import {Component} from 'react';
export default class User extends Component {
  sendMsg() {
    console.tron.log('teste');

  }

  constructor(props) {
    super(props);
    console.tron.log(props);
    this.state = {value: ''};
    console.tron.log(this.state);
  }
  state = {
    value: 'teste',
  };
  render() {
    const name = this.props.route.params.name;
    const {value} = this.state;
    // console.tron.log(name);
    // const [value, onChangeText] = React.useState('Useless Placeholder');

    // const { name } = this.props.navigation.getParam('name', 'defaultValue');
    // const route = this.props.navigation.state.params.name;
    return (
      <Container>
        <Text>{name}</Text>
        <Text>{value}</Text>
        <ContainerMsgs></ContainerMsgs>
        <ContainerInput>
          <InputMsg
            onChangeText={text => this.setState({text})}
            placeholder={'Digite sua mensagem aqui'}></InputMsg>

          <SendView>
            <Icon
              name="send"
              color="#6a6aff"
              size={30}
              onPress={() => {
                this.sendMsg();
              }}
            />
            {/* <Button
            icon={{
              name: 'send',
              size: 15,
              color: 'white',
            }}
          /> */}
          </SendView>
        </ContainerInput>
      </Container>
    );
  }
}
