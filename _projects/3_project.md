---
layout: page
title: Defense Against Cross-Domain Cyber–ML Attacks in Autonomous CPS
description: Securing multimodal perception pipelines against network-induced and timing attacks
img: assets/img/7.jpg
importance: 3
category: work
related_publications: true
---

### **Thrust III: Defense Against Cross-Domain Cyber–ML Attacks in Autonomous CPS**

Autonomous CPS depend on tightly coupled sensing, communication, and learning pipelines. Multimodal sensors such as cameras, LiDAR, and radar provide complementary information, while high-speed networks and synchronization protocols ensure that these data streams arrive on time and in alignment. Machine learning models then fuse these heterogeneous modalities to produce reliable scene understanding and support downstream planning and control. This seamless integration of sensing, networking, and ML is essential for safe autonomy—but it also introduces a new class of vulnerabilities that emerge between these domains.

My research in this thrust focuses on understanding and defending against cross-domain cyber–ML attacks that manipulate the communication, timing, or synchronization layers in ways that disrupt learning-based perception without ever altering the raw sensor content. These attacks exploit the implicit assumptions that autonomous systems make about temporal alignment, data freshness, and middleware integrity. Even small network-induced delays or subtle timing inconsistencies can break multimodal fusion logic, degrade perception accuracy, and cascade into hazardous control decisions {% cite shahriar2025fragility %}.

This research area seeks to uncover these overlooked vulnerabilities and build defenses that preserve the temporal and semantic integrity of multimodal perception pipelines. I study how timing, networking, and ML interactions create attack surfaces unique to autonomous systems, and I design lightweight, model-agnostic mechanisms that verify consistency across modalities based on shared semantics rather than trust in the network {% cite shi2023ms %}. By grounding security in cross-modal coherence, this thrust aims to ensure that multimodal perception remains reliable even when the underlying communication and synchronization stack is under adversarial influence.

Broadly, this direction contributes to a foundational understanding of how cyber-layer manipulations can silently compromise ML-driven autonomy, and develops principled defenses that secure the fusion of sensing, networking, and intelligence in next-generation autonomous CPS.
