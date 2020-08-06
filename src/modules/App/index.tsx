import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {THEME} from 'src/theme';
import {Button} from 'react-native';
import {THEME} from 'src/theme';
import {MainScreen} from '../../screens/MainScreen';
import {AboutScreen} from '../../screens/AboutScreen';
import {CreateScreen} from '../../screens/CreateScreen';
import {PostScreen} from '../../screens/PostScreen';
import {LogoTitle} from '../../components/LogoTitle';

const Stack = createStackNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            ...THEME.fonts.regular,
            color: '#ffffff',
            paddingLeft: 10,
          },
        }}>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          // options={{
          //   title: 'Main Screen',
          //   headerStyle: {
          //     backgroundColor: '#000000',
          //   },
          //   headerTintColor: '#fff',
          //   headerTitleStyle: {
          //     ...THEME.fonts.title,
          //   },
          // }}
        />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          initialParams={{itemId: 1}}
          // options={({route}: any) => ({
          //   title: route.params.name,
          //   headerStyle: {
          //     backgroundColor: '#ffffff',
          //   },
          //   headerTintColor: '#000000',
          //   headerTitleStyle: {
          //     ...THEME.fonts.title,
          //   },
          // })}
        />
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
          initialParams={{itemId: 1}}
          options={{
            headerTitle: (props: any) => <LogoTitle {...props} />,
          }}
        />
        <Stack.Screen
          name="CreateScreen"
          component={CreateScreen}
          initialParams={{itemId: 1}}
          // options={({route}: any) => ({
          //   title: route.params.name,
          //   headerTintColor: 'black',
          //   headerTitleStyle: {
          //     ...THEME.fonts.title,
          //   },
          // })}
          options={{
            headerTitle: (props: any) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button onPress={() => {}} title="Info" color="black" />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
