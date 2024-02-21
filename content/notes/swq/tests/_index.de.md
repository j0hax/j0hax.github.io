---
title: "Tests"
date: 2024-02-21T21:26:35+01:00
---

>Ausführen eines Programms mit dem Ziel, Fehler zu finden

# Testmethoden

Black-Box-Test
: Code ist unbekannt. Ist und Soll aus Anforderungen. **Findet nicht implementierte Requirements.**

White-Box-Test
: Code ist bekannt. Ist kommt aus Code. (reichen die Testfälle dafür? **Findet Fehler im Code**)

**Wichtig:** bei beiden Tests kommt der Soll-Wert aus der Spezifikation

# Testarten

Unit-Test
: Kleinste testbare Einheit (Methode, Klasse)

Testsuite
: Mehrere Testfälle nacheinander

Integrationstest
: Mehrere Komponenten zusammen testen

Systemtest
: Alle SW- und HW-Komponente zusammengebaut. Testet das System als ganzes.

Abnahmetest
: Spezialfall des Systemtests. Es wird sichergestellt, dass die vorher festgelegten Funktionen/Aspekte fehlerfrei funktionieren. (Nach Definition kein Test, da hier gezeit wird dass das System nach Anforderungen funktioniert)

# Testplan
Ein Testplan enthält neben den Testfällen noch
- Testmethoden (Black/White Box)
- Konfiguration der Testplattform
- Bereitstellung des Testgerüstes
- Kriterien für den Start der Testdurchführung
- Kriterien für die Testunterbrechung
- Kommunikationswege

# Error, Defekte und Fehler

Error
: Denkfehler (falsche Annahmen, etc.)

Defekt
: fehlerhafte Stelle im Code (z.B. Komma oder Vorzeichen falsch)

Fehler
: ein von außen beobachtbares Verhalten eines Programms, das vom spezifizierten Verhalten abweicht

Was muss erfüllt sein, damit ein Defekt zu einem Fehler führt?
- **Erreichbarkeit:** Die Stelle des Defekts im Programm muss erreicht werden
- **Infektion:** Der Zustand des Programms muss daraufhin inkorrekt sein
- **Propagation:** Der inkorrekte Zustand muss zu einer inkorrekten Ausgabe fiihren (also beobachtbar sein)

# Test-First-Programming

Es werden vor jeder Änderung im Code Testfälle geschrieben:

## Vorteile
- Man programmiert nur etwas wenn es wirklich gebraucht wird
- Die Funktionalitat kann sofort geprift werden
- Man halt sich an einen strikten Ablauf
## Nachteile
- Es werden nur Teilfunktionen betrachtet und nicht das >>Ganze<<

# Test-Driven-Development

1. Schreibe einen Testfall
2. Lass den Test laufen
3. Schreibe genug Code, damit der Testfall erfüllt ist
4. Lass alle Tests laufen
5. Refactor
6. Wiederhole

# Temporale Tests

Die meisten Tests sind *funktionale* Tests. Bei *temporalen* Tests handelt es sich um Raum/Zeit verhalten.

Laufzeittests
: Testen von Berechnungsdauern mit Stoppuhr, (auch Testen von Speicherverbrauch z.B. durch Profilier)

Komplexitatstests
: Ist Speicher-/Zeitverbrauch relativ zur Große der Eingabe wie erwartet?

Lasttests
: Testen erhalten eines Systems bei vielen Anfragen

Stresstests
: Testen mit zu vielen Anfragen; erholt sich das System?

# Operationale Tests

Sonstige Tests zum reibungslosen Betrieb eines Systems, z.B. Installations-, Kompatiblitäts-, Ergonomie-, Sicherheitstests