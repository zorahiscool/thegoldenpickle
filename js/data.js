/* ==========================================================================
   THE GOLDEN PICKLE — EVENT DATA
   This is the ONE file you need to edit as your tournament comes together.
   No coding knowledge needed — just update the values below carefully,
   keeping the quotes "" and commas , exactly where they are.
   ========================================================================== */

var GOLDEN_PICKLE_DATA = {

  // ---- BASIC EVENT INFO ------------------------------------------------
  event: {
    name: "The Golden Pickle",
    date: "2026-07-11T08:00:00", // ISO format: YYYY-MM-DDTHH:MM:SS (24hr time)
    dateDisplay: "July 11, 2026",
    city: "Andrews, TX",
    venueName: "Andrews Pickleball Courts",
    address: "Replace with exact street address, Andrews, TX",
    format: "Doubles",
    entryFee: "$30 per team ($15/player)",
    registrationDeadline: "Thursday, July 9th"
  },

  // ---- TEAMS SIGNED UP -------------------------------------------------
  // Update this number whenever a new team registers.
  // It will automatically appear on the sign-up page.
  teamsSignedUp: 0,

  // ---- SCHEDULE ----------------------------------------------------------
  scheduleReady: false,
  schedule: [
    { time: "8:05 AM", court: "Court 1", teamA: "Jack B / Abdiel", teamB: "TBD / TBD", round: "1" },

    // Example of how to add a new match — copy this line, edit it, and
    // place a comma after the previous line's closing }:
    // { time: "9:00 AM", court: "Court 1", teamA: "Smith / Garcia", teamB: "Lee / Nguyen", round: "Pool Play" },
  ],

  // ---- BRACKET -------------------------------------------------------
  bracketReady: false,
  bracket: [
    {
      round: "Quarterfinals",
      matches: [
        { teamA: "Smith / Garcia", teamB: "Cruz / Patel",  scoreA: "11", scoreB: "4",  court: "Court 1", time: "10:15 AM", winner: "Smith / Garcia" },
        { teamA: "Lee / Nguyen",   teamB: "Brooks / Hale", scoreA: "9",  scoreB: "11", court: "Court 2", time: "10:15 AM", winner: "Brooks / Hale" },
        { teamA: "Jones / Diaz",   teamB: "Park / Reyes",  scoreA: "11", scoreB: "8",  court: "Court 3", time: "10:15 AM", winner: "Jones / Diaz" },
        { teamA: "TBD",            teamB: "TBD",           scoreA: "",   scoreB: "",   court: "Court 4", time: "10:15 AM", winner: "" }
      ]
    },
    {
      round: "Semifinals",
      matches: [
        { teamA: "Smith / Garcia", teamB: "Brooks / Hale", scoreA: "11", scoreB: "6", court: "Court 1", time: "11:00 AM", winner: "Smith / Garcia" },
        { teamA: "Jones / Diaz",   teamB: "TBD",           scoreA: "",   scoreB: "",  court: "Court 2", time: "11:00 AM", winner: "" }
      ]
    },
    {
      round: "Championship",
      matches: [
        { teamA: "Smith / Garcia", teamB: "TBD", scoreA: "", scoreB: "", court: "Court 1", time: "11:45 AM", winner: "" }
      ]
    }
  ],

  // ---- RESULTS --------------------------------------------------------
  resultsReady: false,
  results: {
    champion: { team: "Smith / Garcia", players: "Jordan Smith & Casey Garcia" },
    runnerUp: { team: "Brooks / Hale",  players: "Taylor Brooks & Riley Hale" },
    placements: [
      { place: "3rd", team: "Jones / Diaz" },
      { place: "4th", team: "Lee / Nguyen" }
    ]
  }
};
