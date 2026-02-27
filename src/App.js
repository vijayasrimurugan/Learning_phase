import  Demo from './Dynamic'
function App(){
const obj={
name:"vijayasri",
rollno:248,
dept:"CSE"
}
const arr=[1,2,3,4,5]
const arrobj=[{color:"orange"},{age:19}]
return(
<div>
<center>
<Demo test={arrobj}/>
</center>
</div>
);
}
export default App;