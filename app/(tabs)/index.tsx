import { useSelector } from "react-redux";
import { StoreState } from "../types/StoreState";
import RocketList from "../components/rocketList";

export default function TabOneScreen() {
  const rockets = useSelector((state: StoreState) => state.rockets.data);

  return <RocketList rockets={rockets} />;
}
