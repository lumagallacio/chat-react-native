// import { createAppContainer } from 'react-navigation';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Main from './pages/Main';
import User from './pages/User';

// const Routes = createAppContainer (
//   createStackNavigator({
//   Main,
//   User,
//   })
// );

// export default Routes;

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Main Page',
            headerStyle: {
              backgroundColor: '#e0dfde',
            },
            headerTintColor: '#e0dfde',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Main"
//           component={Main}
//           options={{
//             title: 'Main Page',
//             headerStyle: {
//               backgroundColor: '#f4511e',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//             headerTitleAlign: 'center',
//           }}
//         />
//         <Stack.Screen name="User" component={User} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
