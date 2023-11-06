import "../css/list.css";
import Card from "./bookcard";

const List = ({ showcard }) => {
  return (
    <div className="Category-list">
      <section className="Category-name">Genre</section>
      <section className="scroll">
        <Card showcard={showcard} />
        <Card showcard={showcard} />
        <Card showcard={showcard} />
        <Card showcard={showcard} />
        <Card showcard={showcard} />
        <Card showcard={showcard} />
        <Card showcard={showcard} />
        <Card showcard={showcard} />
        <Card showcard={showcard} />
        <Card showcard={showcard} />
      </section>
    </div>
  );
};
export default List;
