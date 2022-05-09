import { apiGet } from "../apiGet";
import { ApiUrl } from "../apiUrl";

export const getUser = async (username: string): Promise<{} | any> => {
  const apiUrl = new ApiUrl();
  return await apiGet(apiUrl.getUser(username));
};
