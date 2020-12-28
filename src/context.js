import {createContext} from '@propus/core';

const callback = ({textFormatter = value => value}) =>
    ({textFormatter});

export const [
    MetaProvider,
    withMeta,
    useMetaContext,
] = createContext('meta', callback);
