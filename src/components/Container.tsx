import React from 'react';
import { Layout, LayoutProps } from '@ui-kitten/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

interface ContainerProps extends LayoutProps {
  useSafeArea?: boolean;
  backgroundColor?: string;
  padded: boolean;
  scroll: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  backgroundColor,
  padded = true,
  scroll = true,
  light,
  statusBarBgColor,
  ...props
}) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Layout
      {...props}
      style={{
        flex: 1,
        paddingTop: padded ? insets.top : 0,
        paddingLeft: padded ? insets.left + 16 : 0,
        paddingRight: padded ? insets.right + 16 : 0,
        paddingBottom: padded ? insets.bottom + 6 : 0,
        backgroundColor: backgroundColor || '#FFFFFF',
      }}>
      <StatusBar
        hidden={false}
        style={light ? 'light' : 'dark'}
        // translucent={true}
        // barStyle={'light-content'}
        backgroundColor={statusBarBgColor || '#FFFFFF'}
      />
      {children}
    </Layout>
  );
};

export default Container;
