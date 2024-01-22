import "./App.css";
import Profile from "./componets/Profile";

function App() {
  return (
    <>
      <div id="container">
        <Profile name="Jack" city="London" followers={80} likes={803} photos={1.4} profileImg="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png"/>
        <Profile name="Alice" city="Singapore" followers={100} likes={915} photos={1.9} profileImg="https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png"/>
        <Profile name="Alice" city="Singapore" followers={55} likes={40} photos={1} profileImg="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"/>
        </div>
    </>
  );
}

export default App;
