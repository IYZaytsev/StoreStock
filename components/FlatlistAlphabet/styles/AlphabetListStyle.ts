import { ViewStyle, TextStyle } from "react-native";
import sizes from "../values/sizes";
import colors from "../values/colors";

interface Style {
  container: ViewStyle;
  listItemContainer: ViewStyle;
  listItemLabel: TextStyle;
  sectionHeaderContainer: ViewStyle;
  sectionHeaderLabel: TextStyle;
}

const styles: Style = {
  container: {
    position: "relative",

  },

  listItemContainer: {
    flex: 1,
    height: sizes.itemHeight,
    paddingHorizontal: sizes.spacing.regular,
    justifyContent: "center",
    borderTopColor: colors.seperatorLine,
    borderTopWidth: 1,
    backgroundColor: "#F1F9FF",
    marginRight: 30,
    marginBottom: 56,
  },

  listItemLabel: {
    color: colors.text.dark,
    fontSize: 14,
  },

  sectionHeaderContainer: {
    height: sizes.headerHeight,
    backgroundColor: "#A9AEB2",

    justifyContent: "center",
    paddingHorizontal: sizes.spacing.regular,
    marginRight: 30,
  },

  sectionHeaderLabel: {
    color: "#000000",
  },
};

export default styles;
