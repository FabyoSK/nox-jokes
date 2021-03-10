import { useEffect, useState } from "react";

export function Jokes() {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    fetch("http://api.icndb.com/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.value.joke));
  }, []);
  return <h1>{joke}</h1>;
}
