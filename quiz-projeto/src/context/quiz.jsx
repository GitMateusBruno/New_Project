import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STAGES = ["Start", "playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions
};

const quizReducer = (state, action) => {
    console.log(state, action);

    switch (action.type) {
        case "CHANGE_STATE"
            return state;
    }
};

export const QuizContext = createContext()

export const QuizProvider =({children}) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider valeu={value}>{children}</QuizContext.Provider>;
};