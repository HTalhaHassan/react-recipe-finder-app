import styled from 'styled-components'

export const RecipeListContainer=styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 15px;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
`
export const RecipeContainer=styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 3px 10px 0 #aaa;
  width: 200px;
`
export const CoverImage=styled.img`
  height: 150px;
`
export const RecipeName=styled.span`
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const IngrediantsText=styled.span`
  font-size: 15px;
  border: solid 1px green;
  color: green;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10px;
`
export const SeeMoreText=styled(IngrediantsText)`
  color: #eb3300;
  border: solid 1px #eb3300;
  margin-bottom: 2px;
`