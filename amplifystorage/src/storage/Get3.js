import Amplify, { Auth, Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";

function Get3() {
  const [signedURL, setSignedURL] = useState("");
  useEffect(() => {
    const du = async () => {
      const z = await Storage.get("chat2.png", {
        download: true,
        progressCallback(progress) {
          console.log(`Downloaded: ${progress.loaded}/${progress.total}`);
        },
      });
      setSignedURL(z);
    };
    du()
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

export default Get3;
