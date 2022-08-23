import CardItem from "./CardItem";
import Pagination from "./ui/Pagination";

function AllPlace() {
  return (
    <>
      <h1 className="p-5">All Attractions</h1>

      <div className="container-place ms-400">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <div className="mt-250 p-pagination">
        <Pagination />
      </div>
    </>
  );
}

export default AllPlace;
