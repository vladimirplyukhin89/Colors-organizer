import StarRating from "./StarRating";
import { FaTrash } from 'react-icons/fa';

const Color = ({
    id,
    title,
    color,
    rating,
    onRemove = f => f,
    onRate = f => f }) => {
    return (
        <section style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
            <h1>{title}</h1>
            <button
                onClick={() => onRemove(id)}
                style={{ cursor: 'pointer' }}
            >
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating
                selectedStars={rating}
                onRate={rating => onRate(id, rating)}
            />
        </section>
    );
};

export default Color;