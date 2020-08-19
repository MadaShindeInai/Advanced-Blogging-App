import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {THEME} from 'src/theme';
import {HeaderIcon} from '../../components/HeaderIcon';
import {MainScreen} from '../../screens/MainScreen';
import {AboutScreen} from '../../screens/AboutScreen';
import {CreateScreen} from '../../screens/CreateScreen';
import {PostScreen} from '../../screens/PostScreen';
import {BookedScreen} from '../../screens/BookedScreen';
import {LogoTitle} from '../../components/LogoTitle';
import {options as dateOptions} from '../../../constanst';

const Stack = createStackNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android'
                ? THEME.colors.MAIN
                : THEME.colors.WHITE,
          },
          headerTintColor:
            Platform.OS === 'android' ? THEME.colors.WHITE : THEME.colors.MAIN,
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
          options={{
            headerTitle: (props: any) => <LogoTitle {...props} />,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderIcon}>
                <Item title="Take photo" iconName="camera" onPress={() => {}} />
              </HeaderButtons>
            ),
          }}
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
          // options={{
          //   headerStyle: {
          //     backgroundColor: 'blue',
          //   },
          //   headerTitle: (props: any) => <LogoTitle {...props} />,
          // }}
          options={({route}: any) => ({
            title: new Date(route.params.postDate).toLocaleString(
              'en-US',
              dateOptions,
            ),
          })}
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
        <Stack.Screen
          name="BookedScreen"
          component={BookedScreen}
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
