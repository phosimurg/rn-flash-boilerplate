import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ButtonStyles} from './styles';
import {ButtonProps} from './types';
import {useTheme} from '../../theme/ThemeProvider.tsx';
import Icon from 'react-native-vector-icons/Ionicons';
import Metrics from '../../theme/metrics.ts';
import SizedBox from '../SizedBox';

const Button = ({
                    title,
                    textColor,
                    bgColor,
                    isOutlined,
                    isTextCentered,
                    disabled,
                    onPress,
                    style,
                    icon,
                    iconSize,
                    iconColor,
                    isBorder,
                }: ButtonProps) => {
    const {colors} = useTheme();
    const styles = ButtonStyles(colors, {
        textColor,
        bgColor,
        isOutlined,
        isTextCentered,
        disabled,
        isBorder,
    });

    return (
        <TouchableOpacity
            style={{...styles.button, ...style}}
            onPress={onPress}
            disabled={disabled}>
            <Text style={styles.title}>{title}</Text>
            {icon ? <>
                <SizedBox width={Metrics.scale(5)}/>
                <Icon name={icon} size={iconSize} color={iconColor ?? textColor ?? colors.white}/>
            </> : null}
        </TouchableOpacity>
    );
};

export default Button;
