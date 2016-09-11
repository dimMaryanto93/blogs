---
layout: post
title: "Mendapatkan multiple parameter dengan Servlet dari HTML"
date: 2016-09-11T08:46:01+07:00
author: Dimas Maryanto
comments: yes
page_category: java-servlet
language: java
gist: dimMaryanto93/c0a51e92e23ada4ecb71f9c18c803fea
repository: https://github.com/dimMaryanto93/tutorial-java-webapp.git
categories:
- Java
- WEB
- Servlet
tags:
- Java
- Servlet
- ServerSide
references:
image_path: /images/2016-09/servlet-submit-multivalue/
---

Halo, di [postingan sebelumnya]({% post_url 2016-09-08-servlet-submitting-post-method %}) kita sudah memahami perbedaan tentang method GET dan POST, sekarang saya mau membahas tentang mengirim multiple parameter ke sebuah servlet dengan method GET, kenapa menggunakan GET? jawabanya supaya kita tau apa yang dikirim ditampilkan di URL ya tapi klo digunakan untuk aplikasi sesunggunya disarankan menggunakan POST ya!!!.

<!--more-->

Jadi saya punya form seperti berikut:

![multiple select]({{ page.image_path }}multiselect.png)

Dan jika di submit maka URLnya paramenternya akan menampilkan seperti berikut:

`atribut?values=bola&values=basket&values=touring`

Nah jadi bagaimana menangkap value tersebut kalo menggunakan `getParameter` itu hanya akan mengambil value yang terahhir muncul saya yaitu `touring` terus bagimana?

Ok sekarang anda buat dulu form HTMLnya dengan nama `multiplevalues.html` seperti berikut:

{% gist page.gist "multiplevalues.html" %}

Kemudian anda buat servletnya di dengan nama `MultipleValuesController.java` dalam package `belajar.java.web.controller` seperti berikut:

{% gist page.gist "MultipleValuesController.java" %}

sekarang klo form tersebut di submit maka akan tampil seperti berikut:

![hasil submit]({{ page.image_path }}getParamenterValues.png)

Nah jadi solusinya menggunakan method

{% highlight java %}
String[] values = response.getParameterValues("name-atribute");
{% endhighlight %}

setelah itu kita bisa loop datanya dari variable `values` tersebut. OK mungkin sekian dulu penjelasan tentang mendapatkan multiple value dengan Servlet. See you next post!.
