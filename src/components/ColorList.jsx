import { useContext } from 'react';
import { ColorContext } from '../index';
import Color from "./Color";

const ColorList = () => {
    const { colors } = useContext(ColorContext);
    if (!colors.length) return <div>No colors listed.</div>;
    return (
        <div>
            {
                colors.map(color =>
                    <Color
                        key={color.id}
                        {...colors}
                    />)
            }
        </div>
    );
};

export default ColorList;