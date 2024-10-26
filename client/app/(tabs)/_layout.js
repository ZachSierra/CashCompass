import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="budget"
                options={{
                    title: 'Budget',
                    tabBarIcon: ({ color }) => <AntDesign name="piechart" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="challenges"
                options={{
                    title: 'Challenges',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="trophy" color={color} />,
                }}
            />
            <Tabs.Screen
                name="chatbot"
                options={{
                    title: 'Chatbot',
                    tabBarIcon: ({ color }) => <FontAwesome5 size={24} name="robot" color={color} />,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: 'Account',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />
        </Tabs>
    );
}
