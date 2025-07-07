import { images } from "@/constants/images.js";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Tabs } from "expo-router";
import React from "react";
import { ImageBackground, Text, View } from "react-native";

const TabIcon = ({ Icon, tabName, focused, name }: any) => {
  const iconColor = focused ? "black" : "white";
  if (focused) {
    return (
      <ImageBackground
        source={images?.bg}
        className="flex gap-1 flex-row w-full flex-1 min-w-[90px] min-h-14 justify-center items-center rounded-full overflow-hidden absolute top-0 left-50"
      >
        <Icon name={name} size={18} color={iconColor} />
        <Text className="text-secondary text-sm font-semibold">{tabName}</Text>
      </ImageBackground>
    );
  } else {
    return (
      <View className="mt-3">
        <Icon name={name} size={18} color={iconColor} />
      </View>
    );
  }
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          marginHorizontal: 10,
          marginBottom: 38,
          height: 50,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0d23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              Icon={SimpleLineIcons}
              name="home"
              tabName={"Home"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              Icon={FontAwesome}
              name="bookmark-o"
              tabName={"Saved"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              Icon={AntDesign}
              name="search1"
              tabName={"Search"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              Icon={AntDesign}
              name="user"
              tabName={"Profile"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
