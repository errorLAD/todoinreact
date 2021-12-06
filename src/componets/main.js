
import '../App.css';
import  Todo  from "./Header";
import  Sidebar  from "./sidebar";
import  Content  from "./content";
import  Rightsidebar from "./rightsidebar"

const Main = () => { 
  return( 
<>
      <Todo />
      <div class="grid grid-cols-3 gap-4">
         <div><Sidebar /></div>
         <div><Content /></div>
         <div><Rightsidebar /></div>
      </div>
</>
)
}

export default Main;
