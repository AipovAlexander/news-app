import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppState, AppDispatch } from '.'

export const useAppState: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();