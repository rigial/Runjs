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
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        <div className="my-2">
          <h4 className="text-lg font-semibold underline mb-2">
            JavaScript Interview Questions & Answers !
          </h4>
          <p>
            Explore our starter guides to get a solid grasp of JavaScript
            interview prep before jumping into practice.
          </p>
        </div>
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
