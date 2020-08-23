import React from 'react';
import { Container } from './grid';
import { Card, PencilIcon } from './atoms';

export const MyRecipeList = (props) => {
  return (
    <Container className="flex flex-wrap">
      {props.recipes.map((recipe, index) => {
        return (
          <Card className="relative inline-flex w-full h-auto max-w-2xl mb-4 mr-4 md:h-auto md:w-auto" key={index}>
            <div
              className="flex-none hidden w-5/12 h-auto bg-cover rounded-l sm:block"
              style={{backgroundImage: `url(${recipe.picture_link})`}}
            />
            <div className="pb-8 m-3 mb-8">
              <h4>{recipe.name}</h4>
              <h5>{recipe.subtitle}</h5>
              <div className="hidden text-gray-600 md:block">{recipe.description[0]}</div>
            </div>

            <div className="absolute w-8 h-8" style={{ bottom: "1.5rem", right: "1.5rem" }}>
              <button className="w-12 h-12 p-0 transition duration-200 ease-in rounded-full shadow bg-secondary-600 hover:bg-secondary-700 active:shadow-lg mouse focus:outline-none">
                <PencilIcon className="ml-3 text-white"/>
              </button>
            </div>
          </Card>
        );
      })}
    </Container>
  );
}

export default MyRecipeList;
