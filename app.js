function start() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "userChoice",
          message: "How would you like to search songs by your favorite artist?",
          choices: [
            "Song by Artist",
            "Bid on Item",
            "I do not wish to do either",
            ""
          ],
        }
      ])
      .then((answer) => {
        switch (answer) {
          case "song-artist": 
            songByArtist();
            break;
          case "more-artist":
            moreArtist();
            break;
          default:
        }
      })