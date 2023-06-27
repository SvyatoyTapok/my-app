import { StyleSheet } from "react-native";

// todo: каждому компоненту свой стиль

export default StyleSheet.create({
  TextBoxes: {
    borderColor: "gray",
    borderWidth: 2,
    width: 200,
    textAlign: "center",
    borderRadius: 15,
    backgroundColor: "magneta",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  topContainer: {
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    zIndex: 100,
  },
  topText: {
    fontSize: 17.5,
    fontWeight: 300,
  },
  topIconProfile: {
    width: 34,
    height: 34,
    borderRadius: 20,
  },
  storiesBox: {
    width: "100%",
    height: 142,
    paddingLeft: 15,
  },
  storiesTitle: {
    paddingBottom: 10,
  },
  storiesCurrentTitle: {
    fontFamily: "Dosis",
    fontSize: 22,
    fontWeight: 700,
  },
  imageStoryItem: {
    width: 115,
    height: 115,
    borderRadius: 20,
  },
  textStoryItem: {
    position: "absolute",
    zIndex: 2,
    color: "white",
    fontWeight: "500",
    paddingBottom: 10,
  },
  storyComponent: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 20,
  },
  dropdownContainer: {
    backgroundColor: "white",
    width: 200,
    position: "absolute",
    top: 50,
    left: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  dropdownOption: {
    position: "relative",
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  orderContainer: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    marginTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    elevation: 10,
  },
  searchContainer: {
    backgroundColor: "#F6F6F6",
    height: 35,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "center",
    width: "100%",
  },
  searchItem: {
    alignItems: "center",
    flexDirection: "row",
  },
  searchIcon: {
    marginHorizontal: 13,
  },
  lastOrderContainer: {
    marginTop: 25,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  titleLastOrder: {
    fontSize: 24,
    fontFamily: "Dosis",
    fontWeight: 700,
  },
  subTitleLastOrder: {
    color: "#989FA6",
  },
  repeatOrderButton: {
    flexDirection: "row",
    backgroundColor: "#4A4A49",
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
  },
  repeactIcon: {
    height: 15,
    width: 15,
  },
  repeatTextButton: {
    color: "white",
  },
  lastOrderItemContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15,
    alignItems: "center",
  },
  nameLastOrderItem: {
    fontWeight: 600,
    fontSize:16
  },
  ammountLastOrderItem: {
    fontSize: 14,
    fontWeight: 300,
  },
  newOrderContainer: {
    marginTop: 10,
    width: "100%",
  },
  titlesNewOrder: {
    flexDirection: "row",
  },
  typesOfProducts: {
    marginHorizontal: 10,
    fontSize: 25,
  },
  orderItemContainer: {
    marginHorizontal: 4,
    marginVertical: 4,
  },
  coffeeIcon: {
    width: 164,
    height: 112,
    borderRadius: 15,
  },
  titleItem: {
    fontWeight: 500,
    fontSize: 18
  },
  confirmButton: {
    width: 100,
    height: 35,
    backgroundColor: "#4A4A49",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  confirmIcon: {
    width: 15,
    height: 15,
  },
  sizesItem: {
    fontSize: 11,
  },
  priceItem: {
    fontSize: 20,
    fontWeight: 900,
  },
  orderItem: {
    height: 250,
    justifyContent: "space-around",
    elevation:10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  languagesContainer: {
    backgroundColor: "lightgray",
    borderRadius: 10,
    alignItems: "center",
  },
});
