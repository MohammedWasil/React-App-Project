import './App.css';
import React,{useState} from 'react';
import DefaultBackground from './components/DefaultBackground';
import Group from './components/Group';
import Notes from './components/Notes';
import Popup from './components/Popup';
function App() {
  let [popUp,setpopUp] = useState(false);
  let [Count,setCount] = useState(0);
  let [allGroups,setallGroups] = useState([]);
  let [groupClick,setgroupClick] = useState("");
  let [uniqueKey,setUniqueKey] = useState("");
  let [isClicked,setisClicked] = useState(false);
  let [groupColor,setgroupColor] = useState("");
  return (
    <>
    <div className='notes_app desktop'>
      <div className='left_container_notes_app'>
        <Group setisClicked={setisClicked} setpopUp={setpopUp} count={Count} setCount={setCount} groupClick={groupClick} setgroupClick={setgroupClick} allGroups={allGroups} setallGroups={setallGroups} setgroupColor={setallGroups} uniqueKey={uniqueKey} setUniqueKey={setUniqueKey}/>
      </div>
      <div className='right_cotainer_notes_app'>
        {
          (isClicked) ? <Notes groupClick={groupClick} groupColor={groupColor} setisClicked={setisClicked} setgroupClick={setgroupClick} uniqueKey={uniqueKey} setUniqueKey={setUniqueKey}/> : <DefaultBackground/>
        }
      </div>
      {popUp && <Popup setpopUp={setpopUp} Count={Count} setCount={setCount} setgroupClick={setgroupClick}/>}
    </div>

    <div className='mobile'>
      {(isClicked) && <Group setisClicked={setisClicked} setpopUp={setpopUp} Count={Count} setCount={setCount} groupClick={groupClick} setgroupClick={setgroupClick} allGroups={allGroups} setallGroups={setallGroups} setgroupColor={setgroupColor} uniqueKey={uniqueKey} setUniqueKey={setUniqueKey}/>}
      {popUp && <Popup setpopUp={setpopUp} Count={Count} setCount={setCount} setgroupClick={setgroupClick}/>}
      {(isClicked) && <Notes groupClick={groupClick} groupColor={groupColor} setisClicked={setisClicked} setgroupClick={setgroupClick} uniqueKey={uniqueKey} setUniqueKey={setUniqueKey}/>}
    </div>
    </>
  );
}

export default App;