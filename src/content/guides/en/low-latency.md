---
title: "Low-latency screen sync: where the delay comes from (and what to fix first)"
description: "A practical model of latency: capture → compute → output → device, and the knobs that matter most."
updatedAt: 2026-02-06
lastTestedAt: 2026-02-06
tldr: "Optimize in order: stability first, then capture pipeline, then effect complexity, then device throughput."
difficulty: intermediate
timeMinutes: 25
---

## Latency pipeline (mental model)

1. **Capture**: reading the screen (API/driver path)
2. **Compute**: sampling, zones, smoothing
3. **Output**: packing frames and sending to device
4. **Device**: controller + LEDs update rate

## The biggest wins

- Reduce overly aggressive smoothing
- Keep zone count reasonable
- Avoid competing RGB suites fighting for USB access

## How to measure (good enough)

Use a high-contrast flashing pattern on screen and record with a high-FPS camera; compare frame difference between the screen and LED response.

