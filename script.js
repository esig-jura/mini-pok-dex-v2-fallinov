/**
 * Exercice : Mini Pokédex
 * @author Steve Fallet <steve.fallet@dvitec.ch>
 * @since 2024-09-01
 */

'use strict';

// Couleur par défaut pour les types de Pokémon non définis
const DEFAULT_COLOR = '#ccc';

// Couleurs pour chaque type de Pokémon
const typeColors = {
    'Électrique': '#FFD700',
    'Plante': '#78C850',
    'Poison': '#A040A0',
    'Feu': '#F08030',
    'Eau': '#6890F0',
    'Normal': '#A8A878',
    'Fée': '#EE99AC',
    'Spectre': '#705898',
    'Combat': '#C03028',
    'Vol': '#A890F0',
    'Glace': '#98D8D8',
    'Roche': '#B8A038',
    'Sol': '#E0C068',
    'Psy': '#F85888'
};

// Tableau d'objets représentant les Pokémon
const pokemons = [
    {
        name: 'Pikachu',
        type: 'Électrique',
        level: 35,
        img: 'pikachu.png'
    },
    { name: 'Bulbizarre', type: 'Plante,Poison', level: 15, img: 'bulbizarre.png' },
    { name: 'Salamèche', type: 'Feu', level: 20, img: 'salameche.png' },
    { name: 'Carapuce', type: 'Eau', level: 10, img: 'carapuce.png' },
    { name: 'Rondoudou', type: 'Normal,Fée', level: 25, img: 'rondoudou.png' },
    { name: 'Ectoplasma', type: 'Spectre,Poison', level: 45, img: 'ectoplasma.png' },
    { name: 'Évoli', type: 'Normal,Combat', level: 22, img: 'evoli.png' },
    { name: 'Dracaufeu', type: 'Feu,Vol', level: 50, img: 'dracaufeu.png' },
    { name: 'Florizarre', type: 'Plante,Poison', level: 55, img: 'florizarre.png' },
    { name: 'Tortank', type: 'Eau', level: 52, img: 'tortank.png' },
    { name: 'Mélofée', type: 'Fée', level: 18, img: 'melofee.png' },
    { name: 'Raichu', type: 'Électrique', level: 40, img: 'raichu.png' },
    { name: 'Magicarpe', type: 'Eau', level: 5, img: 'magicarpe.png' },
    { name: 'Lokhlass', type: 'Eau,Glace', level: 35, img: 'lokhlass.png' },
    { name: 'Onix', type: 'Roche,Sol', level: 30, img: 'onix.png' },
    { name: 'Ronflex', type: 'Normal', level: 45, img: 'ronflex.png' },
    { name: 'Mewtwo', type: 'Psy', level: 70, img: 'mewtwo.png' }
];

// Récupération de la div.pokemon-container
const pokemonContainer = document.querySelector('.pokemon-container');
console.log(pokemonContainer);

// Fonction qui affiche les Pokémon dans le container
function displayPokemons () {
    // Si le tableau est vide on affiche un message d'erreur
    if(pokemons.length < 1) {
        pokemonContainer.innerHTML = '<p>Dracaufeu a tout brûlé, aucun Pokémon ne correspond à ta recherche !</p>';
        return; // Stopper l'exécution de la fonction
    }

    // Parcourir le tableau de Pokémon et créer
    // un paragraph pour chaque Pokémon avec son nom
    for(let pokeball of pokemons) {
        // Récupérer les types du Pokémon parcouru dans un tableau
        const tabTypes = pokeball.type.split(',');
        // La couleur de fond est celle du premier type
        let couleurFond = typeColors[tabTypes[0]] || DEFAULT_COLOR;

        // Test si le pokémon plusieurs types
        // S'il a plusieurs types, on change la couleur de fond par un dégradé
        if(tabTypes.length > 1) {
            // Crée un dégradé de couleur pour les pokémons avec plusieurs types
            couleurFond = `linear-gradient(to right,
                            ${ typeColors[tabTypes[0]] || DEFAULT_COLOR } 50%,
                            ${ typeColors[tabTypes[1]] || DEFAULT_COLOR } 50%
                           );`
        }

        // Ajout les pokemons dans le container
        pokemonContainer.innerHTML +=  `
            <div class="pokemon-card" style="background: ${couleurFond};">
                <img src="images/${ pokeball.img }" alt="${ pokeball.name}">
                <h2>${ pokeball.name }</h2>
                <div>Type: ${ tabTypes.join(' / ') }</div>
                <div>Niveau: ${ pokeball.level }</div>
            </div>
        `;
    }
}

// Appeler la fonction pour afficher les Pokémon
displayPokemons();












