import { useState, useEffect } from "react";

const getAboutData = async () => {
  const response = await fetch("https://frozen-stream-41139.herokuapp.com/about");
  const data = await response.json();
  return data
};
const Loaded = ({ about }) => (
  <div>
    <h2>{about.name}</h2>
    <h3>{about.email}</h3>
    <p>{about.bio}</p>
    <h3>Check out my GitHub: <a href={about.gitHub}>{about.gitHub}</a></h3>
    <h3>Check out my Linkedin: <a href={about.linkedin}>{about.linkedin}</a></h3>
    <img src={about.headshot} alt="Its Broken"/>
  </div>
);
function About(props) {
  const [about, setAbout] = useState(null);
  useEffect(() => {
    async function load() {
      const data = await getAboutData()
      setAbout(data)
    }
    load()
  }, []);

return about ? <Loaded about={about} /> : <h1>Loading...</h1>;
}

export default About;