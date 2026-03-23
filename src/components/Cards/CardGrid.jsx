import './cardsCss.css';

const CardGrid = (
    { gridItems = null }
) => {
    return (
        <section className="cardGrid">
            {gridItems?.map(o=>o)}
        </section>
    );
}

export default CardGrid;