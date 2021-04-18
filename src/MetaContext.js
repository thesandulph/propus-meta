import {createContext} from '@propus/core';

const callback = ({format = value => value}) => ({format});

export const [
    MetaProvider,
    withMeta,
    useMetaContext,
] = createContext('meta', callback);
