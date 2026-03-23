import CardGrid from '../components/Cards/CardGrid';
import PokemonCard from '../components/Pokemon/PokemonCard';

const PokemonListData = [
    {
        code: 1,
        name: "Bulbasaur",
        types: ["Grass", "Poison"],
        hp: 45,
        atk: 49,
        def: 49,
    },
    {
        code: 2,
        name: "Ivysaur",
        types: ["Grass", "Poison"],
        hp: 60,
        atk: 62,
        def: 63,
    },
    {
        code: 3,
        name: "Venusaur",
        types: ["Grass", "Poison"],
        hp: 80,
        atk: 82,
        def: 83,
    },
]

const Catalog = () => {
    return (
        <CardGrid
        gridItems={PokemonListData.map(o => {
            return (
                <PokemonCard data={o} key={o.code}/>
            );
        })} />
    );
}

export default Catalog;