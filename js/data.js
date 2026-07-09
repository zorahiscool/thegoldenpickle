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
  signupOpen: false,
  signupClosedMessage: "This tournament is full — thanks so much for the interest! Check the Schedule & Bracket page for updates, or follow us on Instagram for info on our next event.",

  // ---- SCHEDULE ----------------------------------------------------------
  // Round 1 — 36 teams, 18 matches across 3 courts in 6 waves (~35 min apart).
  // Skill pairings: Beginner vs Intermediate and Intermediate vs Advanced only.
  // No Beginner vs Advanced. One Beg vs Beg match was unavoidable (12 Beginners,
  // only 10 Intermediate spots left after pairing all 7 Advanced teams).
  scheduleReady: true,
  schedule: [
    { time: "8:30 AM",  court: "Court 1", teamA: "The Pickles (Cain Gomez / Aiden Molinar)",             teamB: "Gabby Muniz / Cythia ayala",                        round: "Round 1" },
    { time: "8:30 AM",  court: "Court 2", teamA: "daddy (kaden mendoza / Servando Olivas)",               teamB: "Daniel reyes / Nomar Gomez",                       round: "Round 1" },
    { time: "8:30 AM",  court: "Court 3", teamA: "Team Kenobi (Kyle Covington / Jackson Ortiz)",          teamB: "Picklers (Ein Esquivel / Jay Davila)",             round: "Round 1" },

    { time: "9:05 AM",  court: "Court 1", teamA: "Heavy Hitters (Aaron Olivas / Jacob Gomez)",            teamB: "Pickle ticklers (Maribel Olivas / Kimberly Muniz)", round: "Round 1" },
    { time: "9:05 AM",  court: "Court 2", teamA: "The Shabooms (Tatum Holley / Max Rosales)",             teamB: "Dan Swartzlander / Misa Gomez",                    round: "Round 1" },
    { time: "9:05 AM",  court: "Court 3", teamA: "Cole Ivison / Zoey Harris",                             teamB: "Dink Responsibly (Rylan Diaz / Alex montes)",      round: "Round 1" },

    { time: "9:40 AM",  court: "Court 1", teamA: "Slix fitz (Eva Flores / Sloan Riordan)",                teamB: "Paddle bros (Jace Dickson / Tommy Evan's)",        round: "Round 1" },
    { time: "9:40 AM",  court: "Court 2", teamA: "Big Dink Energy (Hailey Gribble / Aaron Franco)",       teamB: "Steven Johnson / Aaron",                           round: "Round 1" },
    { time: "9:40 AM",  court: "Court 3", teamA: "Vortex (Eddie Herrera / Maverick Torres)",              teamB: "Angel Granados / Jorge Molinar",                   round: "Round 1" },

    { time: "10:15 AM", court: "Court 1", teamA: "Ball Busters (Hagen Tuck / Ej Lopez)",                  teamB: "Court Crushers (Annika Armendariz / Connor Hendricks)", round: "Round 1" },
    { time: "10:15 AM", court: "Court 2", teamA: "Colt Beckham / Caden Fields",                           teamB: "John Brus / Ashur Tellez",                         round: "Round 1" },
    { time: "10:15 AM", court: "Court 3", teamA: "Trace Garcia / Jaden Luebano",                          teamB: "The Pickle Ticklers (David Seals / Whitnee Seals)", round: "Round 1" },

    { time: "10:50 AM", court: "Court 1", teamA: "Jack Burgen / Abdi Molinar",                            teamB: "Ruben Mancha / Victor Alday",                      round: "Round 1" },
    { time: "10:50 AM", court: "Court 2", teamA: "The Jackson's (Orlando zamora / Makinly Espinosa)",     teamB: "Dinkin Divas (Holly Conyers / Vicky Townsend)",    round: "Round 1" },
    { time: "10:50 AM", court: "Court 3", teamA: "Marlee Ortiz / Rylee Ortiz",                            teamB: "Jade Brown / Ricardo Brown",                       round: "Round 1" },

    { time: "11:25 AM", court: "Court 1", teamA: "Team critic (Zack Knox / Faryah nasrudin)",             teamB: "Forty one (Luii Rodriguez / Xavior Kidd Rodriguez)", round: "Round 1" },
    { time: "11:25 AM", court: "Court 2", teamA: "Dill With It (Lexi Emiliano / Audrey Casillas)",        teamB: "Caroline Gibson / Rhett Gibson",                   round: "Round 1" },
    { time: "11:25 AM", court: "Court 3", teamA: "Okc Thunder (Auden Morales / Xavier Ramos)",            teamB: "JB Productions (Selena Garcia / Justin Bailey)",   round: "Round 1" }
  ],

  // ---- BRACKET -------------------------------------------------------
  // Same Round 1 matchups as the schedule. Fill in scoreA, scoreB, and
  // winner as matches finish. Add a "Round 2" block below once Round 1
  // is complete (copy the format of this block).
  bracketReady: true,
  bracket: [
    {
      round: "Round 1",
      matches: [
        { teamA: "The Pickles (Cain Gomez / Aiden Molinar)",             teamB: "Gabby Muniz / Cythia ayala",                           scoreA: "", scoreB: "", court: "Court 1", time: "8:30 AM",  winner: "" },
        { teamA: "daddy (kaden mendoza / Servando Olivas)",               teamB: "Daniel reyes / Nomar Gomez",                          scoreA: "", scoreB: "", court: "Court 2", time: "8:30 AM",  winner: "" },
        { teamA: "Team Kenobi (Kyle Covington / Jackson Ortiz)",          teamB: "Picklers (Ein Esquivel / Jay Davila)",                 scoreA: "", scoreB: "", court: "Court 3", time: "8:30 AM",  winner: "" },

        { teamA: "Heavy Hitters (Aaron Olivas / Jacob Gomez)",            teamB: "Pickle ticklers (Maribel Olivas / Kimberly Muniz)",   scoreA: "", scoreB: "", court: "Court 1", time: "9:05 AM",  winner: "" },
        { teamA: "The Shabooms (Tatum Holley / Max Rosales)",             teamB: "Dan Swartzlander / Misa Gomez",                       scoreA: "", scoreB: "", court: "Court 2", time: "9:05 AM",  winner: "" },
        { teamA: "Cole Ivison / Zoey Harris",                             teamB: "Dink Responsibly (Rylan Diaz / Alex montes)",         scoreA: "", scoreB: "", court: "Court 3", time: "9:05 AM",  winner: "" },

        { teamA: "Slix fitz (Eva Flores / Sloan Riordan)",                teamB: "Paddle bros (Jace Dickson / Tommy Evan's)",           scoreA: "", scoreB: "", court: "Court 1", time: "9:40 AM",  winner: "" },
        { teamA: "Big Dink Energy (Hailey Gribble / Aaron Franco)",       teamB: "Steven Johnson / Aaron",                              scoreA: "", scoreB: "", court: "Court 2", time: "9:40 AM",  winner: "" },
        { teamA: "Vortex (Eddie Herrera / Maverick Torres)",              teamB: "Angel Granados / Jorge Molinar",                      scoreA: "", scoreB: "", court: "Court 3", time: "9:40 AM",  winner: "" },

        { teamA: "Ball Busters (Hagen Tuck / Ej Lopez)",                  teamB: "Court Crushers (Annika Armendariz / Connor Hendricks)", scoreA: "", scoreB: "", court: "Court 1", time: "10:15 AM", winner: "" },
        { teamA: "Colt Beckham / Caden Fields",                           teamB: "John Brus / Ashur Tellez",                            scoreA: "", scoreB: "", court: "Court 2", time: "10:15 AM", winner: "" },
        { teamA: "Trace Garcia / Jaden Luebano",                          teamB: "The Pickle Ticklers (David Seals / Whitnee Seals)",   scoreA: "", scoreB: "", court: "Court 3", time: "10:15 AM", winner: "" },

        { teamA: "Jack Burgen / Abdi Molinar",                            teamB: "Ruben Mancha / Victor Alday",                         scoreA: "", scoreB: "", court: "Court 1", time: "10:50 AM", winner: "" },
        { teamA: "The Jackson's (Orlando zamora / Makinly Espinosa)",     teamB: "Dinkin Divas (Holly Conyers / Vicky Townsend)",       scoreA: "", scoreB: "", court: "Court 2", time: "10:50 AM", winner: "" },
        { teamA: "Marlee Ortiz / Rylee Ortiz",                            teamB: "Jade Brown / Ricardo Brown",                          scoreA: "", scoreB: "", court: "Court 3", time: "10:50 AM", winner: "" },

        { teamA: "Team critic (Zack Knox / Faryah nasrudin)",             teamB: "Forty one (Luii Rodriguez / Xavior Kidd Rodriguez)",  scoreA: "", scoreB: "", court: "Court 1", time: "11:25 AM", winner: "" },
        { teamA: "Dill With It (Lexi Emiliano / Audrey Casillas)",        teamB: "Caroline Gibson / Rhett Gibson",                      scoreA: "", scoreB: "", court: "Court 2", time: "11:25 AM", winner: "" },
        { teamA: "Okc Thunder (Auden Morales / Xavier Ramos)",            teamB: "JB Productions (Selena Garcia / Justin Bailey)",      scoreA: "", scoreB: "", court: "Court 3", time: "11:25 AM", winner: "" }
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
