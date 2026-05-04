import { serviceController } from "../controllers/service.controller";
const ENDPOINTS = {
  CONFIGS: "config",
};
export default defineEventHandler(async (event) => {
  // ... Do whatever you want here

  const res = await serviceController.get(ENDPOINTS.CONFIGS); // timeConsumingBackgroundTask();

  // immediately s  end the response to the client
  return res;
});
