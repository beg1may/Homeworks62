import React from 'react';
import DishForm from "../../components/DishForm/Juise";
import {Dish} from "../../types";

interface Props {
    onCreate: (dish: Dish) => void;
}

const NewJuise: React.FC<Props> = ({onCreate}) => {
    return (
        <div className="row mt-2">
            <div className="col">
                <DishForm onSubmit={onCreate}/>
            </div>
        </div>
    );
};

export default NewJuise;

