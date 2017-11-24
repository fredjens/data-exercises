# Game of Thrones

### Query data
* Get the official URL
* Count total of episodes
* Get episode with specific ID: 1221410
* Get name of a specific episode
* List all episode from a season
* List all titles alphabetically
* Find all episodes mentioning Stark

### Data mapping
* Map the structure
* Find total runtime of all episodes
* Make a hierarchical representation
* Make a readable text

### Updating data
* Add a new category: "Fantasy"
* Add a new episode

```
const newEpisode = {
  "id": 1221416,
  "name": "The return of the Starks",
  "season": 8,
  "number": 1,
};
```
* Add a `vendor` key to each episode, with the value of `hbo`

__Methods used__
find, filter, map, sort, reduce, includes, spread operator


