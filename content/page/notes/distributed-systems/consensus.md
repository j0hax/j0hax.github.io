---
title: "Consensus Algorithms"
date: 2023-10-22
---

Multiple independent processes need to agree on an outcome.

A correct consensus protocol fulfills the following criteria:

Termination
: every correct process decides some value

Integrity
: if all processes proposed the same value \(v\), then any correct process must decide \(v\)

Agreement
: Every *correct* process must agree on the same value

