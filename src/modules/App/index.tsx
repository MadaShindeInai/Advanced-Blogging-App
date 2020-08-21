import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
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
const AndroidTab = createMaterialBottomTabNavigator();
const screenOpts: any = {
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
};

const postScreenOpts = ({route}: any) => ({
  title: new Date(route.params.postDate).toLocaleString('en-US', dateOptions),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderIcon}>
      <Item
        title="Take photo"
        iconName={route.params.postBooked ? 'star' : 'star-o'}
        onPress={() => {}}
      />
    </HeaderButtons>
  ),
});

function HomeScreenNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOpts}>
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
      />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen
        name="PostScreen"
        component={PostScreen}
        initialParams={{itemId: 1}}
        options={postScreenOpts}
      />
      <Stack.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          headerTitle: (props: any) => <LogoTitle {...props} />,
          headerRight: () => (
            <Button onPress={() => {}} title="Info" color="black" />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function TabScreenNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOpts}>
      <Stack.Screen
        name="BookedScreen"
        component={BookedScreen}
        options={{
          headerTitle: (props: any) => <LogoTitle {...props} />,
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
      />
      <Stack.Screen
        name="PostScreen"
        component={PostScreen}
        options={postScreenOpts}
      />
    </Stack.Navigator>
  );
}

const App: FC = () => {
  return (
    <NavigationContainer>
      {Platform.OS === 'android' ? (
        <AndroidTab.Navigator
          activeColor={THEME.colors.WHITE}
          barStyle={{backgroundColor: THEME.colors.MAIN}}
          shifting>
          <AndroidTab.Screen
            name="Home"
            component={HomeScreenNavigator}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <FontAwesome name="home" color={color} size={24} />
              ),
            }}
          />
          <AndroidTab.Screen
            name="Favorites"
            component={TabScreenNavigator}
            options={{
              tabBarLabel: 'Favorites',
              tabBarIcon: ({color}) => (
                <FontAwesome name="star" color={color} size={24} />
              ),
            }}
          />
        </AndroidTab.Navigator>
      ) : (
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
          <Tab.Screen name="Favorites" component={TabScreenNavigator} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
