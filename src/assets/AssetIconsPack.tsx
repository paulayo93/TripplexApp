import React from 'react';
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import { IconPack, IconProvider } from '@ui-kitten/components';
import { SvgProps } from 'react-native-svg';
import { Icons } from './icons';
import { Images } from './images';
import { scale } from 'react-native-size-matters';

const createIcon = (source: ImageSourcePropType): IconProvider<ImageProps> => {
  return {
    toReactElement: props => (
      <Image
        style={styles.icon}
        {...props}
        source={source}
        resizeMode="cover"
      />
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    width: scale(24),
    height: scale(24),
  },
});

const AssetIconsPack: IconPack<ImageProps | SvgProps> = {
  name: 'assets',
  icons: {
    leftArrow: createIcon(Icons.leftArrow),
    bell: createIcon(Icons.bell),
    greenwhitebulb: createIcon(Icons.greenwhitebulb),
    tvorange: createIcon(Icons.tvorange),
    tvblue: createIcon(Icons.tvblue),
    chevronforward: createIcon(Icons.chevronforward),
    locker: createIcon(Icons.locker),
    wallet: createIcon(Icons.wallet),
    bookmarkblue: createIcon(Icons.bookmarkblue),
    unpaidstatus: createIcon(Icons.unpaidstatus),
    paymentaccount: createIcon(Icons.paymentaccount),
    verticalline: createIcon(Icons.verticalline),
    chevrondown: createIcon(Icons.chevrondown),
    phonecode: createIcon(Icons.phonecode),
    signin: createIcon(Icons.signin),
    personal: createIcon(Icons.personal),
    addcircle: createIcon(Icons.addcircle),
    input: createIcon(Icons.input),
    nobill: createIcon(Icons.nobill),
  },
};
export default AssetIconsPack;
