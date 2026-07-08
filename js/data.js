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
  // Update teamsSignedUp whenever a new team registers. maxTeams is your
  // field cap — change it here if the cap ever changes, and the sign-up
  // page banner updates automatically.
  teamsSignedUp: 36,
  maxTeams: 36,

  // ---- SIGN-UP FORM ON/OFF SWITCH ---------------------------------------
  // This is the easy way to close registration. Set signupOpen to false
  // and the embedded Google Form on the Sign Up page is automatically
  // replaced with a "tournament full" message (edit the text below).
  // Set it back to true any time to bring the form back (e.g. next event).
  signupOpen: false,
  signupClosedMessage: "This tournament is full — thanks so much for the interest! Check the Schedule & Bracket page for updates, or follow us on Instagram for info on our next event.",

  // ---- SCHEDULE ----------------------------------------------------------
  scheduleReady: false,
  schedule: [
    { time: "8:20 AM", court: "Court 1", teamA: "Selena G / Justin B", teamB: "Lexi E / Audrey C", round: "1" },
    { time: "8:20 AM", court: "Court 2", teamA: "Selena G / Justin B", teamB: "Lexi E / Audrey C", round: "1" },

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
  },

  // ---- ANNOUNCEMENT POPUP --------------------------------------------
  // Set enabled to true to show the popup, false to hide it completely.
  // Edit title and message to whatever you want to say.
  // The popup appears once per browser session — if a visitor closes it
  // and comes back in a new tab or new session it will show again.
  announcement: {
    enabled: true,
    title: "MATCHUPS OUT SOON!",
    message: "We are full!! - Matchups are going to be available very soon — Thank you everyone for signing up."
  }
};
