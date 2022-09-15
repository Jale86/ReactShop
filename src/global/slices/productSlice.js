import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";
import {uniq, sortBy} from "lodash";
import {stringSimilarity as getSimString} from "string-similarity-js" 

const DEFAULT_CATEGORY = "All"
const categories = uniq(data.map(product => product.category))

export const {actions, reducer} = createSlice ({
    name: "products",
    initialState : {
        products : data,
        productsFromSearch : data,
        categories : [DEFAULT_CATEGORY, ...categories],
        selectedCategory : DEFAULT_CATEGORY, 
        single : data [0], 
        singleSimilarProducts : data.slice(0,2),
        searchTerm : ""
    },
    reducers : {
            setSearchTerm (state, {payload:searchTerm}){
                state.productsFromSearch = state.products
                state.selectedCategory = DEFAULT_CATEGORY
                state.searchTerm = searchTerm

                if(searchTerm.length > 0){
                    // Search Operations
                    state.productsFromSearch.forEach ((p) => {
                        p.simString = getSimString (`${p.name} ${p.category}`, searchTerm)
                        console.log(p.simString);
                    })
                    // sortBy (niz, sta pretrazuje )
                    state.productsFromSearch = sortBy(state.productsFromSearch, "simString").reverse()
                } else {
                    state.productsFromSearch = state.products
                }
              
            }, 

            setSelectedCategory (state, {payload:category}){
                state.selectedCategory = category
                state.productsFromSearch = state.products.filter((p)=> (
                     (category === DEFAULT_CATEGORY ? true : (p.category === category))
                ))
            },

            setSingle(state, {payload:id}) {
                const product = state.products.find((p) => p.id === +id)
                state.single = product
                state.singleSimilarProducts = state.products.filter((p) => (
                    ( p.category === product.category) && ( p.id !== product.id)
                ))
            }
    }
})