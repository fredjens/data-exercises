import gameOfThrones from './data';

/**
 * Get the GoT offical url
 */

gameOfThrones.url

/**
 * Count total GoT episodes
 *
 * A: 67
 */

const { episodes } = gameOfThrones;
const numberOfEpisodes = episodes.length;

/**
 * Get episode with id 4966
 *
 * A: The Ghost of Harrenhal
 */

const episodeWithNumber = episodes
.find(({ id }) => id === 4966);

/**
 * Get name of Episode 3, Sesason 2
 *
 * A: Garden of Bones
 */

const episode = episodes
.find(episode => episode.number === 4 && episode.season === 2)
.name;

/**
 * Get only episodes from season 3
 */

const season3 = episodes
.filter(episode => episode.season === 3)
.map(episode => episode.name);

/**
 * Make a list with all the titles
 * and sort it alphabetically
 * ['Winter is Coming','A Garden of Bones', ...]
 */

const titles = episodes
.map(({ name }) => name)
.sort();

/**
 * Make a list with this structure:
 *
 * [{
 *  title: 'Winter is Coming',
 *  episode: 01-01,
 * }, ... ]
 */

const episodesList = episodes
.map(({ name: title, season, number }) =>
({ title, episode: `${season}-${number}` }));

/**
 * Total playing time of all episodes
 */

const totaleRuntime = episodes
.reduce((total, episode) => total + episode.runtime, 0);

/**
 * Get a list of ID's of every episode summary that is mention Stark
 */

const episodesWithStark = episodes
.filter(({ summary }) => summary.includes('Stark'))
.map(episode => episode.id);

/**
 * Make a hierarchical representation of the episode based on season/episode
 *
 * {
 *  'season-1': {
 *    '4958': {
 *      title: 'Winter is coming',
 *      airdate: '2011-05-29',
 *    },
 *    '4953': {
 *      title: 'The Kingsroad',
 *      airdate: '2011-04-24',
 *    },
 *    ...
 *  },
 *  'seasong-2': {
 *    '4962': {
 *      title: 'The North Remembers',
 *      airdate: '2012-04-01',
 *    }
 *    ...
 *  }
 * }
 */

const hierarchicalEpisodes = episodes.reduce((total, episode) => {
  const { season, name, airdate, id } = episode;
  const seasonName = `season-${season}`;

  return ({
    ...total,
    [seasonName]: {
      ...total[seasonName],
      [id]: { title: name, airdate },
    }
  })
}, {});

/**
 * Make a readable text from the titles and the descriptions
 *
 * <h1>Game of Thrones</h1>
 * <p>Based on the bestselling book series <i>A Song of Ice and Fire</i> by
 * George R.R. Martin, this sprawling new HBO drama is set in a world where
 * summers span decades and winters can last a lifetime. From the scheming
 * south and the savage eastern lands, to the frozen north and ancient Wall
 * that protects the realm from the mysterious darkness beyond, the powerful
 * families of the Seven Kingdoms are locked in a battle for the Iron Throne.
 * This is a story of duplicity and treachery, nobility and honor, conquest and
 * triumph. In the <b>Game of Thrones</b>, you either win or you die.</p>
 *
 * <h2>Winter is Coming</h2>
 * <p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend,
 * King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees
 * after learning of a possible threat to the King's life. Eddard's bastard son Jon
 * Snow must make a painful decision about his own future, while in the distant
 * east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert,
 * by selling his sister in marriage.</p>
 *
 * <h2>The Kingsroad</h2>
 * ....
 */

const story = `
  <h1>${gameOfThrones.name}</h1>
  ${gameOfThrones.summary}
  ${gameOfThrones.episodes.map(episode =>
    `<h2>${episode.name}</h2>
    ${episode.summary}`
  )}
`;

/**
 * Add a new catogory: "Fantasy"
 */

// Mutating
// gameOfThrones.genres.push('Fantasy');

// Non-mutaing

const updateGenre = {
  ...gameOfThrones,
  genres: [...gameOfThrones.genres, 'Fantasy'],
};

const updateGenreFantasy = Object.assign(gameOfThrones, {
  genres: [...gameOfThrones.genres, 'Fantasy'],
});

/**
 * Add a new episode
 */

const newEpisode = {
  "id": 1221416,
  "name": "The return of the Starks",
  "season": 8,
  "number": 1,
};

const gameOfThronesNewEpisode = {
  ...gameOfThrones,
  episodes: [
    ...gameOfThrones.episodes,
    newEpisode,
  ],
}

/**
 * Add a new key
 */

const addVentorToEpisode = (episode) => ({
  ...episode,
  'vendor': 'hbo',
});

const gameOfThronesNewEpisodesWithNewKey = {
  ...gameOfThrones,
  episodes: gameOfThrones.episodes.map(episode => addVentorToEpisode(episode)),
}

/**
 * Generic update function
 */
const addKeyToEpisode = ({ episode, key, value }) => ({
  ...episode, [key]: value
});
