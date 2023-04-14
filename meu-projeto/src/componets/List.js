import Item from './Item'

function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}  />
                <Item marca="Cavalo"  ano_lancamento={1245} />
                <Item marca="Macaco"  ano_lancamento={2743} />
                
            </ul>
        </>
    )
};  

export default List