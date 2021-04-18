import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Icon = ({content}) => null;

Icon.propTypes = {
    content: PropTypes.any,
};

Icon.defaultProps = {
    content: null,
};

export default memo(Icon);
