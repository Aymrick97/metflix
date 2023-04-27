import data from "../assets/data.json";
const Section = (props) => {
  return (
    <section className="films">
      <h2>{props.elem.category}</h2>
      <div className="imgFilm">
        {props.elem.images.map((url) => {
          return <img key={url} src={url} alt="" />;
        })}
      </div>
    </section>
  );
};

export default Section;
