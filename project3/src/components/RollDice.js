import styled from "styled-components";
import { useState } from "react";
import Rules from "./Rules";
function RollDice({CurrentDice,roll,resetScore}) {


    const [RuleBox, setRuleBox] = useState(false);

    const showRules =()=>{
        setRuleBox((prev)=>!prev);
    }


    return (
        <Container>
            <div>
                <img src={`/images/dice_${CurrentDice}.png`} alt="dice1" onClick={roll}/>
            </div>
            <h4>Click on Dice to Roll</h4>  
            <div className="buttons">
                <button onClick={resetScore}>Reset Score</button>
                <button onClick={showRules}>{RuleBox?"Hide":"Show"} Rules</button>
            </div>
            <div>{RuleBox && <Rules/>}</div>
        </Container>
    );
}

export default RollDice;


const Container = styled.div`   
    
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

    img{
        cursor: pointer;
    }

    .buttons{
        display: flex;
        align-items: center;
        gap: 20px;
         button{
             background-color:rgb(146, 7, 7);
             color:white;
             font-size:16px;
             min-width: 220px;
             padding: 10px 18px 10px 18px;
             border-radius: 5px;
             border:1px solid transparent;
             transition: 0.1s background ease-in;


             &:hover{
                background-color:white;
                border:1px solid black;
                color:black;
                cursor:pointer;
                transition: 0.3s background ease-in;
                }
            }
`