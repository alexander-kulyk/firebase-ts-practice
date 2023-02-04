import css from 'components/ToDo/ToDo.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filters/filtersSlice';
import { Filter } from 'redux/filters/selectors.ts';
//import { selectAllTodos } from 'redux/filters/selectors';

export const Filters = () => {
  //const todos = useSelector(selectAllTodos);
  const dispatch = useDispatch();
  return (
    <div className={css.filters}>
      <button
        type="button"
        onClick={() => dispatch(changeFilter(Filter.active))}
      >
        Active
      </button>
      <button type="button" onClick={() => dispatch(changeFilter(Filter.all))}>
        All
      </button>
      <button
        type="button"
        onClick={() => dispatch(changeFilter(Filter.completed))}
      >
        Completed
      </button>
    </div>
  );
};
