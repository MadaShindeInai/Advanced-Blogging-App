import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {THEME} from 'src/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {HeaderIcon} from '../../components/HeaderIcon';
import {MainScreen} from '../../screens/MainScreen';
import {AboutScreen} from '../../screens/AboutScreen';
import {CreateScreen} from '../../screens/CreateScreen';
import {PostScreen} from '../../screens/PostScreen';
import {BookedScreen} from '../../screens/BookedScreen';
import {LogoTitle} from '../../components/LogoTitle';
import {options as dateOptions} from '../../../constanst';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreenNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? THEME.colors.MAIN : THEME.colors.WHITE,
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
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
              <Item
                title="Toggle Drawer"
                iconName="navicon"
                onPress={() => {}}
              />
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
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
              <Item
                title="Take photo"
                iconName={route.params.postBooked ? 'star' : 'star-o'}
                onPress={() => {}}
              />
            </HeaderButtons>
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
      {/* <Stack.Screen
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
        /> */}
    </Stack.Navigator>
  );
}

const App: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName = 'ios-list-box';

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Favorites') {
              iconName = 'star';
            }
            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: THEME.colors.MAIN,
          inactiveTintColor: THEME.colors.SHADOW,
        }}>
        <Tab.Screen name="Home" component={HomeScreenNavigator} />
        <Tab.Screen name="Favorites" component={BookedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
