import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Favicon = ({content}) => null;

Favicon.propTypes = {
    content: PropTypes.any,
};

Favicon.defaultProps = {
    content: null,
};

export default memo(Favicon);
