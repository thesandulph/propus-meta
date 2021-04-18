import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import {When} from '@propus/control';
import {useMetaContext} from '../MetaContext';

const Description = ({content}) => {
    const {meta} = useMetaContext();
    const text = useMemo(() => meta.textFormatter(content), [content]);
    return (
        <When condition={text}>
            <meta name="description" content={text}/>
            <meta property="og:description" content={text}/>
            <meta name="twitter:description" content={text}/>
        </When>
    )
};

Description.propTypes = {
    content: PropTypes.any,
};

Description.defaultProps = {
    content: null,
};

export default memo(Description);
