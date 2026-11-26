/*function App(){
  let count =0;
  function increment()
  {
    count++;
    console.log(count);
  }
  function decrement()
  {
    count--;
    console.log(count);
  }
  return(
    <div>
      <h1>Count:{count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}*/
/*import {useState} from "react";
function App(){
  const[count, setCount]=useState(0);

  function increment()
  {
    setCount(count+1);
    console.log(count+1);
  }
  function decrement()
  {
    setCount(count-1);
    console.log(count-1);
  }
  return(
    <div>
      <h1>Count:{count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
      
    </div>
  )

}*/

/*import { useEffect } from "react";
function App(){

  //1.without dependency array

  //it will run at initial render
  //after every subsequent render
  useEffect(()=>{
    console.log("Use Effect is Working");
  })
  return(
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}
export default App;*/

/*import { useEffect } from "react";
function App(){

  //2.with dependency array

  //it will run at initial render
  //again it will never render
  useEffect(()=>{
    console.log("Use Effect is Working");
  },[])
  return(
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}
export default App;*/


import { useEffect } from "react";
function App(){

  //3.Dependency array 

  //it will run at initial render
  //after every subsequent render
  useEffect(()=>{
    document.title="React App"
  },[])
  return(
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}
export default App;