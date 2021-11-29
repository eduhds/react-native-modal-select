import { ReactNode, ReactElement } from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

type ItemValue = string | number | any | undefined;

export type RNModalSelectItem = {
  key: string | number;
  value: ItemValue;
  label: string;
  image?: string | ReactNode;
};

export type RNModalSelectProps = {
  data: Array<RNModalSelectItem>;
  value: ItemValue;
  placeholder: string;
  onSelect: (value: ItemValue) => void;
  IconRight?: ReactNode;
  renderComponent: () => ReactNode;
  title?: string;
  cancelText?: string;
  placeholderTextColor?: string;
  disabled: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  modalContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  cancelButtonStyle?: StyleProp<ViewStyle>;
  cancelTextStyle?: StyleProp<TextStyle>;
  listContainerStyle?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  itemImageStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
};

function RNModalSelect(props: RNModalSelectProps): ReactElement;

export default RNModalSelect;
