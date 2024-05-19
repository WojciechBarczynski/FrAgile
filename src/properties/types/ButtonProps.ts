import { GestureResponderEvent } from "react-native";

export interface ButtonProps {
  handleOnClick?: (event: GestureResponderEvent) => void;
  title: string;
  helperText?: string;
  helperTextColor?: string;
  inactive?: boolean;
}
