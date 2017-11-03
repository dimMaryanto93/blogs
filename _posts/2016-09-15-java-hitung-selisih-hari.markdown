---
layout: post
title: "Menghitung selisih tanggal dengan menggunakan package java.time"
date: 2016-09-15T19:43:40+07:00
author: Dimas Maryanto
comments: yes
page_category: java_fundamental
gist:
language: java
repository:
categories:
- Java
- Fundamental
- Java8
tags:
- Java
- JDK
- Java8
references:
---

ok, hai nah kali ini saya mau share bagaimana cara menghitung selisih hari, contohnya tanggal ```2016-05-15 s/d 2017-05-20```  = berapa hari? hayo.... jawabanya sebagai berikut:

<!--more-->

{% highlight java %}
package com.hotmail.dimmaryanto.software;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class App {
	public static void main(String[] args) {
		LocalDate now = LocalDate.now();

		// tanggal setelah ditambah 1 tahun + 5 hari atau sama dengan 2017-05-20
		LocalDate plus2 = now.plusYears(1).plusDays(5);

		// hitung jumlah hari dari tanggal 2016-05-15 s/d 2017-05-20?
		Long dayPunish = ChronoUnit.DAYS.between(now, plus2);

		StringBuilder sb = new StringBuilder(now.toString())
			.append(" s/d ")
			.append(plus2.toString())
			.append(" = ")
			.append(dayPunish)
			.append(" Hari");

		System.out.println(sb.toString());
	}
}
{% endhighlight %}

Maka klo di jalankan outputnya seperti berikut:

{% highlight bash %}
2016-05-15 s/d 2017-05-20 = 370 Hari
{% endhighlight %}

Ok mungkin sekian dulu pembahasan tentang cara menggitung selisi tanggal menggunakan Java dengan package `java.time` khususnya menggunakan API `LocalDete`. See you next post!.
