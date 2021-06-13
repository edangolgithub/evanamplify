import Amplify, { Auth, Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";


function Get1() {
  const [signedURL, setSignedURL] = useState("");
  useEffect(() => {
    const ans = async () => {
      const x = await Storage.get("chat2.png");
      setSignedURL(x); // get key from Storage.list
    };
   
    ans();
    return () => {};
  }, []);

  
  return (
    <div className="App">

      <a href={signedURL} rel="noreferrer" target="_blank">
        download
      </a>
      
    </div>
  );
}

export default Get1;
