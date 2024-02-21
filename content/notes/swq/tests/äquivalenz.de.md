---
title: "Äquivalenzklassentests"
date: 2024-02-21T21:56:26+01:00
---

**Idee:** Ein Programm reagiert bei der Verarbeitung eines Wertes aus einem bestimmten Bereich genau so wie bei der Verarbeitung jedes anderen Wertes aus diesem Bereich.

**Annahme:** Ahnliche eingaben finden ähnliche Fehler.

# Funktionsweise

1. Zerlege **Wertebereich der Eingabeparameter** oder (seltener) **Definitionsbereich der Ausgabeparameter** in Äquivalenzklassen
2. Aus jeder Äuivalenzklasse einen Repräsentanten nehmen
3. Repräsentanten aller Parameter geschickt kombinieren mit Testdaten

(Gutes Beispiel auf Pagina 10 von Übung 7.)

Testfalle sollen dem Minimal- und dem Effizienzprinzip genügen:
- **Minimalforderung:** Jede Anforderung durch min. einen Testfall abdecken
- **Effizienzprinzip**: Nicht mehr als einen Test pro Anforderung; moglichst mehrere Anforderungen durch einen Testfall abdecken

Wie viele Testfälle sollten mindestens für einen Aquivalenzklassentest aufgestellt werden, um dem Minimal- und dem Effizienzprinzip zu gentigen?
- Maximum von \(n, m, \dots, z\) wobei \(n, m, \dots, z\) gleich der Anzahl der AK pro Eingabeparameter

Wie viele Testfälle sind minimal aufzustellen, um alle Kombinationen der Aquivalenzklassen abzudecken?
- \(n\cdot m \cdot \ldots \cdot z\)