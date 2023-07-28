---
title: "How Sudoku saved an Experiment"
date: 2023-05-16
---

My girlfriend, a researcher in animal nutrition, pitched an interesting problem to me. Her task was to create a feeding plan for four pigs with six different types of feed, with the following constraints:
1. Each pig must recieve its feeds in a different order.
2. On a day of testing, no two pigs should receive the same feed.

My first idea was to start off each pig with a different feed, shifting every pig's feed each day. Unfortunately this was still undesirable, as even though each pig started and ended on with a different feed, the general order remained the same, which created the risk for carry-over-effects to happen.

After some pondering for the both of us, it dawned on me while staring at an empty spreadsheet. I had heard enough lectures on complexity theory the past two semesters to scratch just that itch: _What if I were to reduce this problem to a different known problem?_

## Sudoku to the rescue
The excellent [Libre-Sudoku](https://github.com/kaajjo/Libre-Sudoku) app for Android allows one to generate 6x6 playing fields. All that had to be done was solve the puzzle, trim the playing field to the amount of pigs in the experiment, and map integers to the specific feeds.

| F | T | N | P |
|:---:|:---:|:---:|:---:|
| P | B | B+L | B+HL |
| B+HL | P+L | P+HL | B+L |
| B+L | P+HL | B | P |
| P+L | P | B+HL | B |
| B | B+L | P+L | P+HL |
| B+HL | P+HL | P | P+L |

The trimmed table matches perfectly to the four pigs used (abbreviated to F, T, N, and P), with each row specifying the feed types (P, B, B+L, P+L, B+HL, P+HL) to be used on a given day of the experiment.

Surely there is a more direct way to solve this Problem as a [CSP](https://en.wikipedia.org/wiki/Constraint_satisfaction_problem), but in the heat of the moment, Sudoku did the trick.