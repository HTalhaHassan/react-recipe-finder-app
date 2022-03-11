import styled from 'styled-components'

export const Header=styled.div`
  color:white;
  background-color:black;
  display: flex;
  flex-direction: row;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  align-items: center;
  justify-content: space-between;
  
`
export const AppNameComponent=styled.div`
  display: flex;
  align-items: center;
`
export const SearchComponent=styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`
export const Appicon=styled.img`
  width: 36px;
  height: 36px;
  margin: 10px;
`
export const SearchInput=styled.input`
  border: none;
  outline: none;
  margin-left: 5px;
  font-size: 16px;
  font-weight: bold;
`
