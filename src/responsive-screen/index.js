import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {defaultStyles, orientationStyles, sizeStyles} from './styles';

class ResponsiveScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: this.getOrientation(),
      screenSize: this.getScreenSize(),
    };
  }
  componentDidMount() {
    console.log('Will mount');
    Dimensions.addEventListener('change', this.setScreen);
  }

  componentWillUnmount() {
    console.log('Will unmount');
    Dimensions.removeEventListener('change');
  }

  getOrientation = () => {
    const {width, height} = Dimensions.get('window');
    if (width > height) {
      return 'LANDSCAPE';
    }
    return 'PORTRAIT';
  };

  getScreenSize = () => {
    const {width} = Dimensions.get('window');
    // Boostrap breakpoints (https://getbootstrap.com/docs/4.3/layout/overview/)
    // Extra small devices (portrait phones, less than 576px)
    if (width < 576) {
      return 'xs';
    }
    // Small devices (landscape phones, less than 768px)
    if (width < 768) {
      return 'sm';
    }
    if (width < 992) {
      return 'md';
    }
    if (width < 1200) {
      return 'lg';
    }
    return 'xl';
  };

  setScreen = () => {
    console.log('Orientation changed');
    this.setState({
      orientation: this.getOrientation(),
      screenSize: this.getScreenSize(),
    });
  };
  render() {
    const {orientation, screenSize} = this.state;
    console.log('Dimensions:', orientation, screenSize);
    const orientationStyle = orientationStyles[orientation];
    const sizeStyle = sizeStyles[screenSize];
    const boxContainerStyle = StyleSheet.flatten([
      defaultStyles.boxContainer,
      orientationStyle.boxContainer,
    ]);
    const boxStyle = StyleSheet.flatten([defaultStyles.box, sizeStyle.box]);
    const boxContentStyle = StyleSheet.flatten([
      defaultStyles.boxContent,
      sizeStyle.boxContent,
    ]);
    return (
      <View>
        <Text style={defaultStyles.orientation}>{orientation}</Text>
        <View style={boxContainerStyle}>
          <View style={boxStyle}>
            <View style={boxContentStyle}>
              <Text>A</Text>
            </View>
          </View>
          <View style={boxStyle}>
            <View style={boxContentStyle}>
              <Text>A</Text>
            </View>
          </View>
          <View style={boxStyle}>
            <View style={boxContentStyle}>
              <Text>A</Text>
            </View>
          </View>
          <View style={boxStyle}>
            <View style={boxContentStyle}>
              <Text>A</Text>
            </View>
          </View>
          <View style={boxStyle}>
            <View style={boxContentStyle}>
              <Text>A</Text>
            </View>
          </View>
          <View style={boxStyle}>
            <View style={boxContentStyle}>
              <Text>A</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ResponsiveScreen;
