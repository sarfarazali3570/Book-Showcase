const books = {
    fictionBooks: [
      {
        id: 1,
        title: "The Goldfinch",
        author: "Donna Tartt",
        year: 2013,
        genre: "Literary Fiction",
        description: "A young boy in New York City is taken in by a wealthy family after his mother is killed in a bombing at the Metropolitan Museum of Art.",
        coverImage: "https://covers.openlibrary.org/b/isbn/0316055441-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 2,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        year: 2008,
        genre: "Dystopian Fiction",
        description: "In a dystopian future, teenagers are forced to participate in a televised death match.",
        coverImage: "https://covers.openlibrary.org/b/isbn/0439023483-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Tragedy",
        description: "A mysterious millionaire throws extravagant parties in 1920s New York, all in pursuit of a lost love.",
        coverImage: "https://covers.openlibrary.org/b/isbn/0743273567-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 4,
        title: "The Light Runner",
        author: "Ally Walker",
        year: 2025,
        genre: "Thriller",
        description: "A young psychiatrist becomes entangled in a mystery surrounding her high-profile patient’s wife’s death.",
        coverImage: "https://m.media-amazon.com/images/I/61VhHUck2mL._AC_UF1000,1000_QL80_.jpg", 
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 5,
        title: "Daughter of Egypt",
        author: "Marie Benedict",
        year: 2026,
        genre: "Historical Fiction",
        description: "A tale intertwining the lives of Lady Evelyn Herbert and Pharaoh Hatshepsut, exploring themes of legacy and empowerment.",
        coverImage: "https://covers.openlibrary.org/b/isbn/1234567891-L.jpg", 
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 6,
        title: "Wolf Hall",
        author: "Hilary Mantel",
        year: 2009,
        genre: "Historical Fiction",
        description: "A detailed portrayal of Thomas Cromwell's rise to power in the court of Henry VIII.",
        coverImage: "https://covers.openlibrary.org/b/isbn/0312429983-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 7,
        title: "The Essex Serpent",
        author: "Sarah Perry",
        year: 2016,
        genre: "Historical Fiction",
        description: "A widow and a vicar investigate reports of a mythical serpent in Victorian England.",
        coverImage: "https://covers.openlibrary.org/b/isbn/0062670387-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 8,
        title: "The Idiot",
        author: "Elif Batuman",
        year: 2017,
        genre: "Literary Fiction",
        description: "A young woman's first year at Harvard and her experiences with language, love, and self-discovery.",
        coverImage: "https://covers.openlibrary.org/b/isbn/1594205612-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 9,
        title: "Social Creature",
        author: "Tara Isabella Burton",
        year: 2018,
        genre: "Thriller",
        description: "A dark tale of obsession and deceit set in New York's high society.",
        coverImage: "https://covers.openlibrary.org/b/isbn/0385543522-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 10,
        title: "The Wager",
        author: "David Grann",
        year: 2023,
        genre: "Historical Narrative",
        description: "A gripping account of shipwreck, mutiny, and survival in the 18th century.",
        coverImage: "https://covers.openlibrary.org/b/isbn/0385534264-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 11,
        title: "Between the World and Me",
        author: "Ta-Nehisi Coates",
        year: 2015,
        genre: "Memoir",
        description: "A letter to the author's son, discussing the realities of being Black in America.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9780812993547-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 12,
        title: "The New Jim Crow: Mass Incarceration in the Age of Colorblindness",
        author: "Michelle Alexander",
        year: 2010,
        genre: "Social Justice",
        description: "An examination of racial discrimination in the U.S. criminal justice system.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9781595586438-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
    ],
    nonFictionBooks: [
      {
        id: 13,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        year: 2011,
        genre: "History",
        description: "An exploration of humanity's creation and evolution, examining how biology and history have defined us.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 14,
        title: "The Immortal Life of Henrietta Lacks",
        author: "Rebecca Skloot",
        year: 2010,
        genre: "Biography",
        description: "The story of Henrietta Lacks and the immortal cell line, HeLa, that came from her cancer cells in 1951.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9781400052189-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 15,
        title: "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
        author: "Laura Hillenbrand",
        year: 2010,
        genre: "Biography",
        description: "A biography of Louis Zamperini, a former Olympic track star who survived a plane crash in WWII.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9781400064168-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 16,
        title: "The Sixth Extinction: An Unnatural History",
        author: "Elizabeth Kolbert",
        year: 2014,
        genre: "Science",
        description: "An account of the mass extinction unfolding before our eyes, and the history of life on Earth.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9780805092998-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 17,
        title: "The Emperor of All Maladies: A Biography of Cancer",
        author: "Siddhartha Mukherjee",
        year: 2010,
        genre: "Medical",
        description: "A comprehensive history of cancer, from its first documented appearances to the modern era.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9781439107959-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 18,
        title: "In Cold Blood",
        author: "Truman Capote",
        year: 1966,
        genre: "True Crime",
        description: "A true account of the brutal murder of a Kansas family in 1959 and the subsequent investigation.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9780679745587-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 19,
        title: "Cosmos",
        author: "Carl Sagan",
        year: 1980,
        genre: "Science",
        description: "A personal voyage through the universe, exploring science, philosophy, and the human experience.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9780345331359-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 20,
        title: "Between the World and Me",
        author: "Ta-Nehisi Coates",
        year: 2015,
        genre: "Memoir",
        description: "A letter to the author's son, discussing the realities of being Black in America.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9780812993547-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 21,
        title: "The New Jim Crow: Mass Incarceration in the Age of Colorblindness",
        author: "Michelle Alexander",
        year: 2010,
        genre: "Social Justice",
        description: "An examination of racial discrimination in the U.S. criminal justice system.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9781595586438-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 22,
        title: "The Lost City of Z: A Tale of Deadly Obsession in the Amazon",
        author: "David Grann",
        year: 2009,
        genre: "Adventure",
        description: "The story of British explorer Percy Fawcett's quest to find an ancient lost city in the Amazon.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9780385513531-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 17,
        title: "Dune",
        author: "Frank Herbert",
        year: 1965,
        genre: "Science Fiction, Adventure",
        description: "A young nobleman becomes embroiled in a complex struggle for control of a desert planet's valuable resource, the spice melange, while uncovering his own destiny.",
        coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 18,
        title: "Neuromancer",
        author: "William Gibson",
        year: 1984,
        genre: "Cyberpunk, Science Fiction",
        description: "A washed-up computer hacker is hired for one last job: to break into a powerful AI system. The novel explores themes of virtual reality and artificial intelligence.",
        coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
    ],
    sciFiBooks: [
      {
        id: 19,
        title: "The Genetic Book of the Dead",
        author: "Richard Dawkins",
        year: 2024,
        genre: "Evolutionary Biology",
        description: "A Darwinian exploration of natural selection from a gene's perspective, offering a colorful tour of the natural kingdom.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9781801101890-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 20,
        title: "Alien Earths",
        author: "Lisa Kaltenegger",
        year: 2024,
        genre: "Astrophysics",
        description: "An astrophysicist's vivid journey through the cosmos, discussing the search for extraterrestrial life on distant planets.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9780063296206-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 21,
        title: "Nature’s Ghosts",
        author: "Sophie Yeo",
        year: 2024,
        genre: "Environmental Science",
        description: "An elegant prose reminding us of the world we've lost due to human impact, emphasizing the concept of shifting baseline syndrome.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9780008606192-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id:22,
        title: "Why We Remember",
        author: "Charan Ranganath",
        year: 2024,
        genre: "Neuroscience",
        description: "An exploration into how our identity is formed by memories and how we can take control by choosing what to remember.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9780593087196-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id:23,
        title: "Why We Die",
        author: "Venki Ramakrishnan",
        year: 2024,
        genre: "Biology",
        description: "A Nobel laureate discusses the science of longevity, exploring why we expire and the quest to extend human life.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9780670097999-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id:24,
        title: "This Is Why You Dream",
        author: "Rahul Jandial",
        year: 2024,
        genre: "Neuroscience",
        description: "A neurosurgeon's insight into the evolutionary role of dreams and their transformative potential.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9780241461832-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 25,
        title: "Love Triangle",
        author: "Matt Parker",
        year: 2024,
        genre: "Mathematics",
        description: "A mathematician's entertaining exploration of the omnipresence of triangles in nature and the world around us.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9780241507004-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 26,
        title: "Into the Clear Blue Sky",
        author: "Rob Jackson",
        year: 2024,
        genre: "Environmental Science",
        description: "An optimistic view on tackling climate change, discussing innovative solutions to restore Earth's atmosphere.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9780241620451-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      }
    ],
    popularBooks: [
      {
        id: 27,
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Dystopian Fiction",
        description: "A chilling tale of a totalitarian regime, where surveillance and mind control are used to suppress individual freedom.",
        coverImage: "https://m.media-amazon.com/images/I/71rpa1-kyvL.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 28,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Southern Gothic",
        description: "The story of a young girl, Scout Finch, growing up in the racially segregated South during the 1930s, through her father, lawyer Atticus Finch.",
        coverImage: "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 29,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Classical Fiction",
        description: "A tragic love story set during the Jazz Age, exploring themes of wealth, class, and the American Dream.",
        coverImage: "https://m.media-amazon.com/images/I/81TLiZrasVL._UF1000,1000_QL80_.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 30,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Romantic Fiction",
        description: "A witty exploration of manners, marriage, and morality in 19th-century England, centering on the relationship between Elizabeth Bennet and Mr. Darcy.",
        coverImage: "https://m.media-amazon.com/images/I/91E9-FyfvGL._AC_UF1000,1000_QL80_.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 31,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        genre: "Fantasy",
        description: "The adventurous journey of Bilbo Baggins, a hobbit who becomes an unlikely hero in a quest to reclaim a stolen treasure.",
        coverImage: "https://m.media-amazon.com/images/I/81uEDUfKBZL.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 32,
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988,
        genre: "Adventure Fiction",
        description: "A young shepherd named Santiago embarks on a journey to find a hidden treasure, learning life lessons along the way.",
        coverImage: "https://m.media-amazon.com/images/I/81ioPZFMeUL._UF1000,1000_QL80_.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 33,
        title: "Moby-Dick",
        author: "Herman Melville",
        year: 1851,
        genre: "Adventure Fiction",
        description: "The obsessive quest of Captain Ahab to kill Moby-Dick, the white whale, explores themes of fate, revenge, and human nature.",
        coverImage: "https://m.media-amazon.com/images/I/71K4OH9CqOL._UF1000,1000_QL80_.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 34,
        title: "Brave New World",
        author: "Aldous Huxley",
        year: 1932,
        genre: "Dystopian Fiction",
        description: "In a future society, technology and conditioning have created a world of perfect happiness, at the cost of individuality and freedom.",
        coverImage: "https://m.media-amazon.com/images/I/91D4YvdC0dL.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 35,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        year: 1866,
        genre: "Psychological Fiction",
        description: "The inner turmoil of a young student, Raskolnikov, who commits a crime and grapples with his guilt and moral philosophy.",
        coverImage: "https://m.media-amazon.com/images/I/71O2XIytdqL._AC_UF1000,1000_QL80_.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 36,
        title: "Frankenstein",
        author: "Mary Shelley",
        year: 1818,
        genre: "Gothic Fiction",
        description: "Victor Frankenstein's ambition leads him to create a monster, resulting in tragedy and exploration of themes like isolation, responsibility, and the dangers of unchecked ambition.",
        coverImage: "https://m.media-amazon.com/images/I/91KEmBm2GVL._AC_UF1000,1000_QL80_.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 37,
        title: "The Sixth Extinction: An Unnatural History",
        author: "Elizabeth Kolbert",
        year: 2014,
        genre: "Science",
        description: "An account of the mass extinction unfolding before our eyes, and the history of life on Earth.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9780805092998-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
      {
        id: 38,
        title: "The Emperor of All Maladies: A Biography of Cancer",
        author: "Siddhartha Mukherjee",
        year: 2010,
        genre: "Medical",
        description: "A comprehensive history of cancer, from its first documented appearances to the modern era.",
        coverImage: "https://covers.openlibrary.org/b/isbn/9781439107959-L.jpg",
        rating: (Math.random() * 4 + 1).toFixed(1)
      },
    ]
  };

  export default books;
  