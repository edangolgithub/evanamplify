import {Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";


function Get2() {
  const [signedURL, setSignedURL] = useState("");
  useEffect(() => {
 
    const su = async () => {
      const y = await Storage.get("chat2.png", {
        level: "public", // defaults to `public`
        //identityId: "edangol", // id of another user, if `level: protected`
        download: false, // defaults to false
        expires: 100, // validity of the URL, in seconds. defaults to 900 (15 minutes)
        contentType: "image/png", // set return content type, eg "text/html"
      });
      setSignedURL(y);
    };
   su()
    return () => {};
  }, []);

 
  return (
    <div className="App">

      <a href={signedURL} rel="noreferrer" target="_blank">
        {signedURL}
      </a>
      
    </div>
  );
}

export default Get2;
