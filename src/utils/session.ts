import store from 'store2';
import config from '../config';
import { IEntity } from '../modules/auth/types';

export const getSession = (): IEntity.UserKey => store.get(config.api.tokensKEY) || {};

export const clearSession = () => store.remove(config.api.tokensKEY);

export const setSession = (tokens: IEntity.UserKey) => store.set(config.api.tokensKEY, tokens);