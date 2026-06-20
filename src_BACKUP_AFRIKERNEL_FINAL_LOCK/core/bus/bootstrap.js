export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
import { AfriBus } from "./AfriKernelEventBus";

AfriBus.connect();

export default AfriBus;
