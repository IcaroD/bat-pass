import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';
import { BatMemory } from '../BatMemory/BatMemory';

export function BatButton() {
  const [pass, setPass] = useState('');
  const [text, setText] = useState('');
  const [memory, setMemory] = useState<string[]>([]);

  function handleGenarateButton() {
    const newPass = generatePass();
    setPass(newPass);
    setMemory([...memory, newPass]);
    setText(memory.join('\n') + (memory.length > 0 ? '\n' : '') + newPass);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
  }

  function handleCleanMemoryButton() {
    setMemory([]);
    setPass('');
    setText('');
  }

  return (
    <>
      <BatTextInput pass={pass} />
      <Text style={styles.memory}>Memory:</Text>
      <BatMemory text={text} />

      <Pressable
        onPress={handleGenarateButton}
        style={styles.button}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={handleCopyButton}
        style={styles.button}
      >
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>

      <Pressable
        onPress={handleCleanMemoryButton}
        style={styles.button}
      >
        <Text style={styles.text}>CLEAN</Text>
      </Pressable>
    </>
  );
}