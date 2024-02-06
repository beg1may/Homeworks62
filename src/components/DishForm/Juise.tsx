import React, { useState } from 'react';
import { Drink, Dish } from "../../types";

interface Props {
    onSubmit: (drink: Drink) => void;
}

const Juice: React.FC<Props> = ({ onSubmit }) => {
    const [drinks, setDrinks] = useState<Dish[]>([
        {
            id: '1',
            name: 'Сок',
            description: '',
            image: '',
            price: '',
        },
        {
            id: '2',
            name: 'Кофе',
            description: '',
            image: '',
            price: '',
        },
    ]);

    const changeDrink = (id: string, field: keyof Dish, value: string | number) => {
        setDrinks(prevDrinks =>
            prevDrinks.map(drink =>
                drink.id === id ? { ...drink, [field]: value } : drink
            )
        );
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit({
            id: Math.random().toString(),
            ...drinks,
            price: parseFloat(drinks.price),
        });
    };

    return (
        <div onSubmit={onFormSubmit}>
            {drinks.map(drink => (
                <form key={drink.id} onSubmit={(e) => onFormSubmit(e, drink.id)}>
                    <h4>{drink.name}</h4>
                    <div className="form-group">
                        <p
                            className="form-control"
                            contentEditable
                            onBlur={(e) => changeDrink(drink.id, 'name', e.target.innerText)}
                        >{drink.name}</p>
                    </div>
                    <div className="form-group">
                        <p
                            className="form-control"
                            contentEditable
                            onBlur={(e) => changeDrink(drink.id, 'description', e.target.innerText)}
                        >{drink.description}</p>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={drink.image}
                            onChange={(e) => changeDrink(drink.id, 'image', e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <p
                            className="form-control"
                            contentEditable
                            onBlur={(e) => changeDrink(drink.id, 'price', e.target.innerText)}
                        >{drink.price}</p>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Create</button>                </form>
            ))}
        </div>
    );
};

export default Juice;
