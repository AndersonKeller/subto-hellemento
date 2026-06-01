import { serviceController } from "../controllers/service.controller";
import appConfigs from "../../app.config.json";
const ENDPOINTS = {
  CONFIGS: "configs/",
};
interface iConfigs {
  title: string;
  styles: string[];
}
export default defineEventHandler(async (event) => {
  // ... Do whatever you want here
  console.log(process.env.NODE_ENV);
  const node_env = process.env.NODE_ENV as keyof typeof appConfigs.clientId;
  const res: Promise<iConfigs> = await serviceController.get(ENDPOINTS.CONFIGS + appConfigs.clientId[node_env]); // timeConsumingBackgroundTask();

  // immediately s  end the response to the client
  return res;
});
