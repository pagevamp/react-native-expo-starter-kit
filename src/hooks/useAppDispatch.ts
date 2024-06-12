import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@io/redux/Store';

export const useAppDispatch: () => AppDispatch = useDispatch;
