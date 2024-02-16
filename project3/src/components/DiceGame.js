import styled from "styled-components";
function DiceGame({toggle}) {
    return ( 
        <Container>
            <div>
                <img src="/images/Dice1.png" alt="DiceImage" style={{maxWidth:600}}/>
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <button onClick={toggle}>Play Now</button>
            </div>
        </Container>
     );
}

export default DiceGame;

const Container = styled.div`
    max-width: 1000px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;
    justify-content: center;

    .content{
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 40px;


        h1{
            font-size:85px;
            white-space:nowrap;
            line-height:2px;
        }
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
    }
`