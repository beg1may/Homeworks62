import React, {useState} from 'react';
import {Dish, DishMutation} from "../../types";

interface Props {
  onSubmit: (dish: Dish) => void;
}

const DishForm: React.FC<Props> = ({onSubmit}) => {
  const [dish, setDish] = useState<DishMutation>({
    name: '',
    description: '',
    image: '',
    price: '',
  });

  const changeDish = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setDish(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onSubmit({
      id: Math.random().toString(),
      ...dish,
      price: parseFloat(dish.price),
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new dish</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={dish.name}
          onChange={changeDish}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          className="form-control"
          value={dish.description}
          onChange={changeDish}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="url"
          name="image"
          id="image"
          className="form-control"
          value={dish.image}
          onChange={changeDish}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          className="form-control"
          value={dish.price}
          onChange={changeDish}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3">Create</button>
    </form>
  );
};

export default DishForm;