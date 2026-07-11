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
  // Skill breakdown: 7 Advanced, 17 Intermediate, 12 Beginner.
  // Skill pairings: Beginner vs Intermediate and Intermediate vs Advanced only.
  // No Beginner vs Advanced. Advanced is an odd number (7), so one Advanced
  // team was paired against an Intermediate team instead of sitting out.
  // Mix: 3 Adv-vs-Adv, 1 Adv-vs-Int, 6 Int-vs-Int, 4 Beg-vs-Beg, 4 Beg-vs-Int —
  // spread across different waves/courts so no single time slot is all one type.
  scheduleReady: true,
  schedule: [
    { time: "8:30 AM",  court: "Court 1", teamA: "Jack Burgen / Abdi Molinar",                            teamB: "Cole Ivison / Zoey Harris",                             round: "Round 1" },
    { time: "8:30 AM",  court: "Court 2", teamA: "JB Productions (Selena Garcia / Justin Bailey)",        teamB: "Dan Swartzlander / Misa Gomez",                         round: "Round 1" },
    { time: "8:30 AM",  court: "Court 3", teamA: "Court Crushers (Annika Armendariz / Connor Hendricks)", teamB: "Ruben Mancha / Victor Alday",                           round: "Round 1" },

    { time: "9:05 AM",  court: "Court 1", teamA: "Dinkin Divas (Holly Conyers / Vicky Townsend)",         teamB: "The Shabooms (Tatum Holley / Max Rosales)",             round: "Round 1" },
    { time: "9:05 AM",  court: "Court 2", teamA: "Team Kenobi (Kyle Covington / Jackson Ortiz)",          teamB: "Jade Brown / Ricardo Brown",                            round: "Round 1" },
    { time: "9:05 AM",  court: "Court 3", teamA: "The Jackson's (Orlando zamora / Makinly Espinosa)",     teamB: "Paddle bros (Jace Dickson / Tommy Evan's)",             round: "Round 1" },

    { time: "9:40 AM",  court: "Court 1", teamA: "Dill With It (Lexi Emiliano / Audrey Casillas)",        teamB: "Steven Johnson / Aaron",                                round: "Round 1" },
    { time: "9:40 AM",  court: "Court 2", teamA: "Pickle ticklers (Maribel Olivas / Kimberly Muniz)",     teamB: "Daniel reyes / Nomar Gomez",                            round: "Round 1" },
    { time: "9:40 AM",  court: "Court 3", teamA: "Okc Thunder (Auden Morales / Xavier Ramos)",            teamB: "Ball Busters (Hagen Tuck / Ej Lopez)",                  round: "Round 1" },

    { time: "10:15 AM", court: "Court 1", teamA: "Marlee Ortiz / Rylee Ortiz",                            teamB: "Team critic (Angel Flores / Faryah nasrudin)",          round: "Round 1" },
    { time: "10:15 AM", court: "Court 2", teamA: "John Brus / Ashur Tellez",                              teamB: "Caroline Gibson / Rhett Gibson",                        round: "Round 1" },
    { time: "10:15 AM", court: "Court 3", teamA: "The Pickles (Cain Gomez / Aiden Molinar)",               teamB: "The Pickle Ticklers (David Seals / Whitnee Seals)",    round: "Round 1" },

    { time: "10:50 AM", court: "Court 1", teamA: "Angel Granados / Jorge Molinar",                        teamB: "Forty one (Luii Rodriguez / Xavior Kidd Rodriguez)",   round: "Round 1" },
    { time: "10:50 AM", court: "Court 2", teamA: "Trace Garcia / Jaden Luebano",                          teamB: "Colt Beckham / Caden Fields",                           round: "Round 1" },
    { time: "10:50 AM", court: "Court 3", teamA: "Big Dink Energy (Hailey Gribble / Aaron Franco)",       teamB: "Picklers (Ein Esquivel / Jay Davila)",                  round: "Round 1" },

    { time: "11:25 AM", court: "Court 1", teamA: "Gabby Muniz / Cythia ayala",                            teamB: "Vortex (Eddie Herrera / Maverick Torres)",              round: "Round 1" },
    { time: "11:25 AM", court: "Court 2", teamA: "Ervey Montes / Angel Elizondo",                         teamB: "Slix fitz (Eva Flores / Sloan Riordan)",                round: "Round 1" },
    { time: "11:25 AM", court: "Court 3", teamA: "Heavy Hitters (Aaron Olivas / Jacob Gomez)",            teamB: "The Real Dill (Austin Garza / Aiden Garza)",            round: "Round 1" }
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
        { teamA: "Jack Burgen / Abdi Molinar",                            teamB: "Cole Ivison / Zoey Harris",                             scoreA: "", scoreB: "", court: "Court 1", time: "8:30 AM",  winner: "Jack Burgen / Abdi Molinar" },
        { teamA: "JB Productions (Selena Garcia / Justin Bailey)",        teamB: "Dan Swartzlander / Misa Gomez",                         scoreA: "", scoreB: "", court: "Court 2", time: "8:30 AM",  winner: "Dan Swartzlander / Misa Gomez" },
        { teamA: "Court Crushers (Annika Armendariz / Connor Hendricks)", teamB: "Ruben Mancha / Victor Alday",                           scoreA: "", scoreB: "", court: "Court 3", time: "8:30 AM",  winner: "Court Crushers (Annika Armendariz / Connor Hendricks)" },

        { teamA: "Dinkin Divas (Holly Conyers / Vicky Townsend)",         teamB: "The Shabooms (Tatum Holley / Max Rosales)",             scoreA: "", scoreB: "", court: "Court 1", time: "9:05 AM",  winner: "The Shabooms (Tatum Holley / Max Rosales)" },
        { teamA: "Team Kenobi (Kyle Covington / Jackson Ortiz)",          teamB: "Jade Brown / Ricardo Brown",                            scoreA: "", scoreB: "", court: "Court 2", time: "9:05 AM",  winner: "Team Kenobi (Kyle Covington / Jackson Ortiz)" },
        { teamA: "The Jackson's (Orlando zamora / Makinly Espinosa)",     teamB: "Paddle bros (Jace Dickson / Tommy Evan's)",             scoreA: "", scoreB: "", court: "Court 3", time: "9:05 AM",  winner: "Paddle bros (Jace Dickson / Tommy Evan's)" },

        { teamA: "Dill With It (Lexi Emiliano / Audrey Casillas)",        teamB: "Steven Johnson / Aaron",                                scoreA: "", scoreB: "", court: "Court 1", time: "9:40 AM",  winner: "Dill With It (Lexi Emiliano / Audrey Casillas)" },
        { teamA: "Pickle ticklers (Maribel Olivas / Kimberly Muniz)",     teamB: "Daniel reyes / Nomar Gomez",                            scoreA: "", scoreB: "", court: "Court 2", time: "9:40 AM",  winner: "Daniel reyes / Nomar Gomez" },
        { teamA: "Okc Thunder (Auden Morales / Xavier Ramos)",            teamB: "Ball Busters (Hagen Tuck / Ej Lopez)",                  scoreA: "", scoreB: "", court: "Court 3", time: "9:40 AM",  winner: "Ball Busters (Hagen Tuck / Ej Lopez)" },

        { teamA: "Marlee Ortiz / Rylee Ortiz",                            teamB: "Team critic (Angel Flores / Faryah nasrudin)",          scoreA: "", scoreB: "", court: "Court 1", time: "10:15 AM", winner: "Team critic (Angel Flores / Faryah nasrudin)" },
        { teamA: "John Brus / Ashur Tellez",                              teamB: "Caroline Gibson / Rhett Gibson",                        scoreA: "", scoreB: "", court: "Court 2", time: "10:15 AM", winner: "John Brus / Ashur Tellez" },
        { teamA: "The Pickles (Cain Gomez / Aiden Molinar)",              teamB: "The Pickle Ticklers (David Seals / Whitnee Seals)",     scoreA: "", scoreB: "", court: "Court 3", time: "10:15 AM", winner: "The Pickles (Cain Gomez / Aiden Molinar)" },

        { teamA: "Angel Granados / Jorge Molinar",                        teamB: "Forty one (Luii Rodriguez / Xavior Kidd Rodriguez)",    scoreA: "", scoreB: "", court: "Court 1", time: "10:50 AM", winner: "Angel Granados / Jorge Molinar" },
        { teamA: "Trace Garcia / Jaden Luebano",                          teamB: "Colt Beckham / Caden Fields",                           scoreA: "", scoreB: "", court: "Court 2", time: "10:50 AM", winner: "Trace Garcia / Jaden Luebano" },
        { teamA: "Big Dink Energy (Hailey Gribble / Aaron Franco)",       teamB: "Picklers (Ein Esquivel / Jay Davila)",                  scoreA: "", scoreB: "", court: "Court 3", time: "10:50 AM", winner: "Big Dink Energy (Hailey Gribble / Aaron Franco)" },

        { teamA: "Gabby Muniz / Cythia ayala",                            teamB: "Vortex (Eddie Herrera / Maverick Torres)",              scoreA: "", scoreB: "", court: "Court 1", time: "11:25 AM", winner: "Vortex (Eddie Herrera / Maverick Torres)" },
        { teamA: "Ervey Montes / Angel Elizondo",                         teamB: "Slix fitz (Eva Flores / Sloan Riordan)",                scoreA: "", scoreB: "", court: "Court 2", time: "11:25 AM", winner: "Slix fitz (Eva Flores / Sloan Riordan)" },
        { teamA: "Heavy Hitters (Aaron Olivas / Jacob Gomez)",            teamB: "The Real Dill (Austin Garza / Aiden Garza)",            scoreA: "", scoreB: "", court: "Court 3", time: "11:25 AM", winner: "Heavy Hitters (Aaron Olivas / Jacob Gomez)" }
      ]
    },
     //put round 2 in here
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
    title: "MATCHUPS AVAILABLE",
    message: "Please check the bracket/schedule page to see your matchup. Please note that the time shown is estimated and match will more than likely be before posted time. PLEASE BE AT COURTS BEFORE POSTED TIME."
  }
};
