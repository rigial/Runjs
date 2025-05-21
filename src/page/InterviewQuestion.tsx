import { Fragment } from 'react';
import Navbar from '../components/Navbar';
import QuestionAccordion from '../components/QuestionAccordion';
import InterViewQuestion from '../asset/interview_questions.json';
import { JSInterviewQuestionList } from '../utils/interface';
import useLocalStorageState from '../hook/useLocalStorageState';
import Footer from '../components/Footer';

export default function InterviewQuestion() {
  const [activeQuestion, setActiveQuestion] = useLocalStorageState(
    'activeQuestion',
    '-1'
  );

  function handleActiveQuestion(index: number) {
    if (index === Number(activeQuestion)) {
      setActiveQuestion('-1');
    } else {
      setActiveQuestion(index.toString());
    }
  }

  return (
    <Fragment>
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="my-8">
          {(InterViewQuestion as JSInterviewQuestionList).map((val, index) => {
            return (
              <QuestionAccordion
                changeActiveQuestion={() => handleActiveQuestion(index)}
                isOpened={Number(activeQuestion) === index}
                questionNumber={index}
                data={val}
                key={index}
              />
            );
          })}
        </main>
        <Footer />
      </section>
    </Fragment>
  );
}
