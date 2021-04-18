import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import {When} from '@propus/control';
import {withMeta} from './MetaContext';

const Description = ({format, content}) => {
    const text = useMemo(() => format(content), [content]);
    return (
        <When condition={text}>
            <meta name="description" content={text}/>
            <meta property="og:description" content={text}/>
            <meta name="twitter:description" content={text}/>
        </When>
    )
};

Description.propTypes = {
    format: PropTypes.func.isRequired,
    content: PropTypes.any,
};

Description.defaultProps = {
    content: null,
};

export default memo(withMeta(Description));
