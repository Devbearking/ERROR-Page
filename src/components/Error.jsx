import React from "react";
import Image from "./Image";


function Error() {
  return (
    <div className="container">
    <div className="row">
    <div className="image">
    <Image />
    </div>
      <div className="col">
        <h1 className="error-text">503 Service Unavailable</h1>
        <div className="col">
        <h3 className="error-p">
          The server is currently unable to handle the request due to a
          temporary overloading or maintenance of the server. The implication is
          that this is a temporary condition which will be alleviated after some
          delay.
        </h3>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Error;
