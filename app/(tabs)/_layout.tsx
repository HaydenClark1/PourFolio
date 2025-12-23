// app/(tabs)/_layout.tsx
import React from 'react';
import { Tabs } from 'expo-router';
import { Image, TouchableOpacity} from 'react-native';
import { TabStyles } from '@/components/styles/TabStyles';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: TabStyles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown:false,
          tabBarIcon: ({ size }) => (
              <Image
                source={require('../../assets/images/home-icon.jpg')}
                style={[TabStyles.tabIcon, { width: size * 1.3, height: size * 1.3 }]}
              />
          ),
        }}
      />
      <Tabs.Screen
        name="find"
        options={{
          headerShown:false,
          tabBarIcon: ({ size }) => (
              <Image
                source={require('../../assets/images/find-icon.png')}
                style={[TabStyles.tabIcon, {width: size * 1.3, height: size * 1.3}]}
              />
          ),
        }}
      />
      <Tabs.Screen
        name="bar"
        options={{
          headerShown:false,
          tabBarIcon: ({ size }) => (
            <Image
              source={require('../../assets/images/bar-icon.png')}
              style={[TabStyles.tabIcon, { width: size * 1.3, height: size * 1.3 }]}
            />
          ),
        }}
      />
    </Tabs>
  );
}
