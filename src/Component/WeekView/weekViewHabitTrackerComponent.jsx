import { useState } from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import {actions} from '../../redux/reducer/habitReducer'

export default function WeekViewHabitTrackerComponent({ habitData,ind }) {
    const { habit, time, day1, day2, day3, day4, day5, day6, day7 } = habitData;
    const [updateStatus,setUpdateStatus] = useState("");
    const [updateDay,setUpdateDay] = useState(null);
    const [showUpdateForm,setShowUpdateForm] = useState(false);
    const dispatch = useDispatch();
    const dateObject = new Date(time);
    
    const currentDate = dateObject; // Use dateObject directly as currentDate
    const currentDayOfWeek = dateObject.getDay(); // Get the current day of the week

    const lastSundayDate = new Date(
      currentDate.getTime() - currentDayOfWeek * 24 * 60 * 60 * 1000
    ).getDate(); // Calculate the date of the last Sunday


    // Handling Update Status 
    function handleUpdateStatus(e){
      e.preventDefault();
      dispatch(actions.update({
        ind:ind,
        status:updateStatus,
        day:updateDay
      }))
      
      setUpdateDay(null);
      setShowUpdateForm(false);
      setUpdateStatus("");
    }

    function handleShowUpdateForm(day){
      setShowUpdateForm(!showUpdateForm);
      if(updateDay===null){
        setUpdateDay(day);
      }else{
        setUpdateDay(null);
      }
    }
  return (
    <>
      <div className={style.habitDetails}>
        <div className={style.header}>
          <p className={style.habitName}>{habit}</p>
          <p className={style.habitTime}>{time}</p>
        </div>
        <div className={style.habitStatus}>
          <p onClick={()=>handleShowUpdateForm(1)}>
            {day1} <span>{lastSundayDate}</span>
          </p>
          <p onClick={()=>handleShowUpdateForm(2)}>
            {day2} <span>{lastSundayDate+1}</span>
          </p>
          <p onClick={()=>handleShowUpdateForm(3)}>
            {day3} <span>{lastSundayDate+2}</span>
          </p>
          <p onClick={()=>handleShowUpdateForm(4)}>
            {day4} <span>{lastSundayDate+3}</span>
          </p>
          <p onClick={()=>handleShowUpdateForm(5)}>
            {day5} <span>{lastSundayDate+4}</span>
          </p>
          <p onClick={()=>handleShowUpdateForm(6)}>
            {day6} <span>{lastSundayDate+5}</span>
          </p>
          <p onClick={()=>handleShowUpdateForm(7)}>
            {day7} <span>{lastSundayDate+6}</span>
          </p>
        </div>
      </div>

      {(showUpdateForm)?
        <form onSubmit={handleUpdateStatus} className={style.Form}>
        <select name="Status" className={style.Select} onChange={(e)=>setUpdateStatus(e.target.value)}>
          <option value="">None</option>
          <option value="Done">Done</option>
          <option value="NotDone">NotDone</option>
        </select>
        <button type="Submit" className={style.btn}>Update</button>
      </form>
      :
        false
      }
      
    </>
  );
}
