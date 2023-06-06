import './App.css';
import "./Buttons.css";
import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div class="wrapper_outer">
      <div class="wrapper">
        <div class="parallax_section">
          <div class="parallax_bg">
            <h2>RKSI'S ORCHESTRA</h2>
          </div>
          <h4>For entertainment only!! I apologize for any offense<br/>Click a Section to Start<br/>@rksi_gu</h4>
        </div>
        <div class="parallax_section">
          <div class="parallax_bg2">
            <b href="#">Violin</b>
            <b href="#">Viola</b>
            <b href="#">Cello</b>
            <b href="#"> Bass</b>
            <b href="#">Harp</b>
            <br></br>
            <c href="#" onclick="myFunction()">Clarinet</c>
            <c href="#">Flute</c>
            <c href="#">Oboe</c>
            <c href="#">Piccolo</c>
            <c href="#">Bassoon</c>
            <c href="#">Sax</c>
            <br></br>
            <d href="#">FHorn</d>
            <d href="#">Trumpet</d>
            <br></br>
            <e href="#">Trombone</e>
            <e href="#">Euph</e>
            <e href="#">Tuba</e>
            <e href="#">Perc</e>
            <e href="#">Piano</e>

            <script>
              function myFunction() {
                alert("The best instrument :)")
              }
            </script>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
