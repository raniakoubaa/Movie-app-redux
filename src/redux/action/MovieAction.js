import { MOVIE_ADD, MOVIE_DELETE, MOVIE_EDIT } from "../types";

export const AddMovie = (payload) => ({
    type: MOVIE_ADD,
    payload
})
export const MovieDelete = (payload) => ({
    type: MOVIE_DELETE,
    payload
})
export const EditMovie = (payload) => ({
    type: MOVIE_EDIT,
    payload
})

