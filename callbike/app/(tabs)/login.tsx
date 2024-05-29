// import React from 'react';
// import App from '@/components/loginScreen';

// import { Provider } from 'react-redux';

// import store from '@/components/loginScreen/store';

// export default function LoginScreen() {
//   return (
//     <Provider store={store}>
//     <App />
//     </Provider>
//   );
// }



// import React, { useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { checkAuthStatus } from '@/components/loginScreen/actions/authSlice'; 
// import HomePage from '../../components/home';
// import App from '../../components/loginScreen';

// const LoginTab = () => {
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(checkAuthStatus());
//   }, [dispatch]);

//   return (
//     <View style={styles.container}>
//       {isAuthenticated ? <HomePage /> : <App />}
//     </View>
//   );
// }
// export default LoginTab;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });



// import React, { useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { checkAuthStatus } from '@/components/loginScreen/actions/authSlice'; 
// import HomePage from '../../components/home';
// import App from '../../components/loginScreen';

// interface RootState {
//     auth: {
//       isAuthenticated: boolean;
//     };
// }

// const LoginTab = () => {
//   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated); // Sử dụng RootState thay vì RootStateOrAny hoặc any
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(checkAuthStatus());
//   }, [dispatch]);

//   return (
//     <View style={styles.container}>
//       {isAuthenticated ? <HomePage /> : <App />}
//     </View>
//   );
// }
// export default LoginTab;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


// import React from 'react';

// import { Provider } from 'react-redux';
// import store from '@/components/loginScreen/store';
// import LoginTab from '@/components/loginScreen';

// export default function LoginScreen() {
//   return (
//     <Provider store={store}>
//     <LoginTab />
//     </Provider>
//   );
// }

//login.tsx
// import React from 'react';
// import LoginTab from '@/components/loginScreen';

// const LoginScreen = () => {
//   return <LoginTab />;
// };

// export default LoginScreen;

import React from 'react';
import HomePage from '@/components/home';

const LoginScreen = () => {
  return <HomePage navigation={undefined}/>;
};

export default LoginScreen;

