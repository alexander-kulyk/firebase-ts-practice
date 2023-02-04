import { createSelector } from '@reduxjs/toolkit';
// type Todo = {
//   todo: [
//     {
//       text: string;
//       id: string;
//       complited: boolean;
//     }
//   ];
// };

export const selectAllTodos = state => state.todo.todo;
const selectActiveFilter = state => state.filters;

export enum Filter {
  all = 'all',
  completed = 'completed',
  active = 'active',
}
export const selectTodosByFilter = createSelector(
  [selectAllTodos, selectActiveFilter],
  (allTodos, activeFilter) => {
    if (activeFilter === Filter.all) {
      return allTodos;
    }

    if (activeFilter === Filter.completed) {
      return allTodos.filter(todo => todo.complited);
    }
    return allTodos.filter(todo => !todo.complited);
  }
);
