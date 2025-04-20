import {StyleSheet} from 'react-native';
import {ButtonProps} from './types';
import {colors as themeColors} from '../../theme/colors';
import Metrics from '../../theme/metrics.ts';
import Typography from '../../theme/typography.ts';

export function ButtonStyles(
    colors: typeof themeColors.light,
    props: Pick<
        ButtonProps,
        'textColor' | 'bgColor' | 'isOutlined' | 'isTextCentered' | 'disabled' | 'isBorder'
    >,
) {
    const {textColor, bgColor, isOutlined, isTextCentered, disabled, isBorder} = props;

    return StyleSheet.create({
        button: {
            flexDirection: 'row',
            alignItems: 'center',
            height: Metrics.verticalScale(50),
            justifyContent: isTextCentered ? 'center' : 'flex-start',
            //paddingVertical: Metrics.verticalScale(10),
            paddingHorizontal: Metrics.scale(20),
            backgroundColor: isOutlined ? 'transparent' : bgColor || '#007BFF',
            borderRadius: Metrics.scale(10),
            borderWidth: isOutlined || isBorder ? 1 : 0,
            borderColor: isOutlined || isBorder ? textColor || colors.borderColor : 'transparent',
            opacity: disabled ? 0.5 : 1,
        },
        title: {
            color: textColor ?? isBorder ? colors.text : colors.white,
            fontSize: Metrics.moderateScale(16),
            fontFamily: Typography.SEMI_BOLD,
            lineHeight: Metrics.scale(24),
            fontWeight: '500',
        },
    });
}
