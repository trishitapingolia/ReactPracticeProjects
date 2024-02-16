
import styled from "styled-components";

function NumberSelector({SelectedNumber,setSelectedNumber,Error,setError}) {

    const arr=[1,2,3,4,5,6];


    const NumberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }

    return ( 
        <BoxContainer>
            <div className="error">{Error}</div>
            <div className="flex">
                {arr.map((value,i)=>(
                    <Box isSelected={value===SelectedNumber} key={i} onClick={()=>NumberSelectorHandler(value)}>{value}</Box>
                ))}
            </div>
            <p>Select Number</p>
        </BoxContainer>
     );
}

export default NumberSelector;

const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
    .flex{
        display: flex;
        gap: 20px;
    }
    p{
        font-size: 19px;
        font-weight: 700;
    }
    .error{
        color:red;
    }
`

const Box =styled.div`
    width: 60px;
    height: 60px;
    color:black;
    font-weight: 700;
    font-size: 20px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    cursor: pointer;
    background-color:${(props)=>(props.isSelected ? "black": "white")};
    color:${(props)=>(!props.isSelected ? "black": "white")}
`