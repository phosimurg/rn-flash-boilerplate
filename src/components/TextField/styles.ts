import {StyleSheet} from 'react-native';
import Metrics from '../../theme/metrics.ts';
import Typography from '../../theme/typography.ts';

const styles = (colors: any, multiline: boolean) => {
    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            ...(!multiline && {alignItems: 'flex-start'}),
            borderWidth: 1,
            borderColor: colors.borderColor,
            borderRadius: Metrics.scale(10),
            paddingHorizontal: Metrics.scale(20),
            backgroundColor: colors.inputBackground,
            ...(multiline && {minHeight: Metrics.verticalScale(70)}),
        },
        isFocused: {
            borderColor: colors.white,
            backgroundColor: colors.borderColor,
        },
        input: {
            flex: 1,
            fontFamily: Typography.MEDIUM,
            fontSize: Metrics.scale(14),
            color: colors.text,
            paddingVertical: Metrics.verticalScale(15),
            textAlignVertical: multiline ? 'top' : 'center',
        },
        description: {
            paddingLeft: Metrics.scale(29),
            color: colors.title,
            fontFamily: Typography.REGULAR,
            marginTop: Metrics.verticalScale(12),
            fontSize: Metrics.scale(12),
        },
        errorLine: {
            borderColor: colors.danger,
        },
        errorDescription: {
            color: colors.danger,
        },
        label: {
            fontFamily: Typography.MEDIUM,
            width: '100%',
            marginBottom: Metrics.verticalScale(10),
            color: colors.text,
        },
        leftIcon: {
            width: Metrics.scale(15),
            marginLeft: Metrics.scale(-5),
        },
    });
};
export default styles;
