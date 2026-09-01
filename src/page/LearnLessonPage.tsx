import LearnLayout from '../learn/components/LearnLayout';
import LessonContent from '../learn/components/LessonContent';

export default function LearnLessonPage() {
  return (
    <LearnLayout showSidebar={true}>
      <LessonContent />
    </LearnLayout>
  );
}
