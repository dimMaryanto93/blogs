---
layout: post
title: "Dependency Injection untuk JDBC"
author: Dimas Maryanto
comments: yes
page_category: jdbc
language: java
gist: dimMaryanto93/9670215f595e5415326e78df2d22977a
repository: https://github.com/dimMaryanto93/belajar-java-jdbc.git
categories:
- Java
- JDBC
- MariaDB
tags:
- Java
- JDBC
- MariaDB
- Netbeans
references:
---

Halo kembali lagi nih di blog saya, gak kerasa udah lumayan banyak ya topik tetang JDBC ini mulai dari [pengenalan]({% post_url 2016-07-31-jdbc %}) setelah itu [pisah antara model dengan struktur jdbc]({% post_url 2016-08-02-javabeans-jdbc %}) kemudian [modularisasi]({% post_url 2016-07-31-jdbc %}) dan yang terakhir adalah [externalisasi]({% post_url 2016-08-08-external-setup-jdbc %}), Nah jadi kali ini saya mau membahas salah satu topik yang tidak kalah menarik yaitu Dependency Injection untuk setup JDBC. jadi di materi externalisasi khan kita udah dipecah tu antara yang namanya konfigurasi seperti url, username, dan passwordnya. Sekarang kita akan lihat dulu apa sih magsud Dependency Injection trus kenapa harus diterapkan?

<!--more-->
