import { createContext, useState } from "react";
import run from "../config/gemini";
import { use } from "react";

export const Context = createContext();
const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [previousPrompts, setPreviousPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const dealyPara = (index, word) => {
        setTimeout(function(){
            setResultData(prev => prev + word);
        }, 75 * index);
    }

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }

    const onSent = async(prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let responses;

        if (prompt !== undefined) {
            responses = await run(prompt);
            setRecentPrompt(prompt);
        } else {
            setPreviousPrompts(prev => [...prev, input]);
            setRecentPrompt(input);
            responses = await run(input);
        }

        let responseArray = responses.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }

        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            dealyPara(i, nextWord + " ");
        }

        setLoading(false);
        setInput("");
    }

    const contextValue =  {
        previousPrompts,
        setPreviousPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
