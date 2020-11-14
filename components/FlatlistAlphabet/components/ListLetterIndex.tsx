import * as React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import ISectionData from "../interfaces/ISectionData";
import styles from "../styles/ListLetterIndexStyle";

interface Props {
  /**
   * Goes to the specific letter location on press
   *
   * @param sectionIndex - The section alphabet index
   *
   */
  onPressLetter: (sectionIndex: number) => void;
  /** The array of objects data with value and key. */
  sectionData: ISectionData[];
  /** The alphabet letter color. */
  indexLetterColor?: string;
  /** The alphabet letter font-size. */
  indexLetterSize?: number;
  /** The alphabet letter index width size. */
  letterIndexWidth?: number;
  /** The container letter item style. */
  letterItemStyle?: any;
  /** The alphabet wrapper container style. */
  containerStyle?: any;
  /** The flatlist alphabet container style. */
  alphabetContainer?: any;
}

export default class ListLetterIndex extends React.PureComponent<Props> {

  getComputedLabelStyle() {
    const props = this.props;

    if (props) {
      return {
        color: props.indexLetterColor,
        fontSize: props.indexLetterSize
      };
    }
  }

  getWidthContainerStyle() {
    const props = this.props;

    if (props) {
      return {
        width: props.letterIndexWidth,
        ...props.containerStyle
      };
    }
  }

  getLetterItemStyle() {
    const { letterItemStyle } = this.props;

    if (letterItemStyle) {
      return {
        ...letterItemStyle
      };
    }
  }

  renderLetterItem = ({ item, index }: { item: ISectionData; index: number }) => {

    const computedItemStyle = this.getLetterItemStyle();
    return (
      <TouchableOpacity onPress={() => this.props.onPressLetter(index)}>
          <View style={[styles.letterIndexItem, computedItemStyle]}>
            <Text style={[styles.letterIndexLabel]}>{item.title}</Text>
          </View>
      </TouchableOpacity>
    );
  };

  render() {
    const computedWidthStyle = this.getWidthContainerStyle();
    const { alphabetContainer } = this.props;

    return (
      <View style={[styles.letterIndexContainer, computedWidthStyle]}>
        <FlatList
          contentContainerStyle={[styles.letterIndexList, alphabetContainer]}
          data={this.props.sectionData}
          renderItem={this.renderLetterItem}
          keyExtractor={(i) => i.title}
        />
      </View>
    );
  }
}
