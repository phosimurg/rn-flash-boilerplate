import React from 'react';
import {View} from 'react-native';
import {ISizedBoxProps} from './types.ts';
import Metrics from '../../theme/metrics.ts';

const SizedBox: React.FC<ISizedBoxProps> = ({
                                                height = Metrics.verticalScale(12),
                                                width = Metrics.scale(12),
                                            }) => {
    return <View style={{height: height, width: width}}/>;
};

export default SizedBox;
