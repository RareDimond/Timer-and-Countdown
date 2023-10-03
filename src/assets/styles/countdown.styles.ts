import styled from "styled-components";
export const CountdownBorder = styled.div`
color: white;
  width: 220px;
  height: 225px;
  border: 3px solid  #f5dae6;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 110px 110px;
  grid-template-rows: 55px 120px 45px;
`
export const CountdownTitle = styled.h1`
grid-column: span 2;
margin: auto;
`
export const CountdownWorkspaceGrid = styled.div`
  grid-column: span 2;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
`
export const WorkspaceInput = styled.input`
 width: 80px;
    padding: 5px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
    text-align: center;
    margin-top: 5px;
`
export const FlexCenter = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const WorkspaceSlider = styled.div`
grid-column: span 2;
display: flex;
justify-content: center;
align-items: center;
`
export const WorkspaceSliderInput = styled.input`
width: 200px;
`
export const CountdownButtonStyles = styled.button`
width: 100px;
  height: 30px;
  padding: auto;
  font-size: 14px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
`
export const StopCountdownButtonStyles = styled.button`
width: 100px;
  height: 30px;
  padding: auto;
  font-size: 14px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  background-color: red;
`
export const CountdownVisualizationGrid = styled.div`
  grid-column: span 2;
  display: grid;
  grid-template-rows: 80px 40px;
`
export const CountdownNumberVisual = styled.div`
font-size: 60px;
margin: auto;
`
export const CountdownNumberProgress = styled.div`
margin: auto;
font-size: 16px;
`
export const CountdownDiv = styled.div``
