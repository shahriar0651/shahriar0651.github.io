---
title: "MS-PTP: Protecting Network Timing from Byzantine Attacks"
collection: publications
permalink: /publication/2023-05-29-Paper_MSPTP
excerpt: 'This paper present the security vulnerabilities of precision time protocol (PTP) and discuss limitations of existing defenses.'
date: 2023-05-29
venue: '16th ACM Conference on Security and Privacy in Wireless and Mobile Networks (WiSec)'
# slidesurl: 'http://shahriar0651.github.io/files/slides2.pdf'
paperurl: 'http://shahriar0651.github.io/files/paper_2023_MSPTP.pdf'
citation: 'Shi, S., Xiao, Y., Du, C., Shahriar, M. H., Li, A., Zhang, N., Hou, Y, & Lou, W. (2023). Ms-ptp: Protecting network timing from byzantine attacks. In Proceedings of the 16th ACM Conference on Security and Privacy in Wireless and Mobile Networks (pp. 61-71).'
---

Time-sensitive applications, such as 5G and IoT, are imposing increasingly stringent security and reliability requirements on network time synchronization. Precision time protocol (PTP) is a de facto solution to achieve high precision time synchronization. It is widely adopted by many industries. Existing efforts in securing the PTP focus on the protection of communication channels, but little attention has been given to the threat of malicious insiders. In this paper, we first present the security vulnerabilities of PTP and discuss why the current defense mechanisms are unable to counter Byzantine insiders. We demonstrate how a malicious insider can spoof a time source to arbitrarily shift the system time of a victim node on an IoT testbed. We further demonstrate the harmful consequence of the attack on a real Turtlebot3 robotic platform as the robot fails to locate itself and follows a false trajectory. As a countermeasure, we propose multi-source PTP, in short, MS-PTP, a Byzantine-resilient network time synchronization mechanism that relies on time crowdsourcing. MS-PTP changes the current PTP's single source hierarchy to a multi-source client-server architecture, in which PTP clients take responses from multiple time servers and apply a novel secure aggregation scheme to eliminate the effect of malicious responses from unreliable sources. MS-PTP is able to counter f Byzantine failures when the total number of time sources n used by a client satisfies n>=3f+1. We provide rigorous proof for its non-parametric accuracy guarantee---achieving bounded error regardless of the Byzantine population. We implemented a prototype of MS-PTP on our IoT testbed and the results show its resilience against Byzantine insiders while maintaining high synchronization accuracy.