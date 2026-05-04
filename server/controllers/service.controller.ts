import a from "axios";
import { endpoints } from "../../app.config.json";
let endpoint = endpoints.producao;

switch (process.env.NODE_ENV) {
  case "development":
    endpoint = endpoints.homologacao;
    break;
  case "production":
    endpoint = endpoints.producao;
    break;
}

export const serviceController = {
  axios: a.create({ baseURL: endpoint }),
  async get(url: string) {
    try {
      const response = await this.axios({
        method: "GET",
        url,
      });

      return response.data;
    } catch (error) {
      console.log(error, "error");
      return error;
    }
  },
};
