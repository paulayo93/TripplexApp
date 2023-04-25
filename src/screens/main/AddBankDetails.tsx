import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Icon,
  useTheme,
  Input,
  Select,
  SelectItem,
} from '@ui-kitten/components';
import {
  Container,
  TopNavigationComponent,
  Text,
  TitleComponent,
  Button,
  Label,
} from './../../components';
import { ms, vs, s, mvs } from 'react-native-size-matters';
import { StatusBar } from 'expo-status-bar';


const AddBankDetails = ({ navigation }) => {
  const theme = useTheme();

  const ReviewPersonalBill = () => navigation.navigate('ReviewPersonalBill');
  return (
    <Container padded={false} scroll>
      <StatusBar style="dark" />

      <TopNavigationComponent
        title="Bank details"
        textProps={{
          lineHeight: 'line17',
          fontSize: 'size13',
          fontWeight: 'bold',
        }}
        showNotification={false}
        // hideBack={true}
      />

      <TitleComponent title={'Add Bank Details'} />
      <View
        style={[
          styles.registerContent,
          { backgroundColor: theme['color-basic-100'] },
        ]}>
        <View style={styles.pbInput}>
          <Label
            color="#0F172A"
            fontSize="size14"
            lineHeight="line20"
            text="Select bank"
            theme={theme}
          />
          <Select
            placeholder="Select bank name"
            status="basic"
            style={[
              {
                backgroundColor: theme['color-basic-100'],
                ...styles.input,
              },
            ]}>
            <SelectItem title="Monthly" />
          </Select>
        </View>
        <View style={styles.pbInput}>
          <Label
            color="#0F172A"
            fontSize="size14"
            lineHeight="line20"
            text="Account Number"
            theme={theme}
          />
          <Input
            placeholder="10 digit account number here"
            editable={false}
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
          paddingBottom: mvs(48),
          paddingHorizontal: ms(21),
        }}>
        <Button
          textProps={{
            lineHeight: 'line22',
            fontSize: 'size16',
            fontWeight: 'semiBold',
          }}
          text="Continue"
          onPress={() => ReviewPersonalBill()}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    marginTop: vs(31),
  },
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

export default AddBankDetails;
