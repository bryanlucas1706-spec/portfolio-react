//criação do menu para a tabuada
const Menu = ({numero, onChange}) => {
    const menu = [];

    for (let x = 1; x <= 10; x++) {
        menu.push(
            <option key={x} value={x}>
                {x}
            </option>
        )
    }
    return (
        <select onChange={onChange} numero={numero}>
            {menu}
        </select>
    )
};
export default Menu;
