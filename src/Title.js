import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import {When} from '@propus/control';
import {withMeta} from './MetaContext';

const Title = ({format, content}) => {
    const text = useMemo(() => format(content), [content]);
    return (
        <When condition={text}>
            <title>{text}</title>
            <meta property="og:title" content={text}/>
            <meta name="twitter:title" content={text}/>
        </When>
    )
};

Title.propTypes = {
    format: PropTypes.func.isRequired,
    content: PropTypes.any,
};

Title.defaultProps = {
    content: null,
};

export default memo(withMeta(Title));
