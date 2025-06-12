import React from "react";
import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

import { Colors, CustomTheme, TextTypeStyles, vs } from "@io/constants";
import { useColorScheme } from "@io/hooks";
import { DashboardSvg, EventsSvg, TeamSvg } from "@io/assets";

const STYLES = StyleSheet.create({
  tabBarStyle: {
    marginVertical: vs.mr4,
    elevation: 0,
    borderTopWidth: 0,
  },
  tabBarLabelStyle: {
    ...TextTypeStyles.smallText,
    marginTop: vs.mr4,
  },
});

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: CustomTheme[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors.neutral400,
        headerShown: false,
        tabBarStyle: [
          STYLES.tabBarStyle,
          {
            backgroundColor:
              colorScheme === "dark"
                ? DarkTheme?.colors?.background
                : DefaultTheme?.colors?.background,
          },
        ],
        tabBarLabelStyle: STYLES.tabBarLabelStyle,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, focused }) => (
            <DashboardSvg fill={focused ? color : Colors.neutral400} />
          ),
        }}
      />

      <Tabs.Screen
        name="teams"
        options={{
          title: "Teams",
          tabBarIcon: ({ color, focused }) => (
            <TeamSvg fill={focused ? color : Colors.neutral400} />
          ),
        }}
      />

      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          tabBarIcon: ({ color, focused }) => (
            <EventsSvg fill={focused ? color : Colors.neutral400} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
