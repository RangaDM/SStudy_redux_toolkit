import { useDispatch, useSelector } from "react-redux";
import { addLaptop, laptopSliceSelector } from "../store/reducers/laptopSlice";
import { useRef } from "react";

const LapTopComponent = () => {
  const laptop = useSelector(laptopSliceSelector);
  const dispatch = useDispatch();

  const brand = useRef();
  const price = useRef();
  const ram = useRef();
  const storage = useRef();
  const processor = useRef();

  const addLaptopHandel = () => {
    dispatch(
      addLaptop(
        brand.current.value,
        price.current.value,
        ram.current.value,
        storage.current.value,
        processor.current.value
      )
    );
  };

  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <h4>Add LapTop</h4>
        <input ref={brand} type="text" placeholder="brand" />
        <input ref={price} type="text" placeholder="price" />
        <input ref={ram} type="text" placeholder="ram" />
        <input ref={storage} type="text" placeholder="storage" />
        <input ref={processor} type="text" placeholder="processor" />
        <button onClick={addLaptopHandel}>Add</button>
      </div>
      <h1>Lap Top Component</h1>

      {laptop.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.id}</h1>
            <h2>{item.brand}</h2>
            <h4>{item.price}</h4>
            <h4>{item.spec.ram}</h4>
            <h4>{item.spec.storage}</h4>
            <h4>{item.spec.processor}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LapTopComponent;