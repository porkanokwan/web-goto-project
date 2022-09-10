import CardItem from "../template/CardItem";
import Pagination from "../component/ui/Pagination";

function AllPlace() {
  return (
    <>
      <h1 className="p-5">All Attractions</h1>

      <div className="container-place ms-275 ps-45">
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
