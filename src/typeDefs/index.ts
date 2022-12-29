const typeDefs = `#graphql
  type ImageJpg {
    image_url: String
  }

  type Images {
    jpg: ImageJpg
  }

  type Anime {
    title: String
    images: Images
  }

  type AnimeSearch {
    data: [Anime]
  }

  type Query {
    animeSearch: AnimeSearch
  }
`;

export default typeDefs;
