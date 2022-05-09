import { useState } from "react";

import { RepositoryInterface } from "../interfaces/repository";

export function useRepository() {
  const [repository, setRepository] = useState<RepositoryInterface[]>([]);
  return { repository, setRepository };
}
