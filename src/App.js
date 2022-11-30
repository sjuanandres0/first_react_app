import React from "react";
import Juan2 from "./testJuan/juan/Juan2";
import JuanBody from "./testJuan/juan/JuanBody";
import JuanHeader from "./testJuan/juan/JuanHeader";
import Header from "./components/Layout/Header";

const App = () => {
  let userConnected = {
    name: 'Juan',
    surname: 'Simonetti'
  }
  
  return (
    // <React.Fragment>
    //   <Header />
    // </React.Fragment>
    <div>
      <JuanHeader user={userConnected} />
      {/* <JuanBody /> */}
      <Juan2 />
    </div>
  );
};

export default App;
