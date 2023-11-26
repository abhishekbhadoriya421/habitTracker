// import { useState } from "react";
import style from "./style.module.css";
import AddHabitFormComponent from "./AddHabitForm/AddHabitFormComponent";
import HabitComponent from "./Habit/HabitComponent";
import {useSelector } from "react-redux/es/hooks/useSelector";
import { habitSelector } from "../../redux/reducer/habitReducer";
export default function HabitsComponent() {
  const habits = useSelector(habitSelector);
  return (
    <>
      <div className={style.container}>
        {/* add new habits */}
        <AddHabitFormComponent/>
        {/* habit List  */}
        <div className={style.habitList}>
          <p className={style.heading}>Habit List</p>
          <hr />
          {
            habits.map((habit,ind)=>(
              <HabitComponent key={ind} habitData={habit} index={ind}/>
            ))
          }
        </div>
      </div>
    </>
  );
}
