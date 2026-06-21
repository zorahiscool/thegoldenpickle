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
    venueName: "Andrews Pickleball Courts",          // TODO: confirm exact venue name
    address: "Replace with exact street address, Andrews, TX",   // TODO
    format: "Doubles",
    entryFee: "$30 per team ($15/player)",
    registrationDeadline: "TBA"
  },

  // ---- SCHEDULE ----------------------------------------------------------
  // Set scheduleReady to true once you want the schedule to display.
  // Add one object per match. court/time are just text, so write them
  // however makes sense ("Court 1", "9:00 AM", etc.)
  scheduleReady: false,
  schedule: [
    // Example — delete or edit once real matches are set:
    // { time: "9:00 AM", court: "Court 1", teamA: "Smith / Garcia", teamB: "Lee / Nguyen", round: "Pool Play" },
  ],

  // ---- BRACKET -------------------------------------------------------
  // Set bracketReady to true once the bracket is set.
  // Group matches into rounds. Leave score blank ("") until played.
  // winner should exactly match teamA or teamB text once decided.
  bracketReady: false,
  bracket: [
    // Example round — delete or edit once real bracket is set:
    // {
    //   round: "Quarterfinals",
    //   matches: [
    //     { teamA: "Smith / Garcia", teamB: "Lee / Nguyen", scoreA: "", scoreB: "", court: "Court 1", time: "9:00 AM", winner: "" }
    //   ]
    // }
  ],

  // ---- RESULTS --------------------------------------------------------
  // Set resultsReady to true once the tournament has wrapped up.
  resultsReady: false,
  results: {
    champion: { team: "", players: "" },          // e.g. { team: "Team Dink-amite", players: "Jordan Smith & Casey Garcia" }
    runnerUp: { team: "", players: "" },
    placements: [
      // { place: "3rd", team: "" },
      // { place: "4th", team: "" }
    ]
  }
};
