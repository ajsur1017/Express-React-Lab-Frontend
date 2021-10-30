function Home(props) {
  const homeImg = {
    height: "400px",
    width: "700px",
  }
  return <div>
    <h1>Welcome!</h1>
    <p id="homeP"> This is my portfolio, please feel free to stop by from time to time to see some of my works, and please dont hesitate to reach out to me.</p>
    <img src="https://static.vecteezy.com/system/resources/previews/002/949/141/non_2x/programming-code-coding-or-hacker-background-vector.jpg" alt="its broken" style={homeImg}/>
  </div>;
}

export default Home;