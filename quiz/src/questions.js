const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Madrid", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Paris", isCorrect: true },
      { text: "Rome", isCorrect: false }
    ]
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", isCorrect: false },
      { text: "William Shakespeare", isCorrect: true },
      { text: "Leo Tolstoy", isCorrect: false },
      { text: "Jane Austen", isCorrect: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", isCorrect: false },
      { text: "Mars", isCorrect: true },
      { text: "Jupiter", isCorrect: false },
      { text: "Saturn", isCorrect: false }
    ]
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "African Elephant", isCorrect: false },
      { text: "Blue Whale", isCorrect: true },
      { text: "Giraffe", isCorrect: false },
      { text: "Orca", isCorrect: false }
    ]
  },
  {
    question: "In which continent is the Sahara Desert located?",
    answers: [
      { text: "Asia", isCorrect: false },
      { text: "Africa", isCorrect: true },
      { text: "Australia", isCorrect: false },
      { text: "North America", isCorrect: false }
    ]
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H2O", isCorrect: true },
      { text: "O2", isCorrect: false },
      { text: "CO2", isCorrect: false },
      { text: "NaCl", isCorrect: false }
    ]
  },
  {
    question: "Which ocean is the largest?",
    answers: [
      { text: "Atlantic Ocean", isCorrect: false },
      { text: "Indian Ocean", isCorrect: false },
      { text: "Pacific Ocean", isCorrect: true },
      { text: "Arctic Ocean", isCorrect: false }
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", isCorrect: false },
      { text: "Leonardo da Vinci", isCorrect: true },
      { text: "Michelangelo", isCorrect: false },
      { text: "Pablo Picasso", isCorrect: false }
    ]
  },
  {
    question: "What is the smallest prime number?",
    answers: [
      { text: "0", isCorrect: false },
      { text: "1", isCorrect: false },
      { text: "2", isCorrect: true },
      { text: "3", isCorrect: false }
    ]
  },
  {
    question: "Which gas do humans exhale when breathing?",
    answers: [
      { text: "Oxygen", isCorrect: false },
      { text: "Carbon Dioxide", isCorrect: true },
      { text: "Nitrogen", isCorrect: false },
      { text: "Helium", isCorrect: false }
    ]
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", isCorrect: false },
      { text: "Jupiter", isCorrect: true },
      { text: "Saturn", isCorrect: false },
      { text: "Neptune", isCorrect: false }
    ]
  },
  {
    question: "In which year did World War II end?",
    answers: [
      { text: "1945", isCorrect: true },
      { text: "1939", isCorrect: false },
      { text: "1950", isCorrect: false },
      { text: "1942", isCorrect: false }
    ]
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Yuan", isCorrect: false },
      { text: "Yen", isCorrect: true },
      { text: "Won", isCorrect: false },
      { text: "Ringgit", isCorrect: false }
    ]
  },
  {
    question: "Who developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", isCorrect: false },
      { text: "Albert Einstein", isCorrect: true },
      { text: "Nikola Tesla", isCorrect: false },
      { text: "Galileo Galilei", isCorrect: false }
    ]
  },
  {
    question: "Which country is famous for the Great Wall?",
    answers: [
      { text: "Japan", isCorrect: false },
      { text: "China", isCorrect: true },
      { text: "India", isCorrect: false },
      { text: "Thailand", isCorrect: false }
    ]
  },
  {
    question: "What is the freezing point of water in Celsius?",
    answers: [
      { text: "0°C", isCorrect: true },
      { text: "32°C", isCorrect: false },
      { text: "-10°C", isCorrect: false },
      { text: "100°C", isCorrect: false }
    ]
  },
  {
    question: "Which organ purifies blood in the human body?",
    answers: [
      { text: "Heart", isCorrect: false },
      { text: "Kidney", isCorrect: true },
      { text: "Lungs", isCorrect: false },
      { text: "Liver", isCorrect: false }
    ]
  },
  {
    question: "What is the national sport of Japan?",
    answers: [
      { text: "Karate", isCorrect: false },
      { text: "Sumo Wrestling", isCorrect: true },
      { text: "Judo", isCorrect: false },
      { text: "Baseball", isCorrect: false }
    ]
  },
  {
    question: "What is the largest continent?",
    answers: [
      { text: "Africa", isCorrect: false },
      { text: "Asia", isCorrect: true },
      { text: "Europe", isCorrect: false },
      { text: "North America", isCorrect: false }
    ]
  },
  {
    question: "How many sides does a hexagon have?",
    answers: [
      { text: "5", isCorrect: false },
      { text: "6", isCorrect: true },
      { text: "7", isCorrect: false },
      { text: "8", isCorrect: false }
    ]
  },
  {
    question: "What is the hardest natural substance?",
    answers: [
      { text: "Gold", isCorrect: false },
      { text: "Diamond", isCorrect: true },
      { text: "Iron", isCorrect: false },
      { text: "Quartz", isCorrect: false }
    ]
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Osmium", isCorrect: false },
      { text: "Oxygen", isCorrect: true },
      { text: "Oganesson", isCorrect: false },
      { text: "Opium", isCorrect: false }
    ]
  },
  {
    question: "Which is the tallest mountain in the world?",
    answers: [
      { text: "K2", isCorrect: false },
      { text: "Mount Everest", isCorrect: true },
      { text: "Kangchenjunga", isCorrect: false },
      { text: "Makalu", isCorrect: false }
    ]
  },
  {
    question: "Which bird is known as the 'King of Birds'?",
    answers: [
      { text: "Eagle", isCorrect: true },
      { text: "Owl", isCorrect: false },
      { text: "Parrot", isCorrect: false },
      { text: "Peacock", isCorrect: false }
    ]
  },
  {
    question: "Which country invented paper?",
    answers: [
      { text: "Egypt", isCorrect: false },
      { text: "China", isCorrect: true },
      { text: "India", isCorrect: false },
      { text: "Greece", isCorrect: false }
    ]
  },
  {
    question: "What is the capital of Australia?",
    answers: [
      { text: "Sydney", isCorrect: false },
      { text: "Melbourne", isCorrect: false },
      { text: "Canberra", isCorrect: true },
      { text: "Perth", isCorrect: false }
    ]
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Amazon River", isCorrect: true },
      { text: "Nile River", isCorrect: false },
      { text: "Yangtze River", isCorrect: false },
      { text: "Mississippi River", isCorrect: false }
    ]
  },
  {
    question: "Who invented the telephone?",
    answers: [
      { text: "Alexander Graham Bell", isCorrect: true },
      { text: "Thomas Edison", isCorrect: false },
      { text: "Nikola Tesla", isCorrect: false },
      { text: "Guglielmo Marconi", isCorrect: false }
    ]
  },
  {
    question: "Which vitamin is produced when a person is exposed to sunlight?",
    answers: [
      { text: "Vitamin C", isCorrect: false },
      { text: "Vitamin D", isCorrect: true },
      { text: "Vitamin B12", isCorrect: false },
      { text: "Vitamin A", isCorrect: false }
    ]
  },
  {
    question: "What is the national flower of Japan?",
    answers: [
      { text: "Rose", isCorrect: false },
      { text: "Cherry Blossom", isCorrect: true },
      { text: "Lotus", isCorrect: false },
      { text: "Tulip", isCorrect: false }
    ]
  },
  {
    question: "Which blood type is known as the universal donor?",
    answers: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "O Negative", isCorrect: true },
      { text: "AB Positive", isCorrect: false }
    ]
  },
  {
    question: "What is the fastest land animal?",
    answers: [
      { text: "Horse", isCorrect: false },
      { text: "Cheetah", isCorrect: true },
      { text: "Lion", isCorrect: false },
      { text: "Tiger", isCorrect: false }
    ]
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    answers: [
      { text: "Germany", isCorrect: false },
      { text: "France", isCorrect: true },
      { text: "Italy", isCorrect: false },
      { text: "Spain", isCorrect: false }
    ]
  },
  {
    question: "Which is the smallest planet in our solar system?",
    answers: [
      { text: "Mars", isCorrect: false },
      { text: "Mercury", isCorrect: true },
      { text: "Venus", isCorrect: false },
      { text: "Pluto", isCorrect: false }
    ]
  },
  {
    question: "What is the boiling point of water in Celsius?",
    answers: [
      { text: "50°C", isCorrect: false },
      { text: "100°C", isCorrect: true },
      { text: "120°C", isCorrect: false },
      { text: "80°C", isCorrect: false }
    ]
  },
  {
    question: "Which planet has the most moons?",
    answers: [
      { text: "Earth", isCorrect: false },
      { text: "Jupiter", isCorrect: true },
      { text: "Mars", isCorrect: false },
      { text: "Neptune", isCorrect: false }
    ]
  },
  {
    question: "Which language has the most native speakers?",
    answers: [
      { text: "English", isCorrect: false },
      { text: "Mandarin Chinese", isCorrect: true },
      { text: "Spanish", isCorrect: false },
      { text: "Hindi", isCorrect: false }
    ]
  },
  {
    question: "What is the largest island in the world?",
    answers: [
      { text: "Iceland", isCorrect: false },
      { text: "Greenland", isCorrect: true },
      { text: "New Guinea", isCorrect: false },
      { text: "Borneo", isCorrect: false }
    ]
  },
  {
    question: "What is the capital of Greece?",
    answers: [
      { text: "Athens", isCorrect: true },
      { text: "Thessaloniki", isCorrect: false },
      { text: "Patras", isCorrect: false },
      { text: "Heraklion", isCorrect: false }
    ]
  },
  {
    question: "Which sea lies to the east of mainland Greece?",
    answers: [
      { text: "Ionian Sea", isCorrect: false },
      { text: "Aegean Sea", isCorrect: true },
      { text: "Mediterranean Sea", isCorrect: false },
      { text: "Black Sea", isCorrect: false }
    ]
  },
  {
    question: "What is the national currency of Greece?",
    answers: [
      { text: "Drachma", isCorrect: false },
      { text: "Euro", isCorrect: true },
      { text: "Lira", isCorrect: false },
      { text: "Pound", isCorrect: false }
    ]
  },
  {
    question: "Who was the king of the Greek gods?",
    answers: [
      { text: "Poseidon", isCorrect: false },
      { text: "Zeus", isCorrect: true },
      { text: "Hades", isCorrect: false },
      { text: "Apollo", isCorrect: false }
    ]
  },
  {
    question: "Which famous temple is located on the Acropolis of Athens?",
    answers: [
      { text: "Parthenon", isCorrect: true },
      { text: "Colosseum", isCorrect: false },
      { text: "Pantheon", isCorrect: false },
      { text: "Temple of Artemis", isCorrect: false }
    ]
  },
  {
    question: "Which ancient city-state was known for its warriors?",
    answers: [
      { text: "Athens", isCorrect: false },
      { text: "Sparta", isCorrect: true },
      { text: "Corinth", isCorrect: false },
      { text: "Delphi", isCorrect: false }
    ]
  },
  {
    question: "Mount Olympus was believed to be the home of:",
    answers: [
      { text: "The Roman Emperors", isCorrect: false },
      { text: "The Greek Gods", isCorrect: true },
      { text: "The Titans", isCorrect: false },
      { text: "The Cyclopes", isCorrect: false }
    ]
  },
  {
    question: "Who wrote the epics 'Iliad' and 'Odyssey'?",
    answers: [
      { text: "Sophocles", isCorrect: false },
      { text: "Homer", isCorrect: true },
      { text: "Aristotle", isCorrect: false },
      { text: "Plato", isCorrect: false }
    ]
  },
  {
    question: "What is the second-largest city in Greece?",
    answers: [
      { text: "Patras", isCorrect: false },
      { text: "Thessaloniki", isCorrect: true },
      { text: "Volos", isCorrect: false },
      { text: "Ioannina", isCorrect: false }
    ]
  },
  {
    question: "Which famous Greek philosopher taught Alexander the Great?",
    answers: [
      { text: "Plato", isCorrect: false },
      { text: "Aristotle", isCorrect: true },
      { text: "Socrates", isCorrect: false },
      { text: "Epicurus", isCorrect: false }
    ]
  },
  {
    question: "What color is the Greek flag along with white?",
    answers: [
      { text: "Blue", isCorrect: true },
      { text: "Red", isCorrect: false },
      { text: "Green", isCorrect: false },
      { text: "Black", isCorrect: false }
    ]
  },
  {
    question: "Which island is the largest in Greece?",
    answers: [
      { text: "Rhodes", isCorrect: false },
      { text: "Crete", isCorrect: true },
      { text: "Lesbos", isCorrect: false },
      { text: "Santorini", isCorrect: false }
    ]
  },
  {
    question: "What is the national drink of Greece?",
    answers: [
      { text: "Ouzo", isCorrect: true },
      { text: "Whiskey", isCorrect: false },
      { text: "Vodka", isCorrect: false },
      { text: "Beer", isCorrect: false }
    ]
  },
  {
    question: "Which Greek island is known for its blue-domed churches?",
    answers: [
      { text: "Santorini", isCorrect: true },
      { text: "Mykonos", isCorrect: false },
      { text: "Rhodes", isCorrect: false },
      { text: "Kos", isCorrect: false }
    ]
  },
  {
    question: "What is the Greek word for 'thank you'?",
    answers: [
      { text: "Yamas", isCorrect: false },
      { text: "Efharisto", isCorrect: true },
      { text: "Kalimera", isCorrect: false },
      { text: "Kalispera", isCorrect: false }
    ]
  },
  {
    question: "Which of these was a wonder of the ancient world in Greece?",
    answers: [
      { text: "The Hanging Gardens of Babylon", isCorrect: false },
      { text: "The Statue of Zeus at Olympia", isCorrect: true },
      { text: "The Lighthouse of Alexandria", isCorrect: false },
      { text: "The Mausoleum at Halicarnassus", isCorrect: false }
    ]
  },
  {
    question: "In which year did Greece host the modern Olympic Games first?",
    answers: [
      { text: "1896", isCorrect: true },
      { text: "1900", isCorrect: false },
      { text: "1924", isCorrect: false },
      { text: "2004", isCorrect: false }
    ]
  },
  {
    question: "Which philosopher was sentenced to death by drinking hemlock?",
    answers: [
      { text: "Aristotle", isCorrect: false },
      { text: "Socrates", isCorrect: true },
      { text: "Plato", isCorrect: false },
      { text: "Democritus", isCorrect: false }
    ]
  },
  {
    question: "What is Greece’s national dish?",
    answers: [
      { text: "Pizza", isCorrect: false },
      { text: "Moussaka", isCorrect: true },
      { text: "Paella", isCorrect: false },
      { text: "Sushi", isCorrect: false }
    ]
  },
  {
    question: "Which Greek island is known as the birthplace of Hippocrates?",
    answers: [
      { text: "Kos", isCorrect: true },
      { text: "Rhodes", isCorrect: false },
      { text: "Crete", isCorrect: false },
      { text: "Delos", isCorrect: false }
    ]
  },
  {
    question: "Which goddess was the Parthenon dedicated to?",
    answers: [
      { text: "Hera", isCorrect: false },
      { text: "Athena", isCorrect: true },
      { text: "Artemis", isCorrect: false },
      { text: "Aphrodite", isCorrect: false }
    ]
  },
  {
    question: "What is the national anthem of Greece called?",
    answers: [
      { text: "Hymn to Liberty", isCorrect: true },
      { text: "Zorba’s Dance", isCorrect: false },
      { text: "March of the Hellenes", isCorrect: false },
      { text: "The Glory of Greece", isCorrect: false }
    ]
  },
  {
    question: "Which is the southernmost point of mainland Greece?",
    answers: [
      { text: "Cape Tainaron", isCorrect: true },
      { text: "Cape Sounion", isCorrect: false },
      { text: "Cape Kafireas", isCorrect: false },
      { text: "Cape Maleas", isCorrect: false }
    ]
  },
  {
    question: "Who was the first king of modern Greece?",
    answers: [
      { text: "Otto of Bavaria", isCorrect: true },
      { text: "Constantine I", isCorrect: false },
      { text: "Alexander", isCorrect: false },
      { text: "Philip II", isCorrect: false }
    ]
  },
  {
    question: "Which ancient Greek physician is known as the 'Father of Medicine'?",
    answers: [
      { text: "Hippocrates", isCorrect: true },
      { text: "Galen", isCorrect: false },
      { text: "Aristarchus", isCorrect: false },
      { text: "Herophilos", isCorrect: false }
    ]
  },
  {
    question: "What is the famous dance associated with Greece?",
    answers: [
      { text: "Sirtaki", isCorrect: true },
      { text: "Tango", isCorrect: false },
      { text: "Waltz", isCorrect: false },
      { text: "Samba", isCorrect: false }
    ]
  },
  {
    question: "Which Greek island is known as the birthplace of Apollo?",
    answers: [
      { text: "Delos", isCorrect: true },
      { text: "Rhodes", isCorrect: false },
      { text: "Naxos", isCorrect: false },
      { text: "Crete", isCorrect: false }
    ]
  },
  {
    question: "What is the Greek alphabet letter equivalent to 'A'?",
    answers: [
      { text: "Alpha", isCorrect: true },
      { text: "Beta", isCorrect: false },
      { text: "Gamma", isCorrect: false },
      { text: "Delta", isCorrect: false }
    ]
  },
  {
    question: "Which city hosted the 2004 Olympic Games?",
    answers: [
      { text: "Athens", isCorrect: true },
      { text: "Beijing", isCorrect: false },
      { text: "Sydney", isCorrect: false },
      { text: "London", isCorrect: false }
    ]
  },
  {
    question: "What is the Greek word for 'freedom'?",
    answers: [
      { text: "Eleftheria", isCorrect: true },
      { text: "Kardia", isCorrect: false },
      { text: "Agapi", isCorrect: false },
      { text: "Thalassa", isCorrect: false }
    ]
  },
  {
    question: "Who was the Greek goddess of love?",
    answers: [
      { text: "Aphrodite", isCorrect: true },
      { text: "Hera", isCorrect: false },
      { text: "Athena", isCorrect: false },
      { text: "Demeter", isCorrect: false }
    ]
  },
  {
    question: "Which Greek mathematician is famous for the theorem about right triangles?",
    answers: [
      { text: "Archimedes", isCorrect: false },
      { text: "Pythagoras", isCorrect: true },
      { text: "Euclid", isCorrect: false },
      { text: "Thales", isCorrect: false }
    ]
  },
  {
    question: "Which Greek island is famous for the Minotaur legend?",
    answers: [
      { text: "Crete", isCorrect: true },
      { text: "Rhodes", isCorrect: false },
      { text: "Corfu", isCorrect: false },
      { text: "Mykonos", isCorrect: false }
    ]
  },
  {
    question: "Which modern democracy is considered the birthplace of democracy?",
    answers: [
      { text: "Rome", isCorrect: false },
      { text: "Athens", isCorrect: true },
      { text: "Sparta", isCorrect: false },
      { text: "Delphi", isCorrect: false }
    ]
  },
  {
    question: "Which Greek poet is known for his fables?",
    answers: [
      { text: "Aesop", isCorrect: true },
      { text: "Homer", isCorrect: false },
      { text: "Sophocles", isCorrect: false },
      { text: "Euripides", isCorrect: false }
    ]
  },
  {
    question: "Which island is known as the 'Emerald of the Ionian Sea'?",
    answers: [
      { text: "Corfu", isCorrect: true },
      { text: "Zakynthos", isCorrect: false },
      { text: "Kefalonia", isCorrect: false },
      { text: "Lefkada", isCorrect: false }
    ]
  },
  {
    question: "Who directed the movie 'Inception'?",
    answers: [
      { text: "Steven Spielberg", isCorrect: false },
      { text: "Christopher Nolan", isCorrect: true },
      { text: "James Cameron", isCorrect: false },
      { text: "Ridley Scott", isCorrect: false }
    ]
  },
  {
    question: "Which film won Best Picture at the Oscars in 1994?",
    answers: [
      { text: "Braveheart", isCorrect: false },
      { text: "Pulp Fiction", isCorrect: false },
      { text: "The Shawshank Redemption", isCorrect: false },
      { text: "Forrest Gump", isCorrect: true }
    ]
  },
  {
    question: "Which actor played the Joker in 'The Dark Knight' (2008)?",
    answers: [
      { text: "Jared Leto", isCorrect: false },
      { text: "Heath Ledger", isCorrect: true },
      { text: "Jack Nicholson", isCorrect: false },
      { text: "Joaquin Phoenix", isCorrect: false }
    ]
  },
  {
    question: "In which movie does the character 'Neo' appear?",
    answers: [
      { text: "Inception", isCorrect: false },
      { text: "The Matrix", isCorrect: true },
      { text: "Tron", isCorrect: false },
      { text: "Blade Runner", isCorrect: false }
    ]
  },
  {
    question: "Which film features the quote 'Here's looking at you, kid'?",
    answers: [
      { text: "Gone with the Wind", isCorrect: false },
      { text: "Casablanca", isCorrect: true },
      { text: "Sunset Boulevard", isCorrect: false },
      { text: "Citizen Kane", isCorrect: false }
    ]
  },
  {
    question: "Who played Jack Dawson in 'Titanic'?",
    answers: [
      { text: "Matt Damon", isCorrect: false },
      { text: "Tom Cruise", isCorrect: false },
      { text: "Leonardo DiCaprio", isCorrect: true },
      { text: "Brad Pitt", isCorrect: false }
    ]
  },
  {
    question: "Which movie features a character named 'Forrest Gump'?",
    answers: [
      { text: "Forrest Gump", isCorrect: true },
      { text: "Cast Away", isCorrect: false },
      { text: "Philadelphia", isCorrect: false },
      { text: "Rain Man", isCorrect: false }
    ]
  },
  {
    question: "Who directed 'Jurassic Park'?",
    answers: [
      { text: "George Lucas", isCorrect: false },
      { text: "James Cameron", isCorrect: false },
      { text: "Peter Jackson", isCorrect: false },
      { text: "Steven Spielberg", isCorrect: true }
    ]
  },
  {
    question: "Which movie won the first Academy Award for Best Picture?",
    answers: [
      { text: "All Quiet on the Western Front", isCorrect: false },
      { text: "Wings", isCorrect: true },
      { text: "Gone with the Wind", isCorrect: false },
      { text: "The Jazz Singer", isCorrect: false }
    ]
  },
  {
    question: "Who played Iron Man in the Marvel Cinematic Universe?",
    answers: [
      { text: "Chris Evans", isCorrect: false },
      { text: "Robert Downey Jr.", isCorrect: true },
      { text: "Mark Ruffalo", isCorrect: false },
      { text: "Chris Hemsworth", isCorrect: false }
    ]
  },
  {
    question: "Which movie features the song 'My Heart Will Go On'?",
    answers: [
      { text: "Titanic", isCorrect: true },
      { text: "Ghost", isCorrect: false },
      { text: "The Bodyguard", isCorrect: false },
      { text: "Pretty Woman", isCorrect: false }
    ]
  },
  {
    question: "Who directed 'The Godfather'?",
    answers: [
      { text: "Brian De Palma", isCorrect: false },
      { text: "Martin Scorsese", isCorrect: false },
      { text: "Francis Ford Coppola", isCorrect: true },
      { text: "Stanley Kubrick", isCorrect: false }
    ]
  },
  {
    question: "Which actor starred as 'The Terminator'?",
    answers: [
      { text: "Sylvester Stallone", isCorrect: false },
      { text: "Arnold Schwarzenegger", isCorrect: true },
      { text: "Bruce Willis", isCorrect: false },
      { text: "Jean-Claude Van Damme", isCorrect: false }
    ]
  },
  {
    question: "Which animated movie features a clownfish named Marlin?",
    answers: [
      { text: "Shark Tale", isCorrect: false },
      { text: "Moana", isCorrect: false },
      { text: "Finding Nemo", isCorrect: true },
      { text: "The Little Mermaid", isCorrect: false }
    ]
  },
  {
    question: "In which film did Tom Hanks say 'Houston, we have a problem'?",
    answers: [
      { text: "Apollo 13", isCorrect: true },
      { text: "Saving Private Ryan", isCorrect: false },
      { text: "Cast Away", isCorrect: false },
      { text: "The Green Mile", isCorrect: false }
    ]
  },
  {
    question: "Who directed 'Pulp Fiction'?",
    answers: [
      { text: "Guy Ritchie", isCorrect: false },
      { text: "Robert Rodriguez", isCorrect: false },
      { text: "Quentin Tarantino", isCorrect: true },
      { text: "Martin Scorsese", isCorrect: false }
    ]
  },
  {
    question: "Which movie is famous for the line 'I see dead people'?",
    answers: [
      { text: "Poltergeist", isCorrect: false },
      { text: "The Others", isCorrect: false },
      { text: "The Sixth Sense", isCorrect: true },
      { text: "The Ring", isCorrect: false }
    ]
  },
  {
    question: "Which actress played Hermione Granger in 'Harry Potter'?",
    answers: [
      { text: "Keira Knightley", isCorrect: false },
      { text: "Natalie Portman", isCorrect: false },
      { text: "Emma Watson", isCorrect: true },
      { text: "Emma Stone", isCorrect: false }
    ]
  },
  {
    question: "Which 1977 film introduced audiences to Luke Skywalker?",
    answers: [
      { text: "Return of the Jedi", isCorrect: false },
      { text: "Star Wars: A New Hope", isCorrect: true },
      { text: "Rogue One", isCorrect: false },
      { text: "The Empire Strikes Back", isCorrect: false }
    ]
  },
  {
    question: "Which actor starred in 'Pirates of the Caribbean' as Jack Sparrow?",
    answers: [
      { text: "Johnny Depp", isCorrect: true },
      { text: "Colin Farrell", isCorrect: false },
      { text: "Orlando Bloom", isCorrect: false },
      { text: "Hugh Jackman", isCorrect: false }
    ]
  },
  {
    question: "Who directed 'Schindler's List'?",
    answers: [
      { text: "Francis Ford Coppola", isCorrect: false },
      { text: "Stanley Kubrick", isCorrect: false },
      { text: "Steven Spielberg", isCorrect: true },
      { text: "Roman Polanski", isCorrect: false }
    ]
  },
  {
    question: "Which movie features a DeLorean time machine?",
    answers: [
      { text: "Back to the Future", isCorrect: true },
      { text: "Looper", isCorrect: false },
      { text: "Time Bandits", isCorrect: false },
      { text: "Bill & Ted's Excellent Adventure", isCorrect: false }
    ]
  },
  {
    question: "Which film won the Oscar for Best Picture in 2020?",
    answers: [
      { text: "1917", isCorrect: false },
      { text: "Parasite", isCorrect: true },
      { text: "Joker", isCorrect: false },
      { text: "Once Upon a Time in Hollywood", isCorrect: false }
    ]
  },
  {
    question: "Which Disney movie features the song 'Let It Go'?",
    answers: [
      { text: "Tangled", isCorrect: false },
      { text: "Frozen", isCorrect: true },
      { text: "Encanto", isCorrect: false },
      { text: "Moana", isCorrect: false }
    ]
  },
  {
    question: "Who played Wolverine in the X-Men movies?",
    answers: [
      { text: "Ryan Reynolds", isCorrect: false },
      { text: "Chris Hemsworth", isCorrect: false },
      { text: "Hugh Jackman", isCorrect: true },
      { text: "Christian Bale", isCorrect: false }
    ]
  },
  {
    question: "Which actress starred in 'La La Land' with Ryan Gosling?",
    answers: [
      { text: "Emma Watson", isCorrect: false },
      { text: "Emma Stone", isCorrect: true },
      { text: "Margot Robbie", isCorrect: false },
      { text: "Jennifer Lawrence", isCorrect: false }
    ]
  },
  {
    question: "Which actor voiced Woody in 'Toy Story'?",
    answers: [
      { text: "Robin Williams", isCorrect: false },
      { text: "Billy Crystal", isCorrect: false },
      { text: "Tom Hanks", isCorrect: true },
      { text: "Tim Allen", isCorrect: false }
    ]
  },
  {
    question: "Who directed 'Avatar'?",
    answers: [
      { text: "Ridley Scott", isCorrect: false },
      { text: "George Lucas", isCorrect: false },
      { text: "James Cameron", isCorrect: true },
      { text: "Peter Jackson", isCorrect: false }
    ]
  },
  {
    question: "Which 1994 Disney film features a lion cub named Simba?",
    answers: [
      { text: "Aladdin", isCorrect: false },
      { text: "Hercules", isCorrect: false },
      { text: "The Lion King", isCorrect: true },
      { text: "Tarzan", isCorrect: false }
    ]
  },
  {
    question: "Which film is about a boxing underdog named Rocky Balboa?",
    answers: [
      { text: "Million Dollar Baby", isCorrect: false },
      { text: "Cinderella Man", isCorrect: false },
      { text: "Rocky", isCorrect: true },
      { text: "Raging Bull", isCorrect: false }
    ]
  },
  {
    question: "Which actress played Katniss Everdeen in 'The Hunger Games'?",
    answers: [
      { text: "Shailene Woodley", isCorrect: false },
      { text: "Jennifer Lawrence", isCorrect: true },
      { text: "Kristen Stewart", isCorrect: false },
      { text: "Emma Watson", isCorrect: false }
    ]
  },
  {
    question: "Which actor starred in 'Cast Away' with a volleyball named Wilson?",
    answers: [
      { text: "Matt Damon", isCorrect: false },
      { text: "George Clooney", isCorrect: false },
      { text: "Tom Hanks", isCorrect: true },
      { text: "Brad Pitt", isCorrect: false }
    ]
  },
  {
    question: "Which film is based on the life of Freddie Mercury?",
    answers: [
      { text: "Rocketman", isCorrect: false },
      { text: "Bohemian Rhapsody", isCorrect: true },
      { text: "Yesterday", isCorrect: false },
      { text: "The Greatest Showman", isCorrect: false }
    ]
  },
  {
    question: "Who directed 'The Lord of the Rings' trilogy?",
    answers: [
      { text: "George Lucas", isCorrect: false },
      { text: "James Cameron", isCorrect: false },
      { text: "Peter Jackson", isCorrect: true },
      { text: "Steven Spielberg", isCorrect: false }
    ]
  },
  {
    question: "Which movie features Hannibal Lecter?",
    answers: [
      { text: "American Psycho", isCorrect: false },
      { text: "Seven", isCorrect: false },
      { text: "Primal Fear", isCorrect: false },
      { text: "The Silence of the Lambs", isCorrect: true }
    ]
  },
  {
    question: "Which Pixar film features a rat who dreams of becoming a chef?",
    answers: [
      { text: "Up", isCorrect: false },
      { text: "Inside Out", isCorrect: false },
      { text: "Coco", isCorrect: false },
      { text: "Ratatouille", isCorrect: true }
    ]
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyperlinks and Text Markup Language", isCorrect: false },
      { text: "Home Tool Markup Language", isCorrect: false },
      { text: "Hyper Text Markup Language", isCorrect: true },
      { text: "Hyper Transfer Markup Language", isCorrect: false }
    ]
  },
  {
    question: "Which language is the official preferred language for modern Android development?",
    answers: [
      { text: "Java", isCorrect: true },
      { text: "Swift", isCorrect: false },
      { text: "C#", isCorrect: false },
      { text: "Kotlin", isCorrect: false }
    ]
  },
  {
    question: "What symbol is used for single-line comments in Python?",
    answers: [
      { text: "#", isCorrect: true },
      { text: "//", isCorrect: false },
      { text: "<!-- -->", isCorrect: false },
      { text: "/* */", isCorrect: false }
    ]
  },
  {
    question: "Which company developed the C# programming language?",
    answers: [
      { text: "Microsoft", isCorrect: true },
      { text: "Apple", isCorrect: false },
      { text: "Google", isCorrect: false },
      { text: "IBM", isCorrect: false }
    ]
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Colorful Style Sheets", isCorrect: false },
      { text: "Creative Style System", isCorrect: false },
      { text: "Cascading Style Sheets", isCorrect: true },
      { text: "Computer Style Sheets", isCorrect: false }
    ]
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    answers: [
      { text: "var", isCorrect: false },
      { text: "const", isCorrect: true },
      { text: "let", isCorrect: false },
      { text: "static", isCorrect: false }
    ]
  },
  {
    question: "What is the file extension for Java source files?",
    answers: [
      { text: ".jav", isCorrect: false },
      { text: ".class", isCorrect: false },
      { text: ".java", isCorrect: true },
      { text: ".jv", isCorrect: false }
    ]
  },
  {
    question: "Which symbol is used for pointers in C?",
    answers: [
      { text: "*", isCorrect: true },
      { text: "&", isCorrect: false },
      { text: "%", isCorrect: false },
      { text: "$", isCorrect: false }
    ]
  },
  {
    question: "Which programming language is known as the 'mother of all languages'?",
    answers: [
      { text: "Fortran", isCorrect: false },
      { text: "C", isCorrect: true },
      { text: "Assembly", isCorrect: false },
      { text: "COBOL", isCorrect: false }
    ]
  },
  {
    question: "What does SQL stand for?",
    answers: [
      { text: "Structured Question Language", isCorrect: false },
      { text: "Sequential Query Language", isCorrect: false },
      { text: "Structured Query Language", isCorrect: true },
      { text: "Standard Query Listing", isCorrect: false }
    ]
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    answers: [
      { text: "<ol>", isCorrect: false },
      { text: "<ul>", isCorrect: true },
      { text: "<li>", isCorrect: false },
      { text: "<list>", isCorrect: false }
    ]
  },
  {
    question: "What year was Python first released?",
    answers: [
      { text: "1989", isCorrect: false },
      { text: "1991", isCorrect: true },
      { text: "1995", isCorrect: false },
      { text: "2000", isCorrect: false }
    ]
  },
  {
    question: "Which programming language is used with the Django framework?",
    answers: [
      { text: "JavaScript", isCorrect: false },
      { text: "Python", isCorrect: true },
      { text: "Ruby", isCorrect: false },
      { text: "PHP", isCorrect: false }
    ]
  },
  {
    question: "Which symbol is used for strict equality in JavaScript?",
    answers: [
      { text: "==", isCorrect: false },
      { text: "===", isCorrect: true },
      { text: "=", isCorrect: false },
      { text: "!=", isCorrect: false }
    ]
  },
  {
    question: "What is the default port for HTTP?",
    answers: [
      { text: "80", isCorrect: true },
      { text: "8080", isCorrect: false },
      { text: "21", isCorrect: false },
      { text: "443", isCorrect: false }
    ]
  },
  {
    question: "Which keyword is used to create a class in Java?",
    answers: [
      { text: "struct", isCorrect: false },
      { text: "class", isCorrect: true },
      { text: "def", isCorrect: false },
      { text: "new", isCorrect: false }
    ]
  },
  {
    question: "What does JSON stand for?",
    answers: [
      { text: "JavaScript Object Notation", isCorrect: true },
      { text: "Java Source Online Network", isCorrect: false },
      { text: "Java Syntax Object Notation", isCorrect: false },
      { text: "JavaScript Online Nodes", isCorrect: false }
    ]
  },
  {
    question: "Which company developed Java?",
    answers: [
      { text: "Sun Microsystems", isCorrect: true },
      { text: "Microsoft", isCorrect: false },
      { text: "Oracle", isCorrect: false },
      { text: "IBM", isCorrect: false }
    ]
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    answers: [
      { text: "The parent object", isCorrect: false },
      { text: "The current object", isCorrect: true },
      { text: "The global scope", isCorrect: false },
      { text: "A function argument", isCorrect: false }
    ]
  },
  {
    question: "Which operator is used to concatenate strings in Java?",
    answers: [
      { text: "&", isCorrect: false },
      { text: "+", isCorrect: true },
      { text: "++", isCorrect: false },
      { text: ".", isCorrect: false }
    ]
  },
  {
    question: "What is the extension of a compiled Java file?",
    answers: [
      { text: ".exe", isCorrect: false },
      { text: ".jav", isCorrect: false },
      { text: ".class", isCorrect: true },
      { text: ".java", isCorrect: false }
    ]
  },
  {
    question: "Which data type is NOT primitive in Java?",
    answers: [
      { text: "int", isCorrect: false },
      { text: "double", isCorrect: false },
      { text: "String", isCorrect: true },
      { text: "char", isCorrect: false }
    ]
  },
  {
    question: "Which function is used to output text in Python?",
    answers: [
      { text: "print()", isCorrect: true },
      { text: "echo()", isCorrect: false },
      { text: "printf()", isCorrect: false },
      { text: "System.out.println()", isCorrect: false }
    ]
  },
  {
    question: "Which keyword is used to define a function in Python?",
    answers: [
      { text: "func", isCorrect: false },
      { text: "def", isCorrect: true },
      { text: "function", isCorrect: false },
      { text: "method", isCorrect: false }
    ]
  },
  {
    question: "Which HTTP method is idempotent?",
    answers: [
      { text: "POST", isCorrect: false },
      { text: "GET", isCorrect: true },
      { text: "PATCH", isCorrect: false },
      { text: "CONNECT", isCorrect: false }
    ]
  },
  {
    question: "Which JavaScript framework was developed by Facebook?",
    answers: [
      { text: "Angular", isCorrect: false },
      { text: "Vue", isCorrect: false },
      { text: "React", isCorrect: true },
      { text: "Ember", isCorrect: false }
    ]
  },
  {
    question: "What does API stand for?",
    answers: [
      { text: "Application Programming Interface", isCorrect: true },
      { text: "Automated Program Integration", isCorrect: false },
      { text: "Applied Programming Instruction", isCorrect: false },
      { text: "Application Processing Interaction", isCorrect: false }
    ]
  },
  {
    question: "Which of these is NOT an OOP principle?",
    answers: [
      { text: "Encapsulation", isCorrect: false },
      { text: "Polymorphism", isCorrect: false },
      { text: "Abstraction", isCorrect: false },
      { text: "Compilation", isCorrect: true }
    ]
  },
  {
    question: "Which SQL command is used to remove a table?",
    answers: [
      { text: "DELETE TABLE", isCorrect: false },
      { text: "DROP TABLE", isCorrect: true },
      { text: "REMOVE TABLE", isCorrect: false },
      { text: "TRUNCATE TABLE", isCorrect: false }
    ]
  },
  {
    question: "What is the time complexity of binary search?",
    answers: [
      { text: "O(n)", isCorrect: false },
      { text: "O(log n)", isCorrect: true },
      { text: "O(n log n)", isCorrect: false },
      { text: "O(1)", isCorrect: false }
    ]
  },
  {
    question: "Which symbol is used for lambda functions in Python?",
    answers: [
      { text: "->", isCorrect: false },
      { text: "lambda", isCorrect: true },
      { text: "::", isCorrect: false },
      { text: "fn", isCorrect: false }
    ]
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answers: [
      { text: "style", isCorrect: true },
      { text: "css", isCorrect: false },
      { text: "font", isCorrect: false },
      { text: "class", isCorrect: false }
    ]
  },
  {
    question: "Which programming language is primarily used for iOS apps?",
    answers: [
      { text: "Java", isCorrect: false },
      { text: "Swift", isCorrect: true },
      { text: "Kotlin", isCorrect: false },
      { text: "C#", isCorrect: false }
    ]
  },
  {
    question: "What does 'git clone' do?",
    answers: [
      { text: "Deletes a repository", isCorrect: false },
      { text: "Copies a repository to local machine", isCorrect: true },
      { text: "Creates a new branch", isCorrect: false },
      { text: "Merges code", isCorrect: false }
    ]
  },
  {
    question: "Which is the first index of an array in most programming languages?",
    answers: [
      { text: "1", isCorrect: false },
      { text: "0", isCorrect: true },
      { text: "-1", isCorrect: false },
      { text: "Depends on language", isCorrect: false }
    ]
  },
  {
    question: "What does the operator '===' mean in JavaScript?",
    answers: [
      { text: "Equal in value", isCorrect: false },
      { text: "Equal in type and value", isCorrect: true },
      { text: "Assignment", isCorrect: false },
      { text: "Not equal", isCorrect: false }
    ]
  },
  {
    question: "Which programming language is known for its use in AI?",
    answers: [
      { text: "COBOL", isCorrect: false },
      { text: "Python", isCorrect: true },
      { text: "Pascal", isCorrect: false },
      { text: "PHP", isCorrect: false }
    ]
  },
  {
    question: "Which Java keyword is used to inherit a class?",
    answers: [
      { text: "extends", isCorrect: true },
      { text: "inherits", isCorrect: false },
      { text: "super", isCorrect: false },
      { text: "derive", isCorrect: false }
    ]
  },
  {
    question: "What is the speed of light in a vacuum?",
    answers: [
      { text: "300,000 km/s", isCorrect: true },
      { text: "150,000 km/s", isCorrect: false },
      { text: "3,000 km/s", isCorrect: false },
      { text: "30,000 km/s", isCorrect: false }
    ]
  },
  {
    question: "Which part of the cell contains the genetic material?",
    answers: [
      { text: "Mitochondria", isCorrect: false },
      { text: "Nucleus", isCorrect: true },
      { text: "Ribosomes", isCorrect: false },
      { text: "Cytoplasm", isCorrect: false }
    ]
  },
  {
    question: "Who proposed the three laws of motion?",
    answers: [
      { text: "Galileo Galilei", isCorrect: false },
      { text: "Isaac Newton", isCorrect: true },
      { text: "Albert Einstein", isCorrect: false },
      { text: "Niels Bohr", isCorrect: false }
    ]
  },
  {
    question: "What type of blood cells help fight infections?",
    answers: [
      { text: "Red blood cells", isCorrect: false },
      { text: "White blood cells", isCorrect: true },
      { text: "Platelets", isCorrect: false },
      { text: "Plasma cells", isCorrect: false }
    ]
  },
  {
    question: "Which organelle is known as the powerhouse of the cell?",
    answers: [
      { text: "Mitochondria", isCorrect: true },
      { text: "Golgi apparatus", isCorrect: false },
      { text: "Nucleus", isCorrect: false },
      { text: "Endoplasmic reticulum", isCorrect: false }
    ]
  },
  {
    question: "What is the SI unit of force?",
    answers: [
      { text: "Watt", isCorrect: false },
      { text: "Newton", isCorrect: true },
      { text: "Joule", isCorrect: false },
      { text: "Pascal", isCorrect: false }
    ]
  },
  {
    question: "What gas do humans inhale to survive?",
    answers: [
      { text: "Carbon dioxide", isCorrect: false },
      { text: "Oxygen", isCorrect: true },
      { text: "Nitrogen", isCorrect: false },
      { text: "Hydrogen", isCorrect: false }
    ]
  },
  {
    question: "Which scientist proposed the theory of relativity?",
    answers: [
      { text: "Albert Einstein", isCorrect: true },
      { text: "Stephen Hawking", isCorrect: false },
      { text: "Max Planck", isCorrect: false },
      { text: "Marie Curie", isCorrect: false }
    ]
  },
  {
    question: "Which organ in the human body is primarily responsible for detoxification?",
    answers: [
      { text: "Liver", isCorrect: true },
      { text: "Kidney", isCorrect: false },
      { text: "Pancreas", isCorrect: false },
      { text: "Stomach", isCorrect: false }
    ]
  },
  {
    question: "What is the most abundant element in the universe?",
    answers: [
      { text: "Oxygen", isCorrect: false },
      { text: "Helium", isCorrect: false },
      { text: "Hydrogen", isCorrect: true },
      { text: "Carbon", isCorrect: false }
    ]
  },
  {
    question: "What is the function of red blood cells?",
    answers: [
      { text: "Fight infections", isCorrect: false },
      { text: "Carry oxygen", isCorrect: true },
      { text: "Produce hormones", isCorrect: false },
      { text: "Digest food", isCorrect: false }
    ]
  },
  {
    question: "Which law explains why airplanes can fly?",
    answers: [
      { text: "Bernoulli’s principle", isCorrect: true },
      { text: "Newton’s first law", isCorrect: false },
      { text: "Ohm’s law", isCorrect: false },
      { text: "Archimedes’ principle", isCorrect: false }
    ]
  },
  {
    question: "What molecule carries genetic instructions?",
    answers: [
      { text: "RNA", isCorrect: false },
      { text: "DNA", isCorrect: true },
      { text: "Protein", isCorrect: false },
      { text: "Lipid", isCorrect: false }
    ]
  },
  {
    question: "Which part of the plant is mainly responsible for photosynthesis?",
    answers: [
      { text: "Root", isCorrect: false },
      { text: "Stem", isCorrect: false },
      { text: "Leaf", isCorrect: true },
      { text: "Flower", isCorrect: false }
    ]
  },
  {
    question: "Which subatomic particle has a negative charge?",
    answers: [
      { text: "Proton", isCorrect: false },
      { text: "Electron", isCorrect: true },
      { text: "Neutron", isCorrect: false },
      { text: "Photon", isCorrect: false }
    ]
  },
  {
    question: "What is the process by which plants lose water vapor?",
    answers: [
      { text: "Transpiration", isCorrect: true },
      { text: "Respiration", isCorrect: false },
      { text: "Photosynthesis", isCorrect: false },
      { text: "Evaporation", isCorrect: false }
    ]
  },
  {
    question: "Which vitamin is produced when the skin is exposed to sunlight?",
    answers: [
      { text: "Vitamin A", isCorrect: false },
      { text: "Vitamin D", isCorrect: true },
      { text: "Vitamin C", isCorrect: false },
      { text: "Vitamin K", isCorrect: false }
    ]
  },
  {
    question: "What is the acceleration due to gravity on Earth?",
    answers: [
      { text: "9.8 m/s²", isCorrect: true },
      { text: "5 m/s²", isCorrect: false },
      { text: "15 m/s²", isCorrect: false },
      { text: "20 m/s²", isCorrect: false }
    ]
  },
  {
    question: "Which blood type is considered the universal donor?",
    answers: [
      { text: "O-", isCorrect: true },
      { text: "AB+", isCorrect: false },
      { text: "A+", isCorrect: false },
      { text: "B-", isCorrect: false }
    ]
  },
  {
    question: "Which scientist discovered penicillin?",
    answers: [
      { text: "Alexander Fleming", isCorrect: true },
      { text: "Louis Pasteur", isCorrect: false },
      { text: "Robert Koch", isCorrect: false },
      { text: "Gregor Mendel", isCorrect: false }
    ]
  },
  {
    question: "Which country won the FIFA World Cup in 2018?",
    answers: [
      { text: "Brazil", isCorrect: false },
      { text: "France", isCorrect: true },
      { text: "Germany", isCorrect: false },
      { text: "Argentina", isCorrect: false }
    ]
  },
  {
    question: "In which sport is the term 'love' used?",
    answers: [
      { text: "Tennis", isCorrect: true },
      { text: "Golf", isCorrect: false },
      { text: "Cricket", isCorrect: false },
      { text: "Hockey", isCorrect: false }
    ]
  },
  {
    question: "How many players are there in a basketball team on the court?",
    answers: [
      { text: "6", isCorrect: false },
      { text: "7", isCorrect: false },
      { text: "5", isCorrect: true },
      { text: "4", isCorrect: false }
    ]
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    answers: [
      { text: "China", isCorrect: false },
      { text: "Brazil", isCorrect: true },
      { text: "Japan", isCorrect: false },
      { text: "UK", isCorrect: false }
    ]
  },
  {
    question: "What is the maximum score in a single frame of bowling?",
    answers: [
      { text: "200", isCorrect: false },
      { text: "150", isCorrect: false },
      { text: "300", isCorrect: true },
      { text: "250", isCorrect: false }
    ]
  },
  {
    question: "In football (soccer), what does VAR stand for?",
    answers: [
      { text: "Video Assistant Referee", isCorrect: true },
      { text: "Virtual Action Replay", isCorrect: false },
      { text: "Verified Assistant Referee", isCorrect: false },
      { text: "Video Analysis Review", isCorrect: false }
    ]
  },
  {
    question: "Which country has won the most Olympic gold medals?",
    answers: [
      { text: "USA", isCorrect: true },
      { text: "China", isCorrect: false },
      { text: "Russia", isCorrect: false },
      { text: "UK", isCorrect: false }
    ]
  },
  {
    question: "How long is a standard marathon?",
    answers: [
      { text: "21.1 km", isCorrect: false },
      { text: "50 km", isCorrect: false },
      { text: "42.2 km", isCorrect: true },
      { text: "30 km", isCorrect: false }
    ]
  },
  {
    question: "Who has won the most Grand Slam tennis titles (men)?",
    answers: [
      { text: "Roger Federer", isCorrect: false },
      { text: "Novak Djokovic", isCorrect: true },
      { text: "Rafael Nadal", isCorrect: false },
      { text: "Pete Sampras", isCorrect: false }
    ]
  },
  {
    question: "In which sport would you perform a slam dunk?",
    answers: [
      { text: "Basketball", isCorrect: true },
      { text: "Volleyball", isCorrect: false },
      { text: "Tennis", isCorrect: false },
      { text: "Rugby", isCorrect: false }
    ]
  },
  {
    question: "Which country is known as the birthplace of cricket?",
    answers: [
      { text: "India", isCorrect: false },
      { text: "Australia", isCorrect: false },
      { text: "England", isCorrect: true },
      { text: "South Africa", isCorrect: false }
    ]
  },
  {
    question: "How many rings are on the Olympic flag?",
    answers: [
      { text: "5", isCorrect: true },
      { text: "4", isCorrect: false },
      { text: "6", isCorrect: false },
      { text: "7", isCorrect: false }
    ]
  },
  {
    question: "Which athlete is known as the 'Fastest Man on Earth'?",
    answers: [
      { text: "Usain Bolt", isCorrect: true },
      { text: "Carl Lewis", isCorrect: false },
      { text: "Tyson Gay", isCorrect: false },
      { text: "Yohan Blake", isCorrect: false }
    ]
  },
  {
    question: "Which sport is known as 'the gentleman's game'?",
    answers: [
      { text: "Golf", isCorrect: false },
      { text: "Tennis", isCorrect: false },
      { text: "Cricket", isCorrect: true },
      { text: "Baseball", isCorrect: false }
    ]
  },
  {
    question: "In which sport is the Stanley Cup awarded?",
    answers: [
      { text: "Basketball", isCorrect: false },
      { text: "Ice Hockey", isCorrect: true },
      { text: "Baseball", isCorrect: false },
      { text: "American Football", isCorrect: false }
    ]
  },
  {
    question: "How many players are there on a rugby union team?",
    answers: [
      { text: "11", isCorrect: false },
      { text: "15", isCorrect: true },
      { text: "13", isCorrect: false },
      { text: "9", isCorrect: false }
    ]
  },
  {
    question: "Who holds the record for most goals in World Cup history?",
    answers: [
      { text: "Cristiano Ronaldo", isCorrect: false },
      { text: "Miroslav Klose", isCorrect: true },
      { text: "Pele", isCorrect: false },
      { text: "Lionel Messi", isCorrect: false }
    ]
  },
  {
    question: "What surface is the French Open played on?",
    answers: [
      { text: "Clay", isCorrect: true },
      { text: "Grass", isCorrect: false },
      { text: "Hard court", isCorrect: false },
      { text: "Carpet", isCorrect: false }
    ]
  },
  {
    question: "Which country has won the most Rugby World Cups?",
    answers: [
      { text: "New Zealand", isCorrect: true },
      { text: "England", isCorrect: false },
      { text: "Australia", isCorrect: false },
      { text: "South Africa", isCorrect: false }
    ]
  },
  {
    question: "In which sport do teams compete for the Davis Cup?",
    answers: [
      { text: "Rugby", isCorrect: false },
      { text: "Tennis", isCorrect: true },
      { text: "Cricket", isCorrect: false },
      { text: "Basketball", isCorrect: false }
    ]
  }
];

export default questions;