THE GOLDEN PICKLE — WEBSITE SETUP GUIDE
=========================================

WHAT YOU HAVE
-------------
A 4-page static website:
  index.html     → Home page (hero, countdown, about, location)
  signup.html    → Team registration form
  schedule.html  → Schedule + bracket (tabs), with a "not posted yet" state
  results.html   → Champion + final standings, with a "not posted yet" state
  css/style.css  → All styling
  js/data.js     → Edit this file to update event info, schedule, bracket, results
  js/main.js     → Site behavior (don't need to touch this)


1. HOSTING IT
--------------
This is a plain HTML/CSS/JS site — no server required. Upload the whole
"golden-pickle" folder to any web host (GoDaddy, Bluehost, Netlify,
GitHub Pages, etc.) keeping the folder structure exactly as-is, with
index.html at the root of wherever your domain points.


2. THE SIGN-UP FORM
--------------------
The sign-up page now embeds your Google Form directly, so entries go
straight to your Google account / linked spreadsheet — nothing else to
set up. If you ever need to swap in a different Google Form:

  1. In Google Forms, open the form, click "Send", choose the "<>"
     (embed) icon, and copy the iframe code it gives you.
  2. Open signup.html, find the <div class="gform-embed"> section near
     the top of the page, and replace the existing <iframe> with the
     new one you copied.

The form's width/height are controlled by css/style.css (.gform-embed),
so it will resize to fit the page even if Google gives you a fixed
width/height in the embed code.


3. UPDATING THE SCHEDULE, BRACKET, AND RESULTS
-------------------------------------------------
Everything lives in js/data.js — open it in any text editor (Notepad,
TextEdit, VS Code, etc.). You do NOT need to touch the HTML files.

  - Event details (date, venue, address, fee) are at the top of the file.
  - To publish the schedule: set  scheduleReady: true  and fill in the
    "schedule" list with one line per match.
  - To publish the bracket: set  bracketReady: true  and fill in "bracket"
    with rounds and matches.
  - To publish results: set  resultsReady: true  and fill in the
    champion, runner-up, and placements.

  Each section has a commented-out example showing the exact format —
  just copy the example, uncomment it, and fill in your real info.
  Keep quotes "" and commas , exactly where they are or the page may
  stop working — if that happens, undo your last change and try again
  more carefully.

  IMPORTANT: re-upload js/data.js to your host every time you update it.


4. THINGS TO PERSONALIZE BEFORE LAUNCH
-----------------------------------------
  - js/data.js: confirm exact venue name + street address (currently a
    placeholder), entry fee, and registration deadline.
  - index.html: the embedded map currently just centers on "Andrews, TX" —
    once you have the exact address, you can get a more precise embed code
    from Google Maps ("Share" → "Embed a map") and swap it into the
    <iframe> in the "Where to find us" section.
  - Swap in your existing tournament poster/logo if you'd like — happy to
    help integrate it into the design if you upload it.


Questions or want changes (different colors, an entry fee field, a
waiver/liability checkbox, etc.) — just ask.
