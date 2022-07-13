import { useWarningsAndDangers } from "./useWarningAndDangers";
import { useContext } from "react";
import { appContext } from "../context/store/appContext";

export const usePointsWitProblems = () => {
  const appCtx = useContext(appContext);
  const { markersState } = appCtx;
  const {
    dangers: { extinguishersInspectionOverdue, pointsWithNoExtinguisher },
    warnings: { extinguishersToInspect, pointsWithWrongAgents },
  } = useWarningsAndDangers();

  const pointsWithInspectionOverdue = markersState.filter((point) => {
    const extinguisersIDWithIspectionOverdue =
      extinguishersInspectionOverdue.map((ex) => ex.id);
    return extinguisersIDWithIspectionOverdue.includes(point.extinguisher)
  });

  const pointsWithIncomingInspection = markersState.filter((point) => {
    const extinguisersIDWithIncomingIspection = extinguishersToInspect.map(
      (ex) => ex.id
    );
    return extinguisersIDWithIncomingIspection.includes(point.extinguisher);
  });

  return {
    pointsWithDangers: {
      pointsWithNoExtinguisher,
      pointsWithInspectionOverdue,
    },
    pointsWithWarnings: { pointsWithWrongAgents, pointsWithIncomingInspection },
  };
};
