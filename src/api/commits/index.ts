import { apiGet } from "../apiGet";
import { ApiUrl } from "../apiUrl";

export const getCommits = async (
  username: string,
  repoName: string,
  page: number,
  per_page: number
): Promise<{} | any> => {
  const params = {
    page,
    per_page,
  };
  const apiUrl = new ApiUrl();
  return await apiGet(apiUrl.getCommits(username, repoName), params);
};
