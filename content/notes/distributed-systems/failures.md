---
title: "Faults and Failures"
date: 2023-10-22
---

# Types of Faults 

Transient
: Occurs only once and then goes away

Intermittent
: Irregular, comes and goes

Permanent
: Occurs only once and then goes away. Continues to exist (until repair)

# Propagation

Fault
: the cause of an error

Error
: part of a system’s state that may lead to a failure

Failure
: a system does not operate according to its specifications

- Faults lead to errors, errors lead to failures.

# Types of Failures

Crash failure
: A server halts, but is working correctly until it halts

Omission failure
: A server fails to respond to incoming requests, fails to receive incoming messages or fails to send messages

Timing failure
: A server's response lies outside the specified time interval

Response failure
: The server's response is incorrect, value of the response is wrong, or server deviates from the correct flow of control

Arbitrary (Byzantine) Failure
: A server may produce arbitrary responses at arbitrary times

# \(k\)-Fault-Tolerance

## Fail-Silent
\[
    n=k+1
\]
Replica produces either correct responses or no response at all.

## Fail-Consistent
\[
n=2k+1
\]
Replica produces either only correct or only faulty responses

## Byzantine
\[
n=3k+1
\]
Replica inconsistently produces correct or faulty responses