import { ReactNode } from "react";
import { PropStyle, ViewStyle, TextStyle } from "react-native";

type ItemValue = string | number | any | undefined;

export type ItemData = {
  key: string | number;
  value: ItemValue;
  label: string;
  image?: string | ReactNode;
};

export type RNModalSelectProps = {
  data: Array<ItemData>;
  value: ItemValue;
  placeholder: string;
  onSelect: (value: ItemValue) => void;
  IconRight?: ReactNode;
  renderComponent: () => ReactNode;
  title?: string;
  cancelText?: string;
  placeholderTextColor?: string;
  disabled: boolean;
  containerStyle?: PropStyle<ViewStyle>;
  inputStyle?: PropStyle<ViewStyle>;
  modalContainerStyle?: PropStyle<ViewStyle>;
  titleStyle?: PropStyle<TextStyle>;
  cancelButtonStyle?: PropStyle<ViewStyle>;
  cancelTextStyle?: PropStyle<TextStyle>;
  listContainerStyle: PropStyle<ViewStyle>;
  itemContainerStyle: PropStyle<ViewStyle>;
  itemImageStyle: PropStyle<ViewStyle>;
  itemTextStyle: PropStyle<TextStyle>;
};

function RNModalSelect(props: RNModalSelectProps): ReactNode;

export default RNModalSelect;
