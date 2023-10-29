const jackBase = [
  {
    Game: "You Don't Know Jack",
    Pack: 1,
    Time: 20,
    Category: "Trivia",
    Description:
      "YOU DON'T KNOW JACK 2015 is the very first Party Pack edition of your favorite game show, where high culture and pop culture collide!",
    minPlayers: 1,
    maxPlayers: 4,
    url: "https://www.jackboxgames.com/games/you-dont-know-jack-2015",
  },
  {
    Game: "Fibbage XL",
    Pack: 1,
    Time: 15,
    Category: "Deception",
    Description:
      "In Fibbage XL, players are presented with an obscure trivia fact that's missing one key detail. The objective is to fill in the blank so that it fools others into thinking it's the truth.",
    minPlayers: 2,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/fibbage-xl",
  },
  {
    Game: "Drawful",
    Pack: 1,
    Time: 15,
    Category: "Drawing",
    Description:
      'Since 2014, players have attempted to draw absurd things like "Napoleon riding a squirrel." As a result, a lot of hilariously bad art has been created. We\'re proud to say that this is one of our biggest contributions to society.',
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/drawful",
  },
  {
    Game: "Lie Swatter",
    Pack: 1,
    Time: null,
    Category: "True or False",
    Description:
      "Lie Swatter is the perfect game to play if you need a good random fact to have in your back pocket for cocktail parties, or you just hate bugs.",
    minPlayers: 1,
    maxPlayers: 100,
    url: "https://www.jackboxgames.com/games/lie-swatter",
  },
  {
    Game: "Word Spud",
    Pack: 1,
    Time: null,
    Category: "Writing",
    Description:
      "If you're reading about Word Spud, congratulations. You've officially become a hardcore Jackbox Games fan. Word Spud is the racy-as-you-want-to-be fill-in-the-blank word game.",
    minPlayers: 2,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/word-spud",
  },
  {
    Game: "EarWax",
    Pack: 2,
    Time: 15,
    Category: "Musical",
    Description:
      "When you own a huge library of fart sound effects, you are morally obligated to build a game around it, so that's what we did with Earwax.",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/earwax",
  },
  {
    Game: "Fibbage 2",
    Pack: 2,
    Time: 15,
    Category: "Deception",
    Description:
      "The fib-to-win trivia game returns. Players are presented with an obscure trivia fact that's missing one key detail. The objective is to fill in the blank so that it fools others into thinking it's the truth.",
    minPlayers: 2,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/fibbage-2",
  },
  {
    Game: "Bidiots",
    Pack: 2,
    Time: 15,
    Category: "Drawing",
    Description:
      'Going once... Going twice... SOLD to the player who might\'ve just made a huge mistake! Put on your monocle as we explore this fine "art" auction game.',
    minPlayers: 3,
    maxPlayers: 6,
    url: "https://www.jackboxgames.com/games/bidiots",
  },
  {
    Game: "Quiplash XL",
    Pack: 2,
    Time: 15,
    Category: "Writing",
    Description:
      "Quiplash XL is a fan favorite, it even got featured on (name drop) The Tonight Show with Jimmy Fallon! Well-loved gameplay and celebrity endorsements - it's a winner!",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/quiplash-xl",
  },
  {
    Game: "Bomb Corp",
    Pack: 2,
    Time: 15,
    Category: "Puzzle",
    Description:
      "You're an intern at the office doing intern-y things like getting coffee, stapling papers, and defusing bombs. Yes, you're keeping bombs from exploding. Did we mention its unpaid?",
    minPlayers: 1,
    maxPlayers: 4,
    url: "https://www.jackboxgames.com/games/bomb-corp",
  },
  {
    Game: "Tee K.O.",
    Pack: 3,
    Time: 30,
    Category: "Drawing",
    Description:
      "Welcome to mysterious T-Shirt Island, where the most hardened warriors in the world join you to compete in a battle of... t-shirts.",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/tee-k-o",
  },
  {
    Game: "Quiplash 2",
    Pack: 3,
    Time: 15,
    Category: "Writing",
    Description:
      "Quiplash 2 picks up where its predecessor left off. Enjoy original prompts and twists on the classic formula. Just like in Quiplash, players answer a wide array of fun prompts.",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/quiplash-2-1",
  },
  {
    Game: "Trivia Murder Party",
    Pack: 3,
    Time: 15,
    Category: "Trivia",
    Description:
      "Waaaaake Up! It's time to play Trivia Murder Party, a deadly quiz show where you match wits with a trivia-obsessed killer. Just stay alive and you'll be fine.",
    minPlayers: 1,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/trivia-murder-party",
  },
  {
    Game: "Fakin' It",
    Pack: 3,
    Time: 15,
    Category: "Deception",
    Description:
      "In Fakin' It, you can FINALLY discover how bad your friends are at lying, without any relationship-ending arguments!",
    minPlayers: 3,
    maxPlayers: 6,
    url: "https://www.jackboxgames.com/games/fakin-it",
  },
  {
    Game: "Guesspionage",
    Pack: 3,
    Time: 15,
    Category: "Voting",
    Description:
      'Guesspionage tests your knowledge of the human condition. Players predict how real people responded to basic poll questions like "What percentage of people have peed in a public pool?"',
    minPlayers: 2,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/guesspionage",
  },
  {
    Game: "Fibbage 3",
    Pack: 4,
    Time: 15,
    Category: "Deception",
    Description:
      "It was only a matter of time before we created a loungey 70s version of Fibbage... and that time was 2017 in The Jackbox Party Pack 4.",
    minPlayers: 2,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/fibbage-3",
  },
  {
    Game: "Survive the Internet",
    Pack: 4,
    Time: 20,
    Category: "Writing",
    Description:
      "You're familiar with the \"Internet\" right? Imagine a game that takes place within the Jackbox Games version of the Internet. It's equally terrifying and rewarding.",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/survive-the-internet",
  },
  {
    Game: "Monster Seeking Monster",
    Pack: 4,
    Time: 15,
    Category: "Dating Game",
    Description:
      "At the end of the day, we're all just monsters trying to find love. There's no better party game to live this truth than Monster Seeking Monster.",
    minPlayers: 3,
    maxPlayers: 7,
    url: "https://www.jackboxgames.com/games/monster-seeking-monster",
  },
  {
    Game: "Civic Doodle",
    Pack: 4,
    Time: 20,
    Category: "Drawing",
    Description:
      "The good people of Doodle Valley have enlisted you and your fellow players to beautify the town with ridiculous murals... We're not sure why they trust you.",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/civic-doodle",
  },
  {
    Game: "Bracketeering",
    Pack: 4,
    Time: 15,
    Category: "Voting",
    Description:
      "Bracketeering is the game of strong opinions about stupid things. Everything has stakes and everyone is allowed to weigh in and make a final ruling on the truly absurd.",
    minPlayers: 3,
    maxPlayers: 16,
    url: "https://www.jackboxgames.com/games/bracketeering",
  },
  {
    Game: "Mad Verse City",
    Pack: 5,
    Time: 15,
    Category: "Musical",
    Description:
      "Giant robots have arrived from space and to set the city ablaze with dope rhymes. Who can channel their inner MC to win this robot rap battle?",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/mad-verse-city",
  },
  {
    Game: "You Don't Know Jack: Full Stream",
    Pack: 5,
    Time: 15,
    Category: "Trivia",
    Description:
      "The irreverent trivia classic returns, revamped and better than ever! Your favorite host, Cookie Masterson, returns with all-new twisted trivia questions.",
    minPlayers: 1,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/you-dont-know-jack-full-stream",
  },
  {
    Game: "Split the Room",
    Pack: 5,
    Time: 15,
    Category: "Writing",
    Description:
      "Imagine a world where there's a party game about creating hilarious and divisive hypothetical questions. Well, it exists already and it's called Split the Room.",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/split-the-room",
  },
  {
    Game: "Patently Stupid",
    Pack: 5,
    Time: 20,
    Category: "Drawing",
    Description:
      "Is your head just bursting with inventive ideas?! Well, show off your creative genius with Patently Stupid, the game that will turn you into a modern Edison!",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/patently-stupid",
  },
  {
    Game: "Zeeple Dome",
    Pack: 5,
    Time: 10,
    Category: "Skill",
    Description:
      "Welcome, Earthlings, to the ZEEPLE DOME! You are now honored contestants on the Bleecha Nebula's most celebrated (and incredibly violent) game show!!!",
    minPlayers: 1,
    maxPlayers: 6,
    url: "https://www.jackboxgames.com/games/zeeple-dome",
  },
  {
    Game: "Role Models",
    Pack: 6,
    Time: 15,
    Category: "Voting",
    Description:
      "Everybody's somebody, so who are you? The planner? The flake? The sassy one? Only your friends know the real you, and now they have the perfect excuse to tell you all about it.",
    minPlayers: 3,
    maxPlayers: 6,
    url: "https://www.jackboxgames.com/games/role-models",
  },
  {
    Game: "Push the Button",
    Pack: 6,
    Time: 20,
    Category: "Deception",
    Description:
      "Your ship has been invaded by aliens who look just like your best friends! Find the imposters and eject them into space before the timer runs out or we're all doomed!",
    minPlayers: 4,
    maxPlayers: 10,
    url: "https://www.jackboxgames.com/games/push-the-button",
  },
  {
    Game: "Joke Boat",
    Pack: 6,
    Time: 15,
    Category: "Speaking",
    Description:
      "Ahoy there, you must be the comedians. The cruise ship's talent show is tonight so grab your ventriloquist dummy and follow me! We've got some jokes to write!",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/joke-boat",
  },
  {
    Game: "Trivia Murder Party 2",
    Pack: 6,
    Time: 15,
    Category: "Trivia",
    Description:
      "The game show-loving serial killer from Trivia Murder Party is back, with more trivia and dastardly new mini-games. Can you and your friends survive a night in the Murder Hotel?",
    minPlayers: 1,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/trivia-murder-party-2",
  },
  {
    Game: "Dictionarium",
    Pack: 6,
    Time: 10,
    Category: "Writing",
    Description:
      "Humans have been inventing words and phrases for centuries. Now it's your turn to contribute an entry to the pages of the Dictionarium.",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/dictionarium",
  },
  {
    Game: "The Devils and the Details",
    Pack: 7,
    Time: 15,
    Category: "Puzzle",
    Description:
      "Congratulations, demons! You'll be moving to an average suburban neighborhood, where you'll take part in the pointless and highly stressful rituals of mortal life.",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/devils-and-the-details",
  },
  {
    Game: "Champ'd Up",
    Pack: 7,
    Time: 20,
    Category: "Drawing",
    Description:
      "Enter the Scrawliseum, where player-created characters fight over unusual titles. Heavy favorites are pitted against underdogs to create hilarious, high-octane matches.",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/champd-up",
  },
  {
    Game: "Talking Points",
    Pack: 7,
    Time: 20,
    Category: "Speaking",
    Description:
      "Public speaking is fun, actually. Players are given picture slides they've never seen and words they didn't write. Giving a speech has never been this weird or this funny.",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/talking-points",
  },
  {
    Game: "Quiplash 3",
    Pack: 7,
    Time: 15,
    Category: "Writing",
    Description:
      "Quiplash 3 has the same classic Quiplash style with an all new final round! Each player answers a series of prompts before entering into a head-to-head battle of the wits!",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/quiplash-3",
  },
  {
    Game: "Blather 'Round",
    Pack: 7,
    Time: 15,
    Category: "Trivia",
    Description:
      "Blather 'Round is a guessing game full of blundering, stumbling, and -yes!- blathering. Describe pop culture items to your friends, but you'll never get quiiiiite the right words.",
    minPlayers: 2,
    maxPlayers: 6,
    url: "https://www.jackboxgames.com/games/blather-round",
  },
  {
    Game: "Job Job",
    Pack: 8,
    Time: 20,
    Category: "Writing",
    Description:
      "Welcome to Job Job, a game where everybody interviews for a job! Funny and unique answers get votes, and the player with the most points in the end SCORES THE JOB (JOB)!",
    minPlayers: 3,
    maxPlayers: 10,
    url: "https://www.jackboxgames.com/games/job-job",
  },
  {
    Game: "Weapons Drawn",
    Pack: 8,
    Time: 20,
    Category: "Drawing",
    Description:
      "THERE'S BEEN A MURDER! Several in fact... Weapons Drawn is a social deduction game where everyone did it. Commit one yourself before solving others.",
    minPlayers: 4,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/weapons-drawn",
  },
  {
    Game: "Drawful: Animate",
    Pack: 8,
    Time: 15,
    Category: "Drawing",
    Description:
      "It's alive! The classic guessing game makes an energetic return in Drawful: Animate, which has players drawing two-frame animations based on absurd prompts.",
    minPlayers: 3,
    maxPlayers: 10,
    url: "https://www.jackboxgames.com/games/drawful-animate",
  },
  {
    Game: "The Poll Mine",
    Pack: 8,
    Time: 15,
    Category: "Voting",
    Description:
      "A survey game of survival! Players divide into two teams, secretly answer survey questions, then try to guess the results. Can you open the correct doors and escape?!",
    minPlayers: 2,
    maxPlayers: 10,
    url: "https://www.jackboxgames.com/games/poll-mine",
  },
  {
    Game: "The Wheel of Enormous Proportions",
    Pack: 8,
    Time: 15,
    Category: "Trivia",
    Description:
      "The Wheel of Enormous Proportions is a hybrid game of trivia and chance hosted by an immortal, all-knowing wheel from a mountaintop in the sky.",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/the-wheel-of-enormous-proportions",
  },
  {
    Game: "Junktopia",
    Pack: 9,
    Time: 20,
    Category: "Writing",
    Description:
      "A strange wizard has turned you into a frog! Create hilarious backstories for weird objects and then get them appraised. The player with the best items becomes human again!",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/junktopia",
  },
  {
    Game: "Quixort",
    Pack: 9,
    Time: 20,
    Category: "Trivia",
    Description:
      "In this trivia sorting factory, work with your team to sort falling answers into their proper order before they hit the floor. It's as easy as A, C, B!",
    minPlayers: 1,
    maxPlayers: 10,
    url: "https://www.jackboxgames.com/games/quixort",
  },
  {
    Game: "Roomerang",
    Pack: 9,
    Time: 30,
    Category: "Writing",
    Description:
      "Channel your inner reality TV star in an attempt to come out on top! Respond to prompts, bring the competition and role-play to avoid being voted out.",
    minPlayers: 4,
    maxPlayers: 9,
    url: "https://www.jackboxgames.com/games/roomerang",
  },
  {
    Game: "Nonsensory",
    Pack: 9,
    Time: 25,
    Category: "Writing",
    Description:
      "Professor Nanners is here to test your NSP (Nonsensory Perception). How close can you get to guessing where another player's prompt ranks on the silliest of scales?",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/nonsensory",
  },
  {
    Game: "Fibbage 4",
    Pack: 9,
    Time: 20,
    Category: "Deception",
    Description:
      "The hilarious bluffing party game returns with an all-new Final Fibbage, video questions, and a fresh game mode! It's a game so beloved that we decided to slap a 4 on it.",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/fibbage-4",
  },
  {
    Game: "FixyText",
    Pack: 10,
    Time: 15,
    Category: "Writing",
    Description:
      "FixyText is the Wild West of text-editing. In this chaotic game, everyone's in group chat, typing all at once to make the most memorable statement. And there's no delete key. Take that auto-correct!",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/fixytext",
  },
  {
    Game: "Tee K.O. 2",
    Pack: 10,
    Time: 20,
    Category: "Drawing",
    Description:
      "In Tee K.O. 2, return to T-Shirt Island, where the most hardened warriors in the world compete in a deadly fighting tournament. The drawing finger - not the fist - decides the victory!",
    minPlayers: 3,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/tee-k-o-2",
  },
  {
    Game: "Dodo Re Mi",
    Pack: 10,
    Time: 5,
    Category: "Musical",
    Description:
      "In Dodo Re Mi, your phone is your instrument. You and your flock must make music together to escape the hungry jungle plant.",
    minPlayers: 1,
    maxPlayers: 9,
    url: "https://www.jackboxgames.com/games/dodo-re-mi",
  },
  {
    Game: "Timejinx",
    Pack: 10,
    Time: 20,
    Category: "Trivia",
    Description:
      "In Timejinx, you're a time traveler from the future competing in a high-stakes trivia night. Save your current timeline by answering questions about the past.",
    minPlayers: 1,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/timejinx",
  },
  {
    Game: "Hypnotorious",
    Pack: 10,
    Time: 20,
    Category: "Deception",
    Description:
      "Hypnotorious is a game with secret roles, tentative alliances and of course, silly answers to ridiculous questions. Who is on your side?",
    minPlayers: 4,
    maxPlayers: 8,
    url: "https://www.jackboxgames.com/games/hypnotorious",
  },
];

