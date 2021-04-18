import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {isUrl} from '@propus/utility';
import {When} from '@propus/control';

const Canonical = ({content}) => (
    <When condition={isUrl(content)}>
        <link rel="canonical" href={content} />
        <meta property="og:url" content={content}/>
        <meta name="twitter:url" content={content}/>
    </When>
);

Canonical.propTypes = {
    content: PropTypes.any,
};

Canonical.defaultProps = {
    content: null,
};

export default memo(Canonical);
