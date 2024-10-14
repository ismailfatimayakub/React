import BlogList from "./BlogList";
import useFetch from "./useFetch"; // Assuming you have the useFetch hook implemented

const Home = () => {
  // Using the useFetch custom hook to fetch data
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}

export default Home;
