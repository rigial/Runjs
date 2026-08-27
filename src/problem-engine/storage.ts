import { Problem, SubmissionResult, UserProblemState } from './types';

const STORAGE_KEY_STATES = 'runjs_problem_states_v2';
const STORAGE_KEY_RECENT_SUBS = 'runjs_recent_submissions_v2';

export function getAllProblemStates(): Record<string, UserProblemState> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STATES);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return parsed as Record<string, UserProblemState>;
    }
    return {};
  } catch (error) {
    console.error('Failed to load problem states from localStorage', error);
    return {};
  }
}

export function saveAllProblemStates(
  states: Record<string, UserProblemState>
): void {
  try {
    localStorage.setItem(STORAGE_KEY_STATES, JSON.stringify(states));
  } catch (error) {
    console.error('Failed to save problem states to localStorage', error);
  }
}

export function getUserProblemState(
  slug: string,
  defaultStarterCode: string,
  defaultLanguage: 'javascript' | 'typescript' = 'javascript'
): UserProblemState {
  const states = getAllProblemStates();
  const existing = states[slug];
  if (existing) {
    return {
      ...existing,
      code: existing.code || defaultStarterCode,
      language: existing.language ?? defaultLanguage,
      submissions: existing.submissions ?? [],
    };
  }
  return {
    code: defaultStarterCode,
    language: defaultLanguage,
    isSolved: false,
    isStarred: false,
    submissions: [],
  };
}

export function saveUserProblemCode(
  slug: string,
  code: string,
  language: 'javascript' | 'typescript' = 'javascript'
): void {
  const states = getAllProblemStates();
  const current = states[slug] || {
    code,
    language,
    isSolved: false,
    isStarred: false,
    submissions: [],
  };

  states[slug] = {
    ...current,
    code,
    language,
    lastAttemptedAt: new Date().toISOString(),
  };

  saveAllProblemStates(states);
}

export function toggleProblemStar(
  slug: string,
  defaultStarterCode = ''
): boolean {
  const states = getAllProblemStates();
  const current = states[slug] || {
    code: defaultStarterCode,
    language: 'javascript',
    isSolved: false,
    isStarred: false,
    submissions: [],
  };

  const newStarred = !current.isStarred;
  states[slug] = {
    ...current,
    isStarred: newStarred,
  };

  saveAllProblemStates(states);
  return newStarred;
}

export function resetProblemCode(
  slug: string,
  starterCode: string,
  language: 'javascript' | 'typescript' = 'javascript'
): void {
  const states = getAllProblemStates();
  const current = states[slug] || {
    code: starterCode,
    language,
    isSolved: false,
    isStarred: false,
    submissions: [],
  };

  states[slug] = {
    ...current,
    code: starterCode,
    language,
  };

  saveAllProblemStates(states);
}

export function recordSubmission(
  slug: string,
  submission: SubmissionResult
): UserProblemState {
  const states = getAllProblemStates();
  const current = states[slug] || {
    code: submission.code,
    language: submission.language,
    isSolved: false,
    isStarred: false,
    submissions: [],
  };

  const isSolved = current.isSolved || submission.status === 'accepted';
  const submissions = [submission, ...current.submissions].slice(0, 20);

  const updated: UserProblemState = {
    ...current,
    isSolved,
    code: submission.code,
    language: submission.language,
    lastAttemptedAt: submission.timestamp,
    lastSolvedAt: isSolved
      ? current.lastSolvedAt || submission.timestamp
      : undefined,
    submissions,
  };

  states[slug] = updated;
  saveAllProblemStates(states);

  // Also update recent global submissions
  try {
    const rawRecent = localStorage.getItem(STORAGE_KEY_RECENT_SUBS);
    const recent: SubmissionResult[] = rawRecent ? JSON.parse(rawRecent) : [];
    const updatedRecent = [
      submission,
      ...recent.filter((s) => s.id !== submission.id),
    ].slice(0, 30);
    localStorage.setItem(
      STORAGE_KEY_RECENT_SUBS,
      JSON.stringify(updatedRecent)
    );
  } catch (err) {
    console.error('Failed to update recent submissions', err);
  }

  return updated;
}

export function getProblemStats(problems: Problem[]) {
  const states = getAllProblemStates();
  let solved = 0;
  let easySolved = 0;
  let easyTotal = 0;
  let mediumSolved = 0;
  let mediumTotal = 0;
  let hardSolved = 0;
  let hardTotal = 0;
  let starredCount = 0;

  for (const prob of problems) {
    const state = states[prob.slug];
    const isSolved = state?.isSolved ?? false;
    const isStarred = state?.isStarred ?? false;

    if (isStarred) starredCount++;
    if (isSolved) solved++;

    if (prob.difficulty === 'easy') {
      easyTotal++;
      if (isSolved) easySolved++;
    } else if (prob.difficulty === 'medium') {
      mediumTotal++;
      if (isSolved) mediumSolved++;
    } else if (prob.difficulty === 'hard') {
      hardTotal++;
      if (isSolved) hardSolved++;
    }
  }

  const total = problems.length;
  const percentage = total > 0 ? Math.round((solved / total) * 100) : 0;

  return {
    total,
    solved,
    easySolved,
    easyTotal,
    mediumSolved,
    mediumTotal,
    hardSolved,
    hardTotal,
    starredCount,
    percentage,
  };
}
