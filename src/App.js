import { useState } from 'react';
import styled from 'styled-components'
import Axios from 'axios'
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import {Header,AppNameComponent,Appicon,SearchComponent,SearchInput} from './components/Header'
import {RecipeListContainer,RecipeContainer,CoverImage,RecipeName,IngrediantsText,SeeMoreText} from './components/Recipe'

const APP_ID = "a52b4d43";
const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";

const Container=styled.div`
  display:flex;
  flex-direction:column;
`
const SeeMoreButton=styled.span`
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
const CloseButton=styled(SeeMoreButton)`
  color: #eb3300;
  border: solid 1px #eb3300;
`
const PlaceHolder=styled.img`
  height: 170px;
  width: 170;
  margin: 150px;
  opacity: 50%;
`

const Recipe=(props)=> {
  
  const [show, setShow] = useState("");

  return(
    <>
        <Dialog open={show}>

          <DialogTitle>
            Ingrediants
          </DialogTitle>

          <DialogContent>
            <table>
              <thead>
                <th>Ingrediants</th>
                <th>Weight</th>
              </thead>
              <tbody>
                {props.recipeObj.ingredients.map((ingrediant)=>(
                    <tr>
                    <td>{ingrediant.text}</td>
                    <td>{Math.floor(ingrediant.weight)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DialogContent>

          <DialogActions>
            <SeeMoreButton onClick={() => window.open(props.recipeObj.url)}>See More</SeeMoreButton>
            <CloseButton onClick={() => setShow(false)}>Close</CloseButton>
          </DialogActions>

        </Dialog>


        <RecipeContainer>
          <CoverImage src={props.recipeObj.image} alt=""/>
          <RecipeName>{props.recipeObj.label}</RecipeName>
          <IngrediantsText onClick={()=>setShow(true)}>Ingrediants</IngrediantsText>
          <SeeMoreText onClick={()=>window.open(props.recipeObj.url)} >See Complete Recipe</SeeMoreText>
        </RecipeContainer>
    </>
  )
}


function App() {

const [recipeList, updateRecipeList] = useState([]);
const[timeoutid,updatetimeoutid]=useState();


  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    );
    updateRecipeList(response.data.hits);
  };

  const onTextChange=(event)=>{
    clearTimeout(timeoutid);
    const timeout=setTimeout(()=>fetchData(event.target.value),500);
    updatetimeoutid(timeout);
  };

  return (
    <Container>


      <Header>
        <AppNameComponent>
          <Appicon src="/Hamburger.svg" alt="Logo"/>
          Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <img src="/search-icon.svg" alt="Search Icon"/>
          <SearchInput type="text" placeholder='Search Recipe' onChange={onTextChange}/>
        </SearchComponent>
      </Header>


      <RecipeListContainer>
        {recipeList.length ? recipeList.map((recipeObj)=>(
            <Recipe recipeObj={recipeObj.recipe}/>
        )): <PlaceHolder src="/Hamburger.svg" />}
      </RecipeListContainer>


    </Container>
  );
}

export default App;
