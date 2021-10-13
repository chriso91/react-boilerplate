import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

/* eslint-disable */
export const useAppDispatch = () => useDispatch<AppDispatch>();
/* eslint-enable */

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
