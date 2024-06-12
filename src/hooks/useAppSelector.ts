import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import type { RootState } from '@io/redux/Store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
