import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import {
    isUrl,
    isPath,
} from '@propus/utility';
import {When} from '@propus/control';

const Image = ({content}) => {
    const valid = useMemo(() => isUrl(content) || isPath(content), [content]);
    return (
        <When condition={valid}>
            <meta property="og:image" content={content}/>
            <meta name="twitter:image" content={content}/>
        </When>
    );
};

Image.propTypes = {
    content: PropTypes.any,
};

Image.defaultProps = {
    content: null,
};

export default memo(Image);
