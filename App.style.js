import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 15
  },
  header: { flex: 1 },
  body: { flex: 5 },
  footer: {
    height: 70,
    backgroundColor: '#fff'
  },
  cardItem: {
    marginBottom: 15
  },
  emptyText: {
    paddingVertical: 200,
    paddingLeft: '35%',
    fontSize: 25
  }
});
