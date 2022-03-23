// Utils
import getData from '../utils/getData';

const Home = async () => {
    const characters = await getData();

    // join() - para que no utilice ninguna forma de separarlo
    const view = `
        <div class="Characters">
            ${characters.results.map(character => `
                <article class="Character-item">
                    <a href="#/${character.id}">
                        <img src="${character.image}" alt="${characters.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
    `

    return view;
};

export default Home;