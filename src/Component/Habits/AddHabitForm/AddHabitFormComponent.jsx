import { useDispatch } from 'react-redux';
import style from './style.module.css'
import { useState } from 'react';
import {actions} from '../../../redux/reducer/habitReducer'
export default function AddHabitFormComponent(){
    const [showAddHabit, setShowAddHabit] = useState(false);
    const [habit, setHabit] = useState("");
    const dispatch = useDispatch();
  
    // handle show add habit form
    function handleShowHabit() {
      setShowAddHabit(!showAddHabit);
    }

    // handling Form on submit and dispatching Data
    function handleOnSubmit(e){
      e.preventDefault();
      dispatch(actions.add(
        {
          habit:habit,
            time:new Date().toLocaleString(),
            day1:"",
            day2:"",
            day3:"",
            day4:"",
            day5:"",
            day6:"",
            day7:""
        }
      ))
    }
    return(<>
        <div className={style.addHabit}>
          {showAddHabit ? (
            <>
              <form className={style.addHabitForm} onSubmit={handleOnSubmit}>
              <p className={style.close} onClick={handleShowHabit} title="close">X</p>
                <input
                  type="text"
                  name="Habit"
                  required
                  placeholder="Enter Your Habit"
                  value={habit}
                  onChange={(e) => setHabit(e.target.value)}
                />
                <br />
                <button type="submit">Submit</button>
              </form>
            </>
          ) : (
            <button className={style.addNewHabit} onClick={handleShowHabit}>Add New Habit</button>
          )}
        </div>
    </>)
}