import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import {When} from '@propus/control';
import {useMetaContext} from '../context';

const Title = ({content}) => {
    const {meta} = useMetaContext();
    const text = useMemo(() => meta.textFormatter(content), [content]);
    return (
        <When condition={text}>
            <title>{text}</title>
            <meta property="og:title" content={text}/>
            <meta name="twitter:title" content={text}/>
        </When>
    )
};

Title.propTypes = {
    content: PropTypes.any,
};

Title.defaultProps = {
    content: null,
};

export default memo(Title);
