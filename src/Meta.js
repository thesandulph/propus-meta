import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import Canonical from './canonical';
import Description from './description';
import Image from './image';
import Keywords from './keywords';
import Name from './name';
import Title from './title';

const PureMeta = ({component: Component, ...props}) => (
    <Component {...props} />
);

PureMeta.propTypes = {
    component: PropTypes.any,
};

PureMeta.defaultProps = {
    component: Helmet,
};

const Meta = memo(Meta);
Meta.render = Helmet.renderStatic;
Meta.Canonical = Canonical;
Meta.Description = Description;
Meta.Image = Image;
Meta.Keywords = Keywords;
Meta.Name = Name;
Meta.Title = Title;

export default Meta;