function filterByPlayers(data, players) {
  return data.filter(function (d) {
    return d.minPlayers <= players && d.maxPlayers >= players;
  });
}

function filterByTime(data, time) {
  return data.filter(function (d) {
    return d.Time === null || d.Time <= time;
  });
}

function filterByTitle(data, title) {
  return data.filter(function (d) {
    return d.Game.toLowerCase().includes(title.toLowerCase());
  });
}

function filterByPack(data, pack) {
  return data.filter(function (d) {
    return d.Pack === pack;
  });
}

function filterByPacks(data, packs) {
  return data.filter(function (d) {
    return packs.includes(d.Pack);
  });
}

function filterByCategories(data, categories) {
  return data.filter(function (d) {
    return categories.includes(d.Category);
  });
}

function getCategories(data) {
  const categories = new Set(data.map((d) => d.Category));
  return Array.from(categories);
}

document.addEventListener("DOMContentLoaded", function () {
  const gameCategories = getCategories(jackBase);
  const gameListContainer = document.getElementById("gameList");
  const filterButton = document.getElementById("filterButton");
  const resetButton = document.getElementById("reset");
  const packsSelect = document.getElementById("packs");
  const categoriesSelect = document.getElementById("categories");

  for (let pack = 1; pack <= 10; pack++) {
    const option = document.createElement("option");
    option.value = pack;
    option.textContent = pack;
    packsSelect.appendChild(option);
  }

  for (const category of gameCategories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoriesSelect.appendChild(option);
  }

  function renderGames(games) {
    // Clear the previous game list
    gameListContainer.innerHTML = "";

    games.forEach(function (game) {
      const gameElement = document.createElement("div");
      gameElement.className = "game";
      // title
      const titleElement = document.createElement("h2");
      const anchorElement = document.createElement("a");
      anchorElement.setAttribute("href", game.url);
      anchorElement.setAttribute("target", "_new");
      anchorElement.textContent = game.Game;
      titleElement.appendChild(anchorElement);
      gameElement.appendChild(titleElement);
      // description
      descriptionElement = document.createElement("p");
      descriptionElement.textContent = game.Description;
      gameElement.appendChild(descriptionElement);
      // info box
      infoBoxElement = document.createElement("div");
      infoBoxElement.className = "info";
      // players
      playersElement = document.createElement("p");
      playersLabel = document.createElement("strong");
      playersLabel.textContent = "Players: ";
      playersElement.appendChild(playersLabel);
      playersCountLabel = document.createElement("div");
      playersCountLabel.textContent = `${game.minPlayers}-${game.maxPlayers}`;
      playersElement.appendChild(playersCountLabel);
      infoBoxElement.appendChild(playersElement);
      // time
      timeElement = document.createElement("p");
      timeLabel = document.createElement("strong");
      timeLabel.textContent = "Time: ";
      timeElement.appendChild(timeLabel);
      timeValueLabel = document.createElement("div");
      timeValueLabel.textContent = game.Time ? game.Time + " minutes" : "N/A";
      timeElement.appendChild(timeValueLabel);
      infoBoxElement.appendChild(timeElement);
      // category
      categoryElement = document.createElement("p");
      categoryElement.textContent = game.Category;
      infoBoxElement.appendChild(categoryElement);
      // pack
      packElement = document.createElement("p");
      packElement.textContent = `JackBox Pack ${game.Pack}`;
      infoBoxElement.appendChild(packElement);
      gameElement.appendChild(infoBoxElement);
      gameListContainer.appendChild(gameElement);
      gameListContainer.appendChild(document.createElement("hr"));
    });
  }

  function handleFilterGames() {
    const numPlayers =
      parseInt(document.getElementById("numPlayers").value, 10) || 0;
    const gameTime =
      parseInt(document.getElementById("gameTime").value, 10) || 0;
    const title = document.getElementById("title").value;
    let packs = [];

    for (let i = 0; i < packsSelect.options.length; i++) {
      const option = packsSelect.options[i];

      if (option.selected) {
        packs.push(parseInt(option.value));
      }
    }

    const selectedCategories = [];
    for (let i = 0; i < categoriesSelect.options.length; i++) {
      const option = categoriesSelect.options[i];

      if (option.selected) {
        selectedCategories.push(option.value);
      }
    }

    let filteredGames = jackBase;
    if (numPlayers > 0) {
      filteredGames = filterByPlayers(filteredGames, numPlayers);
    }
    if (gameTime > 0) {
      filteredGames = filterByTime(filteredGames, gameTime);
    }
    if (title && title.length > 0) {
      filteredGames = filterByTitle(filteredGames, title);
    }
    if (packs.length > 0) {
      filteredGames = filterByPacks(filteredGames, packs);
    }
    if (selectedCategories.length > 0) {
      filteredGames = filterByCategories(filteredGames, selectedCategories);
    }

    renderGames(filteredGames);
  }

  function resetFilters() {
    document.getElementById("numPlayers").value = "";
    document.getElementById("gameTime").value = "";
    document.getElementById("title").value = "";
    document.getElementById("packs").selectedIndex = -1; // Deselect all options
    document.getElementById("categories").selectedIndex = -1; // Deselect all options
  }

  // Initial render of games
  renderGames(jackBase);

  // Setup filter button click event
  filterButton.addEventListener("click", handleFilterGames);
  // setup reset button click event
  resetButton.addEventListener("click", () => {
    resetFilters();
    handleFilterGames();
  });
});
