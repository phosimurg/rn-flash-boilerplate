export type ButtonProps = {
    title: string;
    textColor?: string;
    bgColor?: string;
    isOutlined?: boolean;
    isTextCentered?: boolean;
    disabled?: boolean;
    onPress: (values?: any) => void;
    style?: any;
    icon?: string;
    iconSize?: number;
    iconColor?: string;
    isBorder?: boolean;
};
