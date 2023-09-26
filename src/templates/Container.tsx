import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native';

export const Container: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </SafeAreaView>
  );
};
