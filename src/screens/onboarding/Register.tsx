import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Layout, Icon, useTheme, Input } from '@ui-kitten/components';
import { Text, Container, Button, Label } from './../../components';
import { scale, ms, vs, ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/tripplex.reducer';

const TitleComponent = ({ title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="size22" lineHeight="line35">
        {title}
      </Text>
      <Text
        lineHeight="line15"
        style={{ width: 229, letterSpacing: 0.32, marginTop: 16 }}
        color="#0F172A">
        {subTitle}
      </Text>
    </View>
  );
};

const InputBottomText = ({ text }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6,
      }}>
      <View>
        <Text fontSize="size10">
          Make your password even stronger by including more thank 10
          characters, number, symobls, upper and lowercase letter{' '}
        </Text>
      </View>
    </View>
  );
};

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.tripplex.isLoggedIn);
  const theme = useTheme();

  return (
    <Container backgroundColor="#F8FAFC" scroll={false}>
      <TitleComponent
        title="Create your account"
        subTitle={
          'Start your journey into a new way of living. Share a little about you'
        }
      />

      <View
        style={[
          styles.registerContent,
          { backgroundColor: theme['color-basic-100'] },
        ]}>
        <View style={styles.pbInput}>
          <Label text="Full name" theme={theme} />
          <Input
            placeholder="Full name*"
            style={[
              {
                backgroundColor: theme['color-basic-100'],
                ...styles.input,
              },
            ]}
          />
        </View>

        <View style={styles.pbInput}>
          <Label text="Email address" theme={theme} />
          <Input
            placeholder="@gmail.com*"
            style={[
              {
                backgroundColor: theme['color-basic-100'],
                ...styles.input,
              },
            ]}
          />
        </View>

        <View style={styles.pbInput}>
          <Label text="Phone Number" theme={theme} />
          <Input
            placeholder="Phone number"
            style={[
              {
                backgroundColor: theme['color-basic-100'],
                ...styles.input,
              },
            ]}
          />
        </View>

        <View style={styles.pbInput}>
          <Label text="Create password" theme={theme} />
          <Input
            placeholder="Password (8+ characters)*"
            style={[
              {
                backgroundColor: theme['color-basic-100'],
                ...styles.input,
              },
            ]}
          />
          <InputBottomText />

          <View style={{ marginTop: ms(24, 2) }}>
            <Button
              text="Create account"
              buttonProps={{
                disabled: false,
              }}
              textProps={{
                fontWeight: 'bold',
                style: {
                  fontSize: 20,
                  fontWeight: 'bold',
                  letterSpacing: 10,
                  lineHeight: 14,
                  fontFamily: 'OpenSans_700Bold',
                },
              }}
              onPress={() => dispatch(login({ isLoggedIn }))}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => null}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: ms(20),
          }}>
          <Text lineHeight="line20" fontSize="size16">
            Got an account?
          </Text>
          <Text
            style={{ fontFamily: 'OpenSans_700Bold', marginLeft: ms(2) }}
            color="#1A75FD"
            fontSize="size16"
            lineHeight="line20"
            fontWeight="bold">
            Sign in
          </Text>
        </View>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 4,
  },
  registerContent: {
    minWidth: 338,
    minHeight: 528,
    borderRadius: ms(20),
    borderWidth: 0,
    paddingHorizontal: ms(15),
    marginTop: ms(24),
    paddingVertical: ms(30),
  },
  input: {
    marginTop: ms(6, 0.5),
  },
  pbInput: {
    paddingBottom: vs(24),
  },
});
export default Register;
