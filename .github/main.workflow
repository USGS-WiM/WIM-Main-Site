workflow "Repo Workflow" {
  on = "issue_comment"
  resolves = ["GitHub Action for AWS"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@3c98a2679187369a2116d4f311568596d3725740"
  args = "issue_comment run"
}

action "GraphQL query" {
  uses = "helaili/github-graphql-action@fb0ce78d56777b082e1a1659faf2b9f5a8832ed3"
  needs = ["Filters for GitHub Actions"]
  secrets = ["GITHUB_TOKEN"]
  args = "--query .github/graph-ql.query.yaml --output repos.json"
}

action "GitHub Action for AWS" {
  uses = "actions/aws/cli@efb074ae4510f2d12c7801e4461b65bf5e8317e6"
  needs = ["GraphQL query"]
  args = "s3 cp $GITHUB_WORKSPACE/repos.json"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}
