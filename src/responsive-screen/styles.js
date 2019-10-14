import {StyleSheet} from 'react-native';

export const orientationStyles = {
  LANDSCAPE: StyleSheet.create({
    boxContainer: {
      backgroundColor: '#9F9',
    },
  }),
  PORTRAIT: StyleSheet.create({
    boxContainer: {
      backgroundColor: '#99F',
    },
  }),
};

export const defaultStyles = StyleSheet.create({
  boxContainer: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boxContent: {
    borderRadius: 4,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  orientation: {
    fontSize: 24,
    padding: 16,
    textAlign: 'center',
  },
});

export const sizeStyles = {
  xs: StyleSheet.create({
    box: {
      width: '100%',
    },
    boxContent: {
      backgroundColor: '#FF9',
    },
  }),
  sm: StyleSheet.create({
    box: {
      width: '50%',
    },
    boxContent: {
      backgroundColor: '#F9F',
    },
  }),
  md: StyleSheet.create({
    box: {
      width: '33%',
    },
    boxContent: {
      backgroundColor: '#9FF',
    },
  }),
  lg: StyleSheet.create({
    box: {
      width: '25%',
    },
    boxContent: {
      backgroundColor: '#F99',
    },
  }),
  xl: StyleSheet.create({
    box: {
      width: '25%',
    },
    boxContent: {
      backgroundColor: '#999',
    },
  }),
};
