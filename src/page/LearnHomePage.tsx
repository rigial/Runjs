import LearnLayout from '../learn/components/LearnLayout';
import LearnHome from '../learn/components/LearnHome';

export default function LearnHomePage() {
  return (
    <LearnLayout showSidebar={false}>
      <LearnHome />
    </LearnLayout>
  );
}
