import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

import { RootState } from "@io/redux/Store";

export const API_REDUCER_KEY = "AppApi";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.EXPO_PUBLIC_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).auth;

    headers.set("Authorization", `Bearer ${token}`);

    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions = {}
) => {
  const result: any = await baseQuery(args, api, extraOptions);

  try {
    // overhead error handler
  } catch {}

  return result;
};

export const AppApi = createApi({
  reducerPath: API_REDUCER_KEY,
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
  tagTypes: [],
});
