import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Card() {
  const [user, setUser] = useState("");

  let { user: username } = useParams();

  useEffect(() => {
    setUser(username);
  }, [username]);

  return (
    <div className="ui raised very padded text container segment" style={{ marginTop: "80px" }}>
      <h3 className="ui header">{user}</h3>
    </div>
  );
}

export default Card;