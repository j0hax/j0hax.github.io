---
title: "SML Example"
date: 2023-06-06
---

Following Code contains solutions in part to the excercises (`traverse`) and the exam from the Summersemester 2022 (`print`). It is meant to serve as a small guide to SML syntax and data types.

```sml
(* Helper function to recursively concatenate a list*)
fun concat list1 list2 = foldr (fn (head, tail) => head::tail) list1 list2;

(* Define the tree datatype *)
datatype 'a tree = empty | node of 'a * 'a tree * 'a tree;

(* Declare a tree for demonstration purporses *)
val t = node(1,node(2,node(3,empty,node(4,empty,empty)),empty),node(5,empty,empty));

(* Recursively count nodes of a tree *)
fun nodes (empty) = 0
| nodes (node (_, t1, t2)) = 1 + nodes t1 + nodes t2;

(* Recursively traverse a tree, appending values to the list *)
fun traverse (empty) = []
  | traverse (node (v, t1, t2)) = concat (concat (traverse t2) (traverse t1)) [v];

(* Recurse the tree, printing nodes in a human-readable form *)
fun print (empty) = "_"
  | print (node (v, t1, t2)) = "(" ^ (print t1) ^ ", " ^ (Int.toString v) ^ ", " ^ (print t2) ^ ")";

traverse t;
print t;
```

The outputs of `traverse t;` and `print t;` respectively yield
```sml
[1, 2, 3, 4, 5]: int list;
```
and
```sml
"(((_, 3, (_, 4, _)), 2, _), 1, (_, 5, _))": string;
```
