import { apiGet } from "../apiGet";
import { ApiUrl } from "../apiUrl";

export const getRepositories = async (
  username: string,
  page: number,
  per_page: number
): Promise<{} | any> => {
  const params = {
    page,
    per_page,
  };
  const apiUrl = new ApiUrl();
  return await apiGet(apiUrl.getRepositories(username), params);
};
