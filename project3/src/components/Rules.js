import styled from "styled-components";
function Rules() {
    return ( 
        <Container>
            <h3>How to play dice game</h3><br/>
            <ul><li>Select any number</li>
            <li>Click on dice image</li>
            <li>If selected number is equal to dice number you will get same point as dice </li>
            <li>If you get wrong guess then  2 point will be deducted </li>
            </ul>
        </Container>
     );
}

export default Rules;

const Container = styled.div`
    max-width: 700px;
    background-color: #FBF1F1;
    padding: 30px;
    border-radius: 6px;

`