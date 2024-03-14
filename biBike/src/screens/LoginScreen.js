// LoginScreen.js

import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Đăng nhập vào ứng dụng</Text>
        <TextInput
          placeholder="Tên đăng nhập"
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, margin: 10 }}
        />
        <TextInput
          placeholder="Mật khẩu"
          secureTextEntry={true}
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, margin: 10 }}
        />
        <Button
          title="Đăng nhập"
          onPress={() => {
            // Xử lý đăng nhập ở đây
          }}
        />
      </View>
    );

    // return (
    //     <View flex paddingH-25 paddingT-120>
    //       <Text blue50 text20>Welcome</Text>
    //       <TextField text50 placeholder="username" grey10/>
    //       <TextField text50 placeholder="password" secureTextEntry grey10/>
    //       <View marginT-100 center>
    //         <Button text70 white background-orange30 label="Login"/>
    //         <Button link text70 orange30 label="Sign Up" marginT-20 onPress={() => alert("Sign Up pressed!")}/>
    //       </View>
    //     </View>
    // );
  }
}
