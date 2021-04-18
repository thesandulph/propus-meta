import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import {When} from '@propus/control';
import {useMetaContext} from '../context';

const Name = ({content}) => {
    const {meta} = useMetaContext();
    const text = useMemo(() => meta.textFormatter(content), [content]);
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
    content: PropTypes.any,
};

Name.defaultProps = {
    content: null,
};

export default memo(Name);
