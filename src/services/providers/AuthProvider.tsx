import * as React from "react";
import { router, useRootNavigationState, useSegments } from "expo-router";
import { useAppSelector } from "@io/hooks";
import { ActivityIndicator, View } from "react-native";
import { useEffect, useState } from "react";

const contextInitialState: ContextInterface = {};

interface ContextInterface {}

const AuthContext = React.createContext<ContextInterface>(contextInitialState);

// Hook to access auth context
export function useAuth(): ContextInterface {
  const context = React.useContext<ContextInterface>(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a Provider");
  }

  return context;
}

// Hook to protect routes based on user authentication
function useProtectedRoute(isLoggedIn: boolean) {
  const segments = useSegments();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!isLoggedIn && !inAuthGroup) {
      router.replace("/(auth)");
    } else if (isLoggedIn && inAuthGroup) {
      router.replace("/(tabs)");
    }
  }, [isLoggedIn, navigationState]);
}

export function AuthProvider({ children }: React.PropsWithChildren) {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  useProtectedRoute(isLoggedIn);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
