import { Redirect } from "expo-router";
import { useAppSelector } from "@io/hooks";

const Home = () => {
  const { isLoggedIn } = useAppSelector(state => state.auth);

  return isLoggedIn ? <Redirect href="/(tabs)" /> : <Redirect href="/(auth)" />;
};

export default Home;
