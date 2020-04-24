import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Question } from "../../components/Question/Question";
import { addAnswerCreator } from "../../store/actionCreators";

import classes from "./QuestionsTablet.module.scss";

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const mapStateToProps = (state) => {
  return {
    title: state.title,
    que: state.questions,
    opt: state.options,
    answ: state.answers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddAnswer: (qNum, oNum) => {
      dispatch(addAnswerCreator(qNum, oNum));
    },
  };
};

export const QuestionsTablet = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", toggleScrollVisibility);
    return () => window.removeEventListener("scroll", toggleScrollVisibility);
  }, []);
  const toggleScrollVisibility = () => {
    window.pageYOffset > 325
      ? setIsScrollVisible(true)
      : setIsScrollVisible(false);
  };
  const isOnSubmit =
    JSON.parse(JSON.stringify(props.answ)).filter((el) => el).length ===
    props.que.length;
  const scrollToTopButton = (
    <div className={classes.BackToTopWrapper}>
      <span
        className={classes.BackToTopArrow}
        title="Back to top"
        onClick={scrollToTop}
      ></span>
    </div>
  );
  const questionsData = props.que.map((question, index) => (
    <Question
      key={index}
      qNum={index}
      question={question}
      options={props.opt[index]}
      answersState={props.answ}
      onAddAnswer={props.onAddAnswer}
    />
  ));
  return (
    <section className={classes.QuestionsWrapper}>
      <h1 className={classes.Title}>{props.title}</h1>
      <div className={classes.ReturnWrapper}>
        <span
          className={classes.ReturnArrow}
          title="Return to the initial window"
        ></span>
      </div>
      <ul className={classes.Questions}>{questionsData}</ul>
      <button
        className={classes.SubmitButton}
        type="button"
        name="Answers submit button"
        value="Submit answers"
        disabled={!isOnSubmit}
      >
        {isOnSubmit
          ? "Submit answers"
          : "Please answer all the questions to proceed"}
      </button>
      <button
        className={classes.QuestionsReturn}
        type="button"
        name="Return button"
        value="OR return to the initial window"
      >
        OR return to the initial window
      </button>
      {isScrollVisible && scrollToTopButton}
    </section>
  );
});
