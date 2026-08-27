import { Problem } from '../problem-engine/types';

export function getGithubIssueUrl(problem: Problem): string {
  const repoUrl = 'https://github.com/rigial/Runjs';
  const issueTitle = encodeURIComponent(
    `[Problem Issue]: #${problem.id} - ${problem.title}`
  );
  const issueBody = encodeURIComponent(
    `### Problem Information
- **Problem ID:** #${problem.id}
- **Problem Title:** ${problem.title}
- **Slug:** ${problem.slug}
- **Difficulty:** ${problem.difficulty}
- **Topics:** ${problem.topics.join(', ')}

### Issue Description
<!-- Please describe the issue with this problem (e.g. incorrect test case, description typo, starter code error, etc.) -->

### Expected Behavior
<!-- What should have happened instead? -->

### Additional Context
<!-- Add any other context or screenshots about the issue here. -->
`
  );

  return `${repoUrl}/issues/new?title=${issueTitle}&body=${issueBody}&labels=problem-issue`;
}
