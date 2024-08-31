import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cart-outline' : 'cart-outline'} color={color} />
          ),
        }}
      />
     <Tabs.Screen
     name="menu"
     options={{
       title: 'Menu',
       tabBarIcon: ({ color, focused }) => (
         <TabBarIcon name={focused ? 'menu-outline' : 'menu-outline'} color={color} />
       ),
     }}
   />
     <Tabs.Screen
     name="account"
     options={{
       title: 'Account',
       tabBarIcon: ({ color, focused }) => (
         <TabBarIcon name={focused ? 'person-outline' : 'person-outline'} color={color} />
       ),
     }}
   />
 </Tabs>
  );
}