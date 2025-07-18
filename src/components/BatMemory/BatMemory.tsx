import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './BatMemoryStyles';

interface BatMemoryProps {
  text: string
}

export function BatMemory(props: BatMemoryProps) {
  return (
    <>
        <TextInput 
            placeholder="Memory" 
            multiline={true}
            value={props.text}
            style={styles.input}
        />
    </>
  );
}