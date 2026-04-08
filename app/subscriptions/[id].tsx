import { Link, useLocalSearchParams } from "expo-router";
import { styled } from "nativewind";
import { usePostHog } from "posthog-react-native";
import { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function SubscriptionDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture("subscription_details_viewed", {
      subscription_id: id,
    });
  }, [id, posthog]);

  return (
    <SafeAreaView>
      <Text>Subscription Details: {id}</Text>
      <Link href={"/"}>Go back</Link>
    </SafeAreaView>
  );
}
