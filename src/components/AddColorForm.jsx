import useInput from '../hooks/useInput';
import { useColors } from '../components/ColorProvider';
import '../App.css';

function AddColorForm() {
    const [titleProps, resetTitle] = useInput('');
    const [colorProps, resetColor] = useInput('#000000');
    const { addColor } = useColors();

    const submit = e => {
        e.preventDefault();

        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}
            style={{ padding: '1rem' }}>
            <input
                {...titleProps}
                type="text"
                placeholder="color title..."
                required />
            <input
                {...colorProps}
                type="color"
                required />
            <button>ADD</button>
        </form>
    );
};

export default AddColorForm;