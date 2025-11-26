import { Xtream } from "@iptv/xtream-api";

const xtream = new Xtream({
  url: process.env.url,
  username: process.env.username,
  password: process.env.password,
});

// const result = await xtream.getProfile();
// const result = await xtream.getServerInfo();

// const result = await xtream.getChannelCategories();
// const result = await xtream.getMovieCategories();
// const result = await xtream.getShowCategories();

// const result = await xtream.getChannels();
// const result = await xtream.getMovies({
//   categoryId: 387,
//   page: 1,
//   limit: 50,
// });

// const result = await xtream.getMovie({
//   movieId: 734573,
// });

// const result = await xtream.generateStreamUrl({
//   type: "movie",
//   streamId: 734573,
//   extension: "mp4",
// });

const result = await xtream.getChannelCategories();
console.log(result);
/* outputs
[
  {
    category_id: 1,
    category_name: 'Category 1',
    parent_id: 0,
  },
  {
    category_id: 2,
    category_name: 'Category 2',
    parent_id: 0,
  },
]
*/
