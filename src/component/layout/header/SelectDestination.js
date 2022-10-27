import { useHome } from "../../../context/HomeContext";

function SelectDestination({
  display = "",
  size,
  firstOption,
  provinceId,
  onChange,
}) {
  const { province } = useHome();
  return (
    <div className="d-flex">
      <i className={`fa-solid fa-magnifying-glass ms-1 mt-search ${display}`} />
      <select
        className={`border border-0 mt-15 ms-1 text-secondary ${size} rounded-3`}
        value={provinceId}
        onChange={onChange}
      >
        <option value="" disabled>
          {firstOption || "Where are you going?"}
        </option>
        {province?.map((item, idx) => (
          <option key={idx} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectDestination;
