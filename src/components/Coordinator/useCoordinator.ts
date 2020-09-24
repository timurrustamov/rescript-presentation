import { useContext } from "react";

import { CoordinatorContext } from ".";

const useCoordinator = () => useContext(CoordinatorContext);

export default useCoordinator;
