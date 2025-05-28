import { Redirect } from "expo-router";
import { useAuthStore } from "@io/store";

const Home = () => {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);

  return isLoggedIn ? <Redirect href="/(tabs)" /> : <Redirect href="/(auth)" />;
};

export default Home;
