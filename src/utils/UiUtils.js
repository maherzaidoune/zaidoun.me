import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const memoize = require('lodash/memoize');
const isEqual = require('react-fast-compare');
