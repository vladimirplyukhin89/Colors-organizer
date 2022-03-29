import StarRating from "./StarRating";
import { FaTrash } from 'react-icons/fa';
import { useColors } from './ColorProvider';

function Color({
    id,
    title,
    color,
    rating,
}) {
    const { rateColor, removeColor } = useColors();
    return (
        <section style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
            <h1>{title}</h1>
            <button
                onClick={() => removeColor(id)}
                style={{ cursor: 'pointer' }}
            >
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating
                selectedStars={rating}
                onRate={rating => rateColor(id, rating)}
            />
        </section>
    );
};

export default Color;