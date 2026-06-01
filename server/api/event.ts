import { serviceController } from "../controllers/service.controller";
import appConfigs from "../../app.config.json";
const node_env = process.env.NODE_ENV as keyof typeof appConfigs.clientId;
const ENDPOINTS = {
  EVENT: `event/${appConfigs.clientId[node_env]}/client`,
};
interface iEvent {
  name: string;
  description: string;
  dthr_event: Date;
  active: boolean;
  dthr_init_sale: Date;
  dthr_end_sale: Date;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  client: { id: string };
}
export default defineEventHandler(async (event) => {
  // ... Do whatever you want here
  console.log(process.env.NODE_ENV);

  const res: Promise<iEvent[]> = await serviceController.get(ENDPOINTS.EVENT); // timeConsumingBackgroundTask();

  // immediately s  end the response to the client
  return res;
});
