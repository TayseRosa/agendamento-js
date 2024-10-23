import { NavigationContainer } from "@react-navigation/native";
import { Image, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../home/home.jsx'
import Calendar from '../calendar/calendar.jsx'
import Profile from '../profile/profile.jsx'
import icon from "../../constants/icon.js";
import Services from "../services/services.jsx";

function Main(){
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} 
                options={{
                    headerTitleAlign:"center",
                    headerTitle:()=>{
                        return <Image source={icon.logo} style={{width:125, height:30}} />
                    },
                    tabBarIcon:({focused})=>{
                        return <Image source={icon.home} style={{width:25, height:25, opacity: focused ? 1 : 0.5  }} />
                    },
                    tabBarShowLabel:false
                }} />

                <Tab.Screen name="Calendar" component={Calendar}
                options={{
                    headerTitleAlign:"center",
                    headerTitle:()=>{
                        return <Image source={icon.logo} style={{width:125, height:30}} />
                    },
                    tabBarIcon:({focused})=>{
                        return <Image source={icon.calendar} style={{width:25, height:25, opacity: focused ? 1 : 0.5  }} />
                    },
                    tabBarShowLabel:false
                }} />
                
                <Tab.Screen name="Profile" component={Profile} 
                options={{
                    headerTitleAlign:"center",
                    headerTitle:()=>{
                        return <Image source={icon.logo} style={{width:125, height:30}} />
                    },
                    tabBarIcon:({focused})=>{
                        return <Image source={icon.profile} style={{width:25, height:25, opacity: focused ? 1 : 0.5  }} />
                    },
                    tabBarShowLabel:false
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Main;