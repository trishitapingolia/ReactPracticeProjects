import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import ScoreCounter from "./ScoreCounter";
import RollDice from "./RollDice";
import { useState } from "react";

function StartGame() {
    const [SelectedNumber, setSelectedNumber] = useState();
    const [CurrentDice, setCurrentDice] = useState(1);
    const [Count, setCount] = useState(0);
    const [Error, setError] = useState("");

    const generateRandomNumber = (min,max) =>{
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    const roll = () => {
        if(!SelectedNumber){
            setError("You must select a number");
            setCurrentDice(7);
            return
        };
        const randomNumber = generateRandomNumber(1,6);
        setCurrentDice((_prev)=>randomNumber);

        if (randomNumber === SelectedNumber){
            setCount(Count=>Count+SelectedNumber);
        }else{
            setCount(Count=>Count-2);  
        }


        setSelectedNumber(undefined);
    }

    const resetScore = () => {
        setCount(0);
    }
    


    return ( 
        <Main>
            <div className="topSection">
                <ScoreCounter Count={Count} />
                <NumberSelector Error={Error} setError={setError} SelectedNumber={SelectedNumber} setSelectedNumber={setSelectedNumber}/>
            </div>
            <RollDice resetScore={resetScore} CurrentDice={CurrentDice} roll={roll} Count={Count} setCount={setCount}/>
        </Main>
     );
}

export default StartGame;

const Main = styled.main`
    padding-top:20px;
    .topSection{
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 700px;
    }
`