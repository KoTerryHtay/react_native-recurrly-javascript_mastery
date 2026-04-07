import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";

export default function RootLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  // Wait for auth to load before rendering anything
  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href={"/(tabs)"} />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
