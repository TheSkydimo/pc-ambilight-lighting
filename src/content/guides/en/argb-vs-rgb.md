---
title: "ARGB vs RGB: 5V vs 12V safety, connectors, and power budget"
description: "A safety-first guide: don’t mix headers, estimate current draw, and avoid cooking your LEDs or motherboard."
updatedAt: 2026-02-06
lastTestedAt: 2026-02-06
tldr: "ARGB (5V) is addressable; RGB (12V) is not. Never cross-connect voltages. Plan power and injection for long strips."
difficulty: beginner
timeMinutes: 15
---

## ARGB (5V) vs RGB (12V) in one minute

- **ARGB (5V)**: data + 5V + GND, per-LED control
- **RGB (12V)**: shared color channels, whole strip same color

## Why mixing them is dangerous

Voltage mismatch can damage LEDs, controllers, or motherboard headers.

## Power budget (rule of thumb)

Long strips may need external power and power injection to avoid dimming and color shift.

