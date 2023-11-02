import Navbar from "../components/Navbar";

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="jumbotron text-center">
        <h2 className="display-4"> About-us</h2>
        <p className="lead"> This is simple About us</p>
        <div>
          <div className="container">
            <section>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                omnis eveniet corporis eligendi saepe nesciunt blanditiis natus
                enim expedita aperiam! Est, rerum. Quae, sapiente ullam vero
                provident tempore possimus velit!
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutPage;
