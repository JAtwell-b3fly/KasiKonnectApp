import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import Welcome from "../pages/welcome";
import Login from "../pages/login";
import Signup from "../pages/signUp";
import Transaction from "../pages/Transaction";
import Description from "../pages/Description";
import Area_Group from "./AreaGroup";
import Cart from "./Cart";
import Grouping_Owners from "./GroupingOwners";
import HomeTuckshop from "./HomeTuckshop";
import Samys from "./Samys";
import Warehouses from "./Warehouses";

const App_Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Welcome" screenOptions={{headerShown: false, ...TransitionPresets.SlideFromRightIOS}}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={Signup} />
                <Stack.Screen name="Transaction" component={Transaction} />
                <Stack.Screen name="Description" component={Description} />
                <Stack.Screen name="AreaGroup" component={Area_Group} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="GroupingOwners" component={Grouping_Owners} />
                <Stack.Screen name="HomeTuckShop" component={HomeTuckshop} />
                <Stack.Screen name="Samys" component={Samys} />
                <Stack.Screen name="Warehouses" component={Warehouses} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default App_Navigation;