const moviesMock = [
  {
    id: '212b0316-a0b9-4b38-a5f0-5045eaab01b1',
    title: 'Man of a Thousand Faces',
    year: 2007,
    cover: 'http://dummyimage.com/160x144.png/cc0000/ffffff',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 1951,
    contentRating: 'R',
    source:
      'http://bigcartel.com/nibh/fusce/lacus/purus/aliquet/at/feugiat.jpg',
    tags: [
      'Drama',
      'Action|Comedy|Sci-Fi',
      'Action|Adventure|Comedy|Romance',
      'Crime|Mystery',
      'Drama',
    ],
  },
  {
    id: '78624428-1b9f-4096-9856-6e8edf9946ce',
    title: 'Orphanage, The (Orfanato, El)',
    year: 2001,
    cover: 'http://dummyimage.com/223x213.png/5fa2dd/ffffff',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    duration: 2031,
    contentRating: 'PG',
    source: 'https://ed.gov/mattis.html',
    tags: ['Drama', 'Drama'],
  },
  {
    id: '9943ee3c-7e12-479d-87f6-4d0c2aa0c2c7',
    title: 'Out of Africa',
    year: 2009,
    cover: 'http://dummyimage.com/230x146.png/cc0000/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 1900,
    contentRating: 'NC-17',
    source:
      'http://bloglines.com/eget/orci/vehicula/condimentum/curabitur/in/libero.jsp',
    tags: ['Drama', 'Drama|Sci-Fi|Thriller', 'Drama|Thriller', 'Horror'],
  },
  {
    id: '49cda4a3-a83a-46f3-9c9b-70ec48060842',
    title: 'Assassination of Richard Nixon, The',
    year: 1996,
    cover: 'http://dummyimage.com/159x219.png/cc0000/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 1978,
    contentRating: 'G',
    source: 'http://ftc.gov/condimentum/neque/sapien/placerat/ante/nulla.xml',
    tags: ['Comedy|Drama', 'Documentary', 'Crime|Drama|Film-Noir|Mystery'],
  },
  {
    id: '40137d14-c3e0-47fb-a825-260ba7a197af',
    title: 'This Is the Night',
    year: 1994,
    cover: 'http://dummyimage.com/229x193.png/dddddd/000000',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 1895,
    contentRating: 'PG',
    source: 'http://jigsy.com/tincidunt.png',
    tags: ['Horror', 'Drama'],
  },
  {
    id: 'c0af4512-28ba-4ad7-801f-5afe2daf8bfc',
    title: 'Kite Runner, The',
    year: 2008,
    cover: 'http://dummyimage.com/123x139.png/cc0000/ffffff',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    duration: 1891,
    contentRating: 'R',
    source:
      'http://over-blog.com/imperdiet/et/commodo/vulputate/justo/in/blandit.jpg',
    tags: [
      'Action|Adventure|Sci-Fi',
      'Documentary|Drama',
      'Comedy',
      'Adventure|Drama',
    ],
  },
  {
    id: 'c6813bcf-8e03-48a8-a65b-d78a7d30a76d',
    title: 'White Sands',
    year: 2006,
    cover: 'http://dummyimage.com/220x129.png/ff4444/ffffff',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 1944,
    contentRating: 'G',
    source: 'https://go.com/est.json',
    tags: [
      'Western',
      'Documentary',
      'Action|Adventure|Animation|Fantasy|Sci-Fi',
      'Drama|Sci-Fi|Thriller',
      'Comedy',
    ],
  },
  {
    id: '6d664105-3cf0-4fe3-a2b8-4baadefe6748',
    title: 'Johnny Mad Dog',
    year: 1989,
    cover: 'http://dummyimage.com/156x107.png/cc0000/ffffff',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 2023,
    contentRating: 'PG',
    source: 'http://php.net/ut/erat/curabitur.js',
    tags: [
      'Documentary',
      'Drama|Film-Noir',
      'Drama|Romance',
      'Action|Thriller',
      'Children|Comedy',
    ],
  },
  {
    id: '6a7d9189-0a72-47fe-8bff-e46332b18779',
    title: 'Mayday at 40,000 Feet!',
    year: 2008,
    cover: 'http://dummyimage.com/205x171.png/cc0000/ffffff',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    duration: 1889,
    contentRating: 'PG',
    source: 'http://is.gd/tempus/vel/pede.png',
    tags: ['Adventure|Romance|Sci-Fi'],
  },
  {
    id: '16a8ff06-7ffa-4204-80d1-1ad244c882ae',
    title: 'Chase a Crooked Shadow',
    year: 2002,
    cover: 'http://dummyimage.com/131x154.png/ff4444/ffffff',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    duration: 2040,
    contentRating: 'R',
    source: 'https://last.fm/posuere/cubilia/curae/mauris.html',
    tags: [
      'Comedy|Western',
      'Comedy',
      'Film-Noir|Horror',
      'Children|Sci-Fi',
      'Action|Drama',
    ],
  },
];

function filteredMoviesMock(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }
  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock,
};
