import PropTypes from 'prop-types';
import { propTypes, defaultProps } from '../src/props';

test('propTypes are properly defined', () => {
  expect(propTypes).toEqual({
    containerId: PropTypes.string.isRequired,
  });
});

test('defaultProps are properly defined', () => {
  expect(defaultProps).toEqual({});
});
