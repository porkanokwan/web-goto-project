function ChooseCategory({ onChange, categoryId }) {
  return (
    <>
      <div>
        <input
          type="radio"
          id="retaurant"
          name="category"
          value="2"
          onChange={onChange}
          checked={categoryId == 2}
        />
        <label className="me-3 ms-1">ร้านอาหาร/คาเฟ่(Restaurant & Cafe)</label>
      </div>

      <div>
        <input
          type="radio"
          id="street-food"
          name="category"
          value="3"
          onChange={onChange}
          checked={categoryId == 3}
        />
        <label className="me-3 ms-1">อาหารริมทาง (Street Food)</label>
      </div>

      <div>
        <input
          type="radio"
          id="nightlife"
          name="category"
          value="4"
          onChange={onChange}
          checked={categoryId == 4}
        />
        <label className="me-3 ms-1">สถานบันเทิง(NightLife)</label>
      </div>

      <div>
        <input
          type="radio"
          id="attraction"
          name="category"
          value="1"
          onChange={onChange}
          checked={categoryId == 1}
        />
        <label className="me-3 ms-1">สถานที่ท่องเที่ยว(Attractions)</label>
      </div>
    </>
  );
}

export default ChooseCategory;
