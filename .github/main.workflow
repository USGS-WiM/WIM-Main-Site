workflow "Production Repo Workflow" {
  resolves = ["GitHub Action for AWS-prod", "GitHub Action for AWS2-prod"]
  on = "schedule(05 17 * * *)"
}
workflow "Test Repo Workflow" {
  resolves = ["GitHub Action for AWS-test", "GitHub Action for AWS2-test"]
  on = "schedule(50 20 * * *)"
}

action "GraphQL query" {
  uses = "helaili/github-graphql-action@fb0ce78d56777b082e1a1659faf2b9f5a8832ed3"
  secrets = ["GITHUB_TOKEN"]
  args = "--query .github/graph-ql.query.yaml --output repos1.json"
}

action "GraphQL query2" {
  uses = "helaili/github-graphql-action@fb0ce78d56777b082e1a1659faf2b9f5a8832ed3"
  secrets = ["GITHUB_TOKEN"]
  args = "--query .github/graph-ql.query2.yaml --output repos2.json"
}


action "GitHub Action for AWS-prod" {
  uses = "actions/aws/cli@efb074ae4510f2d12c7801e4461b65bf5e8317e6"
  needs = ["GraphQL query"]
  args = "s3 cp $GITHUB_WORKSPACE/repos1.json s3://wim.usgs.gov/src/repos1.json"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}

action "GitHub Action for AWS2-prod" {
  uses = "actions/aws/cli@efb074ae4510f2d12c7801e4461b65bf5e8317e6"
  needs = ["GraphQL query2"]
  args = "s3 cp $GITHUB_WORKSPACE/repos2.json s3://wim.usgs.gov/src/repos2.json"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}

action "GitHub Action for AWS-test" {
  uses = "actions/aws/cli@efb074ae4510f2d12c7801e4461b65bf5e8317e6"
  needs = ["GraphQL query"]
  args = "s3 cp $GITHUB_WORKSPACE/repos1.json s3://test.wim.usgs.gov/src/repos1.json"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}

action "GitHub Action for AWS2-test" {
  uses = "actions/aws/cli@efb074ae4510f2d12c7801e4461b65bf5e8317e6"
  needs = ["GraphQL query2"]
  args = "s3 cp $GITHUB_WORKSPACE/repos2.json s3://test.wim.usgs.gov/src/repos2.json"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}




workflow "Push to Test Site" {
  on = "push"
  resolves = ["GitHub Action for Slack"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "branch staging"
}

action "GitHub Action for AWS-1" {
  uses = "actions/aws/cli@efb074ae4510f2d12c7801e4461b65bf5e8317e6"
  needs = ["Filters for GitHub Actions"]
  args = "s3 cp $GITHUB_WORKSPACE/builds/production/ s3://test.wim.usgs.gov/  --recursive"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}

action "GitHub Action for Slack" {
  uses = "Ilshidur/action-slack@2a8ddb6db23f71a413f9958ae75bbc32bbaa6385"
  needs = ["GitHub Action for AWS-1"]
  secrets = ["SLACK_WEBHOOK"]
  args = "Successfully deployed to test site"
}

workflow "Push to Prod Site" {
  on = "push"
  resolves = ["GitHub Action for Slack-2"]
}

action "Filters for GitHub Actions-2" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "branch master"
}

action "GitHub Action for AWS-2" {
  uses = "actions/aws/cli@efb074ae4510f2d12c7801e4461b65bf5e8317e6"
  needs = ["Filters for GitHub Actions-2"]
  args = "s3 cp $GITHUB_WORKSPACE/builds/production/ s3://wim.usgs.gov/  --recursive"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}

action "GitHub Action for Slack-2" {
  uses = "Ilshidur/action-slack@2a8ddb6db23f71a413f9958ae75bbc32bbaa6385"
  needs = ["GitHub Action for AWS-2"]
  secrets = ["SLACK_WEBHOOK"]
  args = "Successfully deployed to prod site"
}
