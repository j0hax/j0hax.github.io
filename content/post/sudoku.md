---
title: "How Sudoku saved an Experiment"
date: 2023-05-16
draft: true
---

My girlfriend, a researcher in animal nutrition, pitched an interesting problem to me. Her task was to create a randomized feeding plan for four pigs with six different types of feed, with the following constraints:
1. No pig should receive its feed in the same order as another pig,
2. Feeds should be as different as possible each day of the test.

My first idea was to start off each pig with a different feed, shifting every pig's feed each day. Unfortunately this was still undesirable, as even though each pig started and ended on with a different feed, the order remained the same, which created the risk for carry-over-effects to happen.

After quite some pondering for the both of us, it dawned on me while staring at an empty spreadsheet. I had heard enough lectures on complexity theory the past two semesters to scratch just that itch.

_What if I were to reduce this problem to a different known problem?_ I thought. The answer seemed far too trivial.

## Sudoku to the rescue

The excellent [Libre-Sudoku](https://github.com/kaajjo/Libre-Sudoku) app for Android allows one to generate 6x6 playing fields, just what I needed in order to map integers to feeds. All that had to be done was solve the puzzle, which, at the smaller size, proved to be quite doable.