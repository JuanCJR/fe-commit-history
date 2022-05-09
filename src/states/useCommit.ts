import { useEffect, useState } from "react";
import { CommitInfoGrouped } from "../interfaces/commit";

export function useCommit() {
  const [commit, setCommit] = useState<CommitInfoGrouped[]>([]);

  return { commit, setCommit };
}
