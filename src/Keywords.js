import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import {When} from '@propus/control';
import {toArray} from '@propus/utility';
import {withMeta} from './MetaContext';

const Keywords = ({format, content}) => {
    const text = useMemo(() => toArray(content).map(item => format(item)).join(', '), [content]);
    return (
        <When condition={text}>
            <meta name="keywords" content={text}/>
        </When>
    )
};

Keywords.propTypes = {
    format: PropTypes.func.isRequired,
    content: PropTypes.any,
};

Keywords.defaultProps = {
    content: '',
};

export default memo(withMeta(Keywords));
