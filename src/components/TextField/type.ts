export interface ITextFieldProps {
  placeholder?: string;
  placeholderTextColor?: string;
  description?: string;
  hasError?: boolean;
  secureText?: boolean;
  value: string;
  setValue: any;
  label?: string;
  leftIcon?: string;
  containerStyle?: any;
  inputStyle?: any;
  customRightItem?: any;
  ref?: any;
  onPress?: any;
  editable?: any;
  autoFocus?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  maxLength?: number;
  specialVariant?: boolean;
  keyboardType?: string;
  multiline?: boolean;
  numberOfLines?: number;
}
