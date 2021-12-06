
import './App.css';
import myMonica from './assets/m1.jpg'
import myJasmi from './assets/jasmin.mp4'
function App() {
  return (
    <div>
      <div style={{border:"solid 1px black",maxWidth:"100vw 598/"}}>
      <h1 className="title red">Your name here</h1>
      <br/>
      <img src="/m2.jpg" />
      <img src={myMonica} />
      <br/>
      
      <video width="320" height="240" controls>

 <source src={myJasmi} type="video/mp4" />

</video>




      </div>

    </div>
    
  );
}

export default App;
 /* 
 





*/