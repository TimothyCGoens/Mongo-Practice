import { v1 as uuid } from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
  items: [
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Steak" },
    { id: uuid(), name: "Feet" },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case ADD_ITEM:
      return {
        ...state,
        //this takes your payload(entire item) and then adds it to your existing state
        items: [action.payload, ...state.items],
      };
    default:
      return state;
  }
}
