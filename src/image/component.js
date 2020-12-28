import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {
    isUrl,
    isPath,
} from '@propus/utility';
import {When} from '@propus/control';

const Image = ({content}) => (
    <When condition={isUrl(content) || isPath(content)}>
        <meta property="og:image" content={content}/>
        <meta name="twitter:image" content={content}/>
    </When>
);

Image.propTypes = {
    content: PropTypes.any,
};

Image.defaultProps = {
    content: null,
};

export default memo(Image);
