//estrutura da tabuada
const Tabuada = ({numero}) => {

    const linhas_tabu = [];

    for (let x = 1; x <= 10; x++) {

        linhas_tabu.push(
            <tr key={x}>
                <td>{numero}</td>
                <td>x</td>
                <td>{x}</td>
                <td>=</td>
                <td>{numero*x}</td>
            </tr>

        )
    }
    return (
        <table>
            <tbody>{linhas_tabu}</tbody>
        </table>
    )
};
export default Tabuada;