import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, useTheme, Input, Select } from '@ui-kitten/components';
import {
  Container,
  TopNavigationComponent,
  Text,
  TitleComponent,
  Button,
  Label,
} from './../../components';
import { ms, vs, s, mvs } from 'react-native-size-matters';

const EnterBillDetail = ({ navigation }) => {
  const theme = useTheme();

  const onSchedulePayment = () => navigation.navigate('SchedulePayment');
  return (
    <Container padded={false} scroll>
      <TopNavigationComponent
        title="Create a custom bill"
        textProps={{
          lineHeight: 'line17',
          fontSize: 'size13',
          fontWeight: 'bold',
        }}
        showNotification={false}
        // hideBack={true}
      />

      <TitleComponent title={'Enter bill details'} />

      <View
        style={[
          styles.registerContent,
          { backgroundColor: theme['color-basic-100'] },
        ]}>
        <View style={styles.pbInput}>
          <Label text="Bill name" theme={theme} />
          <Input
            placeholder="Enter Bill name"
            style={[
              {
                backgroundColor: theme['color-basic-100'],
                ...styles.input,
              },
            ]}
          />
        </View>

        <View style={styles.pbInput}>
          <Label text="Amount Due" theme={theme} />
          <Input
            placeholder="0.00"
            style={[
              {
                backgroundColor: theme['color-basic-100'],
                ...styles.input,
              },
            ]}
          />
        </View>

        <View style={styles.pbInput}>
          <Label text="Select a category*" theme={theme} />
          <Select
            placeholder="Utitlity,grocery, e.t.c"
            style={[
              {
                backgroundColor: theme['color-basic-100'],
                ...styles.input,
              },
            ]}
          />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: ms(20, 0.8),
          paddingBottom: mvs(48),
        }}>
        <Button
          buttonProps={{
            disabled: false,
          }}
          text="Next"
          onPress={onSchedulePayment}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  registerContent: {
    paddingHorizontal: ms(20),
  },
  input: {
    marginTop: ms(6, 0.5),
  },
  pbInput: {
    paddingBottom: vs(24),
  },
});

export default EnterBillDetail;
