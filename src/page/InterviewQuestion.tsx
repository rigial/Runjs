import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import QuestionAccordion from '../components/QuestionAccordion';
import InterViewQuestion from '../asset/interview_questions.json';
import { JSInterviewQuestionList } from '../utils/interface';
import useLocalStorageState from '../hook/useLocalStorageState';
import Footer from '../components/Footer';
import SEO from '../seo/SEO';
import { getBreadcrumbSchema } from '../seo/seoConfig';
import { Search, Sparkles, X, Brain, FileQuestion } from 'lucide-react';

export default function InterviewQuestion() {
  const [activeQuestion, setActiveQuestion] = useLocalStorageState(
    'activeQuestion',
    '-1'
  );
  const [searchQuery, setSearchQuery] = useState('');

  const allQuestions = InterViewQuestion as JSInterviewQuestionList;

  const filteredQuestions = useMemo(() => {
    if (!searchQuery.trim()) return allQuestions;
    const query = searchQuery.toLowerCase();
    return allQuestions.filter(
      (q) =>
        q.question.toLowerCase().includes(query) ||
        q.answer.some((a) =>
          a.data.some((d) => d.toLowerCase().includes(query))
        )
    );
  }, [allQuestions, searchQuery]);

  function handleActiveQuestion(index: number) {
    if (index === Number(activeQuestion)) {
      setActiveQuestion('-1');
    } else {
      setActiveQuestion(index.toString());
    }
  }

  // Generate FAQPage schema from the first 10 questions
  const faqSchema = useMemo(() => {
    const questionsSample = allQuestions.slice(0, 10);
    return {
      '@context': 'https://schema.org' as const,
      '@type': 'FAQPage',
      mainEntity: questionsSample.map((q) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer
            .map((ans) => ans.data.join(' '))
            .join(' ')
            .slice(0, 300),
        },
      })),
    };
  }, [allQuestions]);

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[var(--bg-app)] text-[var(--text-primary)] transition-colors duration-150">
      <SEO
        title="JavaScript Technical Interview Questions & Answers"
        description="Master JavaScript technical interviews with curated questions and detailed solutions covering closures, event loop, promises, prototypes, and async/await."
        canonical="/interview"
        keywords={[
          'JavaScript interview questions',
          'frontend interview questions',
          'JavaScript event loop',
          'closures interview questions',
          'JavaScript promises interview',
          'technical interview prep',
        ]}
        structuredData={[
          getBreadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: 'Interview Questions', item: '/interview' },
          ]),
          faqSchema,
        ]}
      />

      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Banner */}
        <div className="pb-6 border-b border-[var(--border-default)]">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interview Preparation Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            JavaScript Technical Interview Questions
          </h1>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed max-w-3xl">
            A comprehensive collection of core JavaScript concepts, closures,
            prototypes, event loops, async/await, and real-world coding problems
            with executable code samples.
          </p>

          {/* Interview Section Switcher */}
          <div className="mt-5 flex items-center gap-1.5 p-1 rounded-xl bg-[var(--bg-surface-muted)] border border-[var(--border-default)] w-fit">
            <Link
              to="/interview"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-xs border border-[var(--border-default)]"
            >
              <FileQuestion className="w-3.5 h-3.5 text-amber-500" />
              <span>Technical Q&A</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20">
                Theory
              </span>
            </Link>

            <Link
              to="/output-questions"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Brain className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <span>Output Quiz</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                100 MCQs
              </span>
            </Link>
          </div>

          {/* Search & Stats Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <label htmlFor="interview-question-search" className="sr-only">
                Search interview questions
              </label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--text-muted)]">
                <Search className="w-4 h-4" />
              </div>
              <input
                id="interview-question-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter questions by keyword (e.g. closure, promise)..."
                className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]/30 focus:border-[var(--border-focus)] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear interview question search"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
              <span className="px-2.5 py-1 rounded-md border border-[var(--border-default)] bg-[var(--bg-surface)]">
                Showing{' '}
                <strong className="text-[var(--text-primary)]">
                  {filteredQuestions.length}
                </strong>{' '}
                of {allQuestions.length} questions
              </span>
            </div>
          </div>
        </div>

        {/* Questions List */}
        <section className="my-6">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((val) => {
              const originalIndex = allQuestions.indexOf(val);
              return (
                <QuestionAccordion
                  changeActiveQuestion={() =>
                    handleActiveQuestion(originalIndex)
                  }
                  isOpened={Number(activeQuestion) === originalIndex}
                  questionNumber={originalIndex}
                  data={val}
                  key={originalIndex}
                />
              );
            })
          ) : (
            <div className="p-12 text-center rounded-xl border border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] my-6">
              <p className="text-sm text-[var(--text-secondary)]">
                No interview questions found matching "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-3 px-3 py-1.5 rounded-md bg-amber-500 text-black text-xs font-semibold hover:bg-amber-600 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
