---
layout: page
title: Defense Against Adversarial and Backdoor ML Attacks in Autonomous CPS
description: Unified defenses for trustworthy perception in autonomous cyber-physical systems
img: assets/img/thrust_2.jpg
importance: 2
category: work
related_publications: true
---

### **Thrust II: Defense Against Adversarial and Backdoor ML Attacks in Autonomous CPS**

As autonomous CPS increasingly rely on high-capacity ML models to interpret multimodal sensor data and guide real-time decisions, these models become prime targets for adversarial and backdoor attacks. Even small, carefully crafted perturbations—often imperceptible to humans—can break perception pipelines, distort situational awareness, and trigger dangerous control actions. These risks are amplified in autonomous vehicles, robots, and UAVs, where the physical consequences of misclassification can be immediate and severe.

My research in this thrust focuses on understanding, modeling, and defending against these ML-targeted manipulations within safety-critical autonomous systems. I study how adversarial and backdoor attacks exploit the internal representations of perception models, how these vulnerabilities manifest across sensing modalities {% cite shahriar2025fragility %}, and how to design defenses that remain effective under real-world constraints such as limited compute, dynamic environments, and online decision-making.

A key component of this research direction is developing **unified, modality-agnostic defenses** that protect the perception stack against a wide spectrum of ML attacks. Rather than treating adversarial and backdoor attacks as isolated problems, my work examines the shared structural characteristics of malicious perturbations and leverages these insights to build generalizable, efficient, and interpretable detection mechanisms {% cite shahriar2025let %}. I also explore how noise geometry, representation alignment, and system-level context can be used to create lightweight defenses suitable for real-time CPS and resource-constrained platforms.

Broadly, this thrust aims to establish a principled foundation for **trustworthy perception** in autonomous CPS by ensuring that ML models remain reliable, secure, and tamper-resistant even in adversarial environments.
