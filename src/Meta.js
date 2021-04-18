import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {Canonical} from './canonical';
import {Description} from './description';
import {Image} from './image';
import {Keywords} from './keywords';
import {Name} from './name';
import {Title} from './title';


const Meta = ({children, component: Component, ...props}) => (
    <Component {...props}>
        {children}
    </Component>
);

Meta.propTypes = {
    children: PropTypes.node,
    component: PropTypes.any,
};

Meta.defaultProps = {
    children: null,
    component: Helmet,
};

const MemoizedMeta = memo(Meta);
MemoizedMeta.Canonical = Canonical;
MemoizedMeta.Description = Description;
MemoizedMeta.Image = Image;
MemoizedMeta.Keywords = Keywords;
MemoizedMeta.Name = Name;
MemoizedMeta.Title = Title;

export default MemoizedMeta;
