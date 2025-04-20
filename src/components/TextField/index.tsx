import React, {useMemo, forwardRef} from 'react';
import {Text, TextInput, View, TextInputProps} from 'react-native';
import {ITextFieldProps} from './type';
import createStyles from './styles';
import {useTheme} from '../../theme/ThemeProvider';
import Metrics from '../../theme/metrics';

const TextField = forwardRef<TextInput, ITextFieldProps>(({
                                                              value,
                                                              setValue,
                                                              placeholder,
                                                              placeholderTextColor,
                                                              description,
                                                              hasError,
                                                              secureText = false,
                                                              label,
                                                              leftIcon,
                                                              containerStyle,
                                                              inputStyle,
                                                              customRightItem,
                                                              editable,
                                                              autoFocus,
                                                              autoCapitalize = 'sentences',
                                                              maxLength,
                                                              keyboardType = 'default',
                                                              multiline,
                                                              numberOfLines,
                                                          }, ref) => {
    const {colors} = useTheme();
    const styles = useMemo(() => createStyles(colors, !!multiline), [colors, multiline]);

    return (
        <>
            {label && <Text style={styles.label}>{label}</Text>}
            <View
                style={[
                    styles.container,
                    containerStyle,
                    hasError && styles.errorLine,
                ]}
            >
                <TextInput
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    maxLength={maxLength ? maxLength : multiline ? 200 : undefined}
                    autoFocus={autoFocus}
                    ref={ref}
                    keyboardType={keyboardType as TextInputProps['keyboardType']}
                    editable={editable}
                    value={value}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text: string) => {
                        setValue(text);
                    }}
                    secureTextEntry={secureText}
                    style={[
                        styles.input,
                        leftIcon && {paddingLeft: Metrics.scale(20)},
                        inputStyle,
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor || colors.ghost}
                />
                {customRightItem}
            </View>
            {description && (
                <Text style={[styles.description, hasError && styles.errorDescription]}>
                    {description}
                </Text>
            )}
        </>
    );
});

export default TextField;
