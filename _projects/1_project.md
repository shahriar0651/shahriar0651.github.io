---
layout: page
title: Defending Autonomous CPS Against Adaptive and Stealthy Cyber Attacks
description: Trustworthy ML-based intrusion detection systems for autonomous cyber-physical systems
img: assets/img/thrust_1.jpg
importance: 1
category: work
related_publications: true
---

### **Thrust I: Defending Autonomous CPS Against Adaptive and Stealthy Cyber Attacks**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/thrust_1.jpg" title="Thrust I: Defending Autonomous CPS Against Adaptive and Stealthy Cyber Attacks" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Autonomous cyber-physical systems (CPS)—such as connected and autonomous vehicles—combine heterogeneous sensors, actuators, controllers, and communication interfaces that continuously exchange safety-critical information. While this connectivity enables advanced autonomy, it also expands the attack surface, creating new opportunities for stealthy and adaptive cyber threats. To secure these systems, intrusion detection must go beyond fixed, signature-based rules and instead learn normal behavior, detect deviations, and remain resilient even when adversaries attempt to deceive the detector itself.

My research addresses this challenge by developing **trustworthy ML-based intrusion detection systems (IDS)** that are both _effective_ in identifying subtle malicious behaviors and _robust_ against adversarial manipulation. I pursue a unified approach that integrates CPS domain knowledge, time-series modeling, and adversarial resilience to safeguard the communication and control pipelines of autonomous systems.

My initial work focused on securing in-vehicle communication over the Controller Area Network (CAN). I developed **CANShield** {% cite shahriar2023canshield %}, an ML-based IDS that leverages the physical and temporal semantics of CAN traffic to detect a broad range of intrusions. CANShield ensembles autoencoders across multiple temporal and spatial scales, achieving high accuracy and low latency across benchmark datasets and real attacks generated with Oak Ridge National Laboratory.

Expanding this vision to vehicle-to-everything (V2X) communication, I designed **VehiGAN** {% cite shahriar2024vehigan shahriar2025vehigan %}, a generative-model–based misbehavior detection framework built on Wasserstein GANs. VehiGAN learns normal V2X communication patterns and detects deviations with inherent robustness to adversarial attempts to bypass detection. Through collaboration with Qualcomm, I constructed a large-scale V2X dataset and demonstrated that VehiGAN substantially improves detection performance and robustness under adaptive attacks.

Together, these efforts contribute to a principled foundation for **adaptive, resilient, and domain-informed ML-based defense mechanisms** for next-generation autonomous CPS.
