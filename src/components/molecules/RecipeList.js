import React from 'react';
import { Container } from '../grid';
import { Card } from '../atoms';

export const RecipeList = (props) => {
  return (
    <Container className="flex flex-wrap">
      {props.recipes.map((recipe, index) => {
        return (
          <Card className="relative mr-4 mb-4 h-auto w-full max-w-2xl md:h-auto md:w-auto inline-flex" key={index}>
            <div
              className="h-auto w-5/12 flex-none bg-cover rounded-l hidden sm:block"
              style={{backgroundImage: `url(${recipe.picture_link})`}}
            />
            <div className="m-3 mb-8 pb-8">
              <h4>{recipe.name}</h4>
              <h5>{recipe.subtitle}</h5>
              <div className="text-gray-600 hidden md:block">{recipe.description[0]}</div>
            </div>

            <div className="absolute h-8 w-8" style={{ bottom: "1.5rem", right: "1.5rem" }}>
              <button className="p-0 w-12 h-12 bg-primary-600 rounded-full hover:bg-primary-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" className="w-6 h-6 inline-block">
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
