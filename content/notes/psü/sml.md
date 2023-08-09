---
title: "SML Example"
date: 2023-06-06
---

```sml
(* Recursively concatenate a list*)
fun concat list1 list2 = foldr (fn (head, tail) => head::tail) list1 list2;

(* Define the tree datatype *)
datatype 'a tree = empty | node of 'a * 'a tree * 'a tree;

(* Recursively count nodes of a tree *)
fun nodes (empty) = 0
| nodes (node (_, t1, t2)) = 1 + nodes t1 + nodes t2;

(* Recursively traverse a tree, appending values to the list *)
fun traverse (empty) = []
| traverse (node (v, t1, t2)) = concat (concat (traverse t2) (traverse t1)) [v];

(* Declare a tree for demonstration purporses *)
val t = node(1,node(2,node(3,empty,node(4,empty,empty)),empty),node(5,empty,empty));

traverse(t);
```