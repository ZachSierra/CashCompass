import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';
import  mainTheme  from '../theme.js';
import {Image, View} from "react-native";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: mainTheme.backgroundColor,
                    resizeMode: 'contain',
                },
                headerTitleStyle: {
                    color: mainTheme.primaryColor,
                },
                tabBarActiveTintColor: mainTheme.primaryColor,
                tabBarStyle: { backgroundColor: mainTheme.backgroundColor},
                headerTitle: (props) => <LogoTitle{...props}/>,
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="budget"
                options={{
                    tabBarLabel: 'Budget',
                    tabBarIcon: ({ color }) => <AntDesign name="piechart" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="challenges"
                options={{
                    tabBarLabel: 'Challenges',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="trophy" color={color} />,
                }}
            />
            <Tabs.Screen
                name="chatbot"
                options={{
                    tabBarLabel: 'Chatbot',
                    tabBarIcon: ({ color }) => <FontAwesome5 size={24} name="robot" color={color} />,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />
        </Tabs>
    );
}
function LogoTitle() {
    return (
        <View
        style={{
            flex: 1,
            alignSelf: 'center',
            justifyContent: 'center',
        }}>
            <Image
                style= {{
                    width: 50,
                    height: 50,
                }}
                source={require('../../assets/CashCompassLogo.png')}
            />
        </View>

    );
}
