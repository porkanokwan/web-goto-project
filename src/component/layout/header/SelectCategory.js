import { useHome } from "../../../context/HomeContext";

function SelectCategory({ size }) {
  const { category } = useHome();
  return (
    <div className="d-flex">
      <i className="fa-solid fa-magnifying-glass ms-1 mt-2" />
      <select
        className="border border-0 mt-15 ms-1 text-secondary w-100 rounded-3"
        defaultValue={""}
      >
        <option value="" disabled>
          Choose Category...
        </option>
        {category?.map((item, idx) => (
          <option key={idx} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectCategory;
