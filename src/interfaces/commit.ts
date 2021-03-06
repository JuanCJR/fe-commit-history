interface Verification {
  verified: boolean;
  reason: string;
  signature?: any;
  payload?: any;
}

interface CommitAuthor {
  name: string;
  email: string;
  date: Date;
}

interface CommitCommiter {
  name: string;
  email: string;
  date: Date;
}
interface Tree {
  sha: string;
  url: string;
}

interface Commit {
  author: CommitAuthor;
  committer: CommitCommiter;
  message: string;
  tree: Tree;
  url: string;
  comment_count: number;
  verification: Verification;
}

interface Author {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface Committer {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface Parent {
  sha: string;
  url: string;
  html_url: string;
}

export interface CommitInfo {
  sha: string;
  node_id: string;
  commit: Commit;
  url: string;
  html_url: string;
  comments_url: string;
  author: Author;
  committer: Committer;

  parents: Parent[];
}

export interface CommitInfoGrouped {
  date: string;
  commits: [CommitInfo];
}
