import { useParams } from "react-router-dom";
import Tours from "../pages/Tours";
import Activities from "../pages/Activities";
import PointsOfInterest from "../pages/PointsOfInterest";
import NotFound from "../pages/NotFound";

const SubExperience = () => {
  const { sub } = useParams();

  switch (sub) {
    case "excursiones":
      return <Tours />;
    case "actividades":
      return <Activities />;
    case "puntos-de-interes":
      return <PointsOfInterest />;
    default:
      return <NotFound />;
  }
};

export default SubExperience;
