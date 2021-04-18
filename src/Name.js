import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import {When} from '@propus/control';
import {withMeta} from './MetaContext';

const Name = ({format, content}) => {
    const text = useMemo(() => format(content), [content]);
    return (
        <When condition={text}>
            <meta name="twitter:site" content={text} />
            <meta property="og:site_name" content={text}/>
            <meta property="application-name" content={text}/>
            <meta name="apple-mobile-web-app-title" content={text} />
        </When>
    )
};

Name.propTypes = {
    format: PropTypes.func.isRequired,
    content: PropTypes.any,
};

Name.defaultProps = {
    content: null,
};

export default memo(withMeta(Name));
