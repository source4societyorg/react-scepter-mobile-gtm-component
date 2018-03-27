# react-scepter-mobile-gtm-component

A simple Google Tag Manager component for react-native

[![scepter-logo](http://res.cloudinary.com/source-4-society/image/upload/v1519221119/scepter_hzpcqt.png)](https://github.com/source4societyorg/SCEPTER-core)

[![redux-logo](https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png)](https://github.com/reactjs/redux)

[![react-boilerplate](https://github.com/react-boilerplate/brand/blob/master/assets/logo.png)](https://gihub.com/react-boilerplate)

[![airbnb-codestyle](https://camo.githubusercontent.com/1c5c800fbdabc79cfaca8c90dd47022a5b5c7486/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532307374796c652d616972626e622d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)](https://github.com/airbnb/javascript)

[![Build Status](https://travis-ci.org/source4societyorg/react-scepter-web-gtm-component.svg?branch=master)](https://travis-ci.org/source4societyorg/react-scepter-web-gtm-component)

[![codecov](https://codecov.io/gh/source4societyorg/react-scepter-web-gtm-component/branch/master/graph/badge.svg)](https://codecov.io/gh/source4societyorg/react-scepter-web-gtm-component)

# Installation

    npm install @source4society/react-scepter-web-gtm-component

or

    yarn add @source4society/react-scepter-web-gtm-component

Then you must remember to run `react-native link react-native-google-analytics-bridge` (see [react-native-google-anlytics-bridge](https://github.com/idehub/react-native-google-analytics-bridge) for more information)

# Usage

Add this component to your mobile application to load a GTM container on mount. Example usage:

      <GTMComponent containerId={'GTM-XXXXXXX'} />

where containerId is the ID of your GTM container. You will then be able to make subsequent calls with the static GoogleTagManager object from [react-native-google-analytics-bridge](https://github.com/idehub/react-native-google-analytics-bridge);
