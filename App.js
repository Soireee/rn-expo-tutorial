// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import BodyText from './src/elements/BodyText';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>Memo</Text>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2020/09/09</Text>
        </View>

      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2020/09/09</Text>
        </View>

      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2020/09/09</Text>
        </View>

      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2020/09/09</Text>
        </View>

      </View>
      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddText}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3.9,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  }, 
  memoDate: {
    fontSize: 12,
    color: '#2a2a2a',
  }, 
  memoList: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  memoAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 38,
    height: 38,
    backgroundColor: '#F31678',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  memoAddText: {
    position: 'absolute',
    lineHeight: 24,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
