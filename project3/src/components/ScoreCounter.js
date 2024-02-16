import styled from "styled-components";
function ScoreCounter({Count}) {

    return (
        <Container>
            <h1>{Count}</h1>
            <h3>Total Score</h3>
        </Container>
     );
}

export default ScoreCounter;

const Container = styled.div`

    max-width: 135px;
    text-align: center;    

    h1{
        font-size:100px;
        line-height:100px;
    }
`