import React from 'react';
import 'react-native';
import { GoogleTagManager } from 'react-native-google-analytics-bridge';
import { propTypes, defaultProps } from './props';

export class GTMComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    GoogleTagManager.openContainerWithId(this.props.containerId);
  }

  render() { return null; }
}

GTMComponent.propTypes = propTypes;
GTMComponent.defaultProps = defaultProps;
export default GTMComponent;
