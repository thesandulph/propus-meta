import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import {When} from '@propus/control';
import {toArray} from '@propus/utility';
import {useMetaContext} from '../context';

const Keywords = ({content}) => {
    const {meta} = useMetaContext();
    const text = useMemo(() => toArray(content).map(item => meta.textFormatter(item)).join(', '), [content]);
    return (
        <When condition={text}>
            <meta name="keywords" content={text}/>
        </When>
    )
};

Keywords.propTypes = {
    content: PropTypes.any,
};

Keywords.defaultProps = {
    content: null,
};

export default memo(Keywords, (prevProps, nextProps) => {
    return prevProps.content === nextProps.content;
});
