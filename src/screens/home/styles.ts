import {StyleSheet} from 'react-native';
import {colors as themeColors} from '../../theme/colors';
import metrics from '../../theme/metrics';
import typography from '../../theme/Typography.ts';

export const createStyles = (colors: typeof themeColors.light) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    title: {
      color: colors.text,
      fontSize: metrics.moderateScale(32),
      fontFamily: typography.REGULAR,
    },
    text: {
      color: colors.text,
      fontSize: metrics.moderateScale(16),
      fontFamily: typography.REGULAR,
    },
    buttonContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
};
