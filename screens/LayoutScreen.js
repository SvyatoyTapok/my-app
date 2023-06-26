import React, { useState } from "react";
import { View } from "react-native";
import TopContainer from "../components/TopContainer";
import StoriesBox from "../components/StoriesBox";
import OrderContainer from "../components/OrderContainer";

export default LayoutScreen = () => {
  const [activeDropdownMenu, setactiveDropdownMenu] = useState(false);
  const [address, setAddress] = useState("Анкудиновка Свободы 5к2");

  return (
    <View style={{ backgroundColor: "#FFFFFF" }}>
      <TopContainer
        setactiveDropdownMenu={setactiveDropdownMenu}
        activeDropdownMenu={activeDropdownMenu}
        address={address}
        setAddress={setAddress}
      />

      <StoriesBox />

      <OrderContainer />
    </View>
  );
};
