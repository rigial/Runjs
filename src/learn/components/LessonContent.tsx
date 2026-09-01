import { memo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { getLessonBySlug } from '../data/lessonRegistry';
import {
  findLessonLocation,
  getNextLessonSlug,
  getPreviousLessonSlug,
} from '../data/curriculum';
import { useLearnProgress } from '../hooks/useLearnProgress';
import CodeBlock from './CodeBlock';
import QuizComponent from './QuizComponent';
import ExerciseComponent from './ExerciseComponent';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  CheckCircle2,
  BookOpen,
  ChevronRight,
  AlertTriangle,
  Info,
  Lightbulb,
  AlertCircle,
} from 'lucide-react';

function LessonContent() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const {
    markLessonRead,
    saveQuizScore,
    markExerciseCompleted,
    setLastLesson,
    getLessonProgress,
  } = useLearnProgress();

  const lesson = slug ? getLessonBySlug(slug) : undefined;
  const location = slug ? findLessonLocation(slug) : null;
  const progress = slug ? getLessonProgress(slug) : null;
  const nextSlug = slug ? getNextLessonSlug(slug) : null;
  const prevSlug = slug ? getPreviousLessonSlug(slug) : null;

  // Track that the user visited this lesson
  useEffect(() => {
    if (slug) {
      setLastLesson(slug);
    }
  }, [slug, setLastLesson]);

  if (!lesson || !slug) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
            Lesson Not Found
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            The lesson you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-black text-sm font-semibold transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Go to Learning Home
          </Link>
        </div>
      </div>
    );
  }

  const difficultyColors = {
    beginner: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    intermediate: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    advanced: 'bg-red-500/10 text-red-600 dark:text-red-400',
  };

  const calloutStyles = {
    tip: {
      bg: 'bg-emerald-500/5 border-emerald-500/20',
      icon: <Lightbulb className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />,
      label: 'Tip',
    },
    warning: {
      bg: 'bg-amber-500/5 border-amber-500/20',
      icon: <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />,
      label: 'Warning',
    },
    note: {
      bg: 'bg-blue-500/5 border-blue-500/20',
      icon: <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />,
      label: 'Note',
    },
    important: {
      bg: 'bg-red-500/5 border-red-500/20',
      icon: <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />,
      label: 'Important',
    },
  };

  return (
    <article className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 min-w-0">
      {/* Breadcrumb */}
      {location && (
        <nav className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)] mb-6 flex-wrap">
          <Link
            to="/learn"
            className="hover:text-[var(--text-secondary)] transition-colors"
          >
            Learn
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--text-secondary)]">
            {location.part.title}
          </span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--text-secondary)]">
            {location.topic.title}
          </span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--text-primary)] font-medium">
            {lesson.title}
          </span>
        </nav>
      )}

      {/* Lesson Header */}
      <header className="mb-8 pb-6 border-b border-[var(--border-default)]">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${difficultyColors[lesson.difficulty]}`}
          >
            {lesson.difficulty}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-[var(--text-muted)]">
            <Clock className="w-3 h-3" />
            {lesson.readingTime} min read
          </span>
          {progress?.isRead && (
            <span className="flex items-center gap-1 text-[11px] text-emerald-500 font-medium">
              <CheckCircle2 className="w-3 h-3" />
              Completed
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
          {lesson.title}
        </h1>
        <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
          {lesson.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {lesson.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[var(--bg-surface-hover)] text-[var(--text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Content Sections */}
      {lesson.sections.map((section, sIdx) => (
        <section key={sIdx} className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-3">
            {section.heading}
          </h2>

          {/* Paragraphs */}
          {section.paragraphs.map((para, pIdx) => (
            <p
              key={pIdx}
              className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3"
            >
              {para}
            </p>
          ))}

          {/* Bullet Points */}
          {section.bulletPoints && section.bulletPoints.length > 0 && (
            <ul className="space-y-1.5 my-3 ml-4">
              {section.bulletPoints.map((point, bIdx) => (
                <li
                  key={bIdx}
                  className="text-sm text-[var(--text-secondary)] leading-relaxed flex items-start gap-2"
                >
                  <span className="text-amber-500 mt-1.5 shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Code Examples */}
          {section.codeExamples?.map((example, eIdx) => (
            <CodeBlock key={eIdx} example={example} />
          ))}

          {/* Callout */}
          {section.callout && (
            <div
              className={`flex items-start gap-3 p-4 my-4 rounded-xl border ${calloutStyles[section.callout.type].bg}`}
            >
              {calloutStyles[section.callout.type].icon}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                  {calloutStyles[section.callout.type].label}
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {section.callout.text}
                </p>
              </div>
            </div>
          )}
        </section>
      ))}

      {/* Exercises */}
      {lesson.exercises.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-4">
            Practice Exercises
          </h2>
          {lesson.exercises.map((exercise, eIdx) => (
            <ExerciseComponent
              key={eIdx}
              exercise={exercise}
              exerciseNumber={eIdx + 1}
              onComplete={() =>
                markExerciseCompleted(slug, lesson.exercises.length)
              }
            />
          ))}
        </section>
      )}

      {/* Quiz */}
      {lesson.quiz.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-4">
            Test Your Understanding
          </h2>
          <QuizComponent
            questions={lesson.quiz}
            onComplete={(score) => saveQuizScore(slug, score)}
          />
        </section>
      )}

      {/* Key Takeaways */}
      {lesson.keyTakeaways.length > 0 && (
        <section className="mb-8 p-5 rounded-xl border border-amber-500/20 bg-amber-500/5">
          <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            Key Takeaways
          </h3>
          <ul className="space-y-2">
            {lesson.keyTakeaways.map((takeaway, tIdx) => (
              <li
                key={tIdx}
                className="flex items-start gap-2 text-xs text-[var(--text-secondary)] leading-relaxed"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Mark as Read + Navigation */}
      <footer className="pt-6 border-t border-[var(--border-default)]">
        {/* Mark complete */}
        {!progress?.isRead && (
          <div className="mb-6 text-center">
            <button
              type="button"
              onClick={() => markLessonRead(slug)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-black text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <CheckCircle2 className="w-4 h-4" />
              Mark Lesson Complete
            </button>
          </div>
        )}

        {/* Prev / Next navigation */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          {prevSlug ? (
            <button
              type="button"
              onClick={() => navigate(`/learn/${prevSlug}`)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-xs font-medium text-[var(--text-secondary)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Previous Lesson
            </button>
          ) : (
            <div />
          )}

          {nextSlug ? (
            <button
              type="button"
              onClick={() => navigate(`/learn/${nextSlug}`)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-black text-xs font-semibold transition-colors"
            >
              Next Lesson
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <Link
              to="/learn"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
            >
              🎉 Curriculum Complete!
            </Link>
          )}
        </div>
      </footer>
    </article>
  );
}

export default memo(LessonContent);
