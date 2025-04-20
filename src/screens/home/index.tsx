import {Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../theme/ThemeProvider.tsx';
import {createStyles} from './styles.ts';
import {useTranslation} from 'react-i18next';
import Button from '../../components/Button/Button.tsx';
import SizedBox from '../../components/SizedBox';
import metrics from '../../theme/metrics.ts';

const HomeScreen = () => {
  const {colors, toggleTheme, theme} = useTheme();
  const styles = createStyles(colors);
  const {t, i18n} = useTranslation();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>⚡</Text>
        <SizedBox />
        <Text style={styles.title}>{t('hello')}</Text>
        <SizedBox />
        <Text style={styles.text}>{t('home.welcome')}</Text>
        <SizedBox height={metrics.verticalScale(50)} />
        <View style={styles.buttonContainer}>
          <Button
            title={i18n.language}
            onPress={() =>
              i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')
            }
          />
          <SizedBox width={metrics.scale(20)} />
          <Button
            icon={theme === 'dark' ? 'moon-outline' : 'sunny-outline'}
            iconSize={metrics.moderateScale(20)}
            bgColor={colors.primary}
            title={t('home.changeTheme')}
            onPress={() => toggleTheme()}
          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
