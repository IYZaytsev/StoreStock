import IData from "./IData";

export default interface Props {
  /** The array of objects data. */
  data: IData[];
  /** The sectionlist container style. */
  style?: any;
  /**
   * Render the list item elements.
   *
   * @param item - The JSX component with data array of object with value and key
   * @returns The JSX Element component
   *
   */
  renderItem?: (item: IData) => JSX.Element;
  /**
   * Render the alphabet letter header.
   *
   * @param section - The section header JSX component
   * @returns The JSX Element component
   *
   */
  renderSectionHeader?: (section: any) => JSX.Element;
  onLoadMoreItems?: () => void;
  /**
   * Returns the each item height position size.
   *
   * @param sectionIndex - The section index position.
   * @param rowIndex - The header row index position.
   * @returns Returns the each item height position size.
   *
   */
  getItemHeight?: ({ sectionIndex, rowIndex }: { sectionIndex: number; rowIndex: number }) => number;
  /** The section header defines each alphabet title header size. */
  sectionHeaderHeight?: number;
  /** The alphabet letter font-size. */
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
