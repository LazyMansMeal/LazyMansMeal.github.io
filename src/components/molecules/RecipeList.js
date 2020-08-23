import React from 'react';
import { Container } from '../grid';
import { Card } from '../atoms';

export const RecipeList = (props) => {
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
              <button className="w-12 h-12 p-0 transition duration-200 ease-in rounded-full shadow bg-primary-600 hover:bg-primary-700 active:shadow-lg mouse focus:outline-none">
                <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="inline-block w-6 h-6">
                  <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                          C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                          C15.952,9,16,9.447,16,10z" />
                </svg>
              </button>
            </div>
          </Card>
        );
      })}
    </Container>
  );
}
