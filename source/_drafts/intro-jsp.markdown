---
layout: post
title: "Pengenalan Java Server Pages (JSP)"
date: 2016-08-09T14:13:44+07:00
author: Dimas Maryanto
comments: yes
page_category: jsp
language: java
gist:
repository:
categories:
- Java
- JSP
tags:
- Java
- Web
- JSP
- ServerSide
references:
---

Halo, kali ini saya mau membahas tentang salah satu teknologi ServerSide di Java yaitu JSP (Java Server Pages) bukan Java Server Faces (JSF) itu beda ya!. JSP ini adalah Server Side programming yang digunakan untuk membangun halaman Web, basicnya kurang lebih sama kaya [PHP](http://php.net/) atau [ASP](http://www.asp.net/) karena kita bisa mengisipkan sintax PHP ke dalam [HTML](https://www.w3.org/html/) dengan menggunakan

{% highlight php %}
<?php
  echo "Ini sintax PHP";  
?>
{% endhighlight %}

nah JSP juga sama jadi kita bisa masukin sintax Java ke HTML menggunakan

{% highlight jsp %}
<%  out.println("Ini sintax JSP"); %>
{% endhighlight %}

atau anda juga bisa menggunakan gaya bahasa XML seperti berikut:

{% highlight jsp %}
<jsp:scriptlet>
  out.println("Ini sintax JSP lagi");
</jsp:scriptlet>
{% endhighlight %}

Seperti yang kita tau kalo Java ini punya 3 segment yaitu JavaSE, JavaME, JavaEE. nah Java Server Pages ini termasuk package dari JavaEE (Java Enterprice Edition) yang jadi pertanyaan apa cuman ini kompoenent di JavaEE? eistttt gak MASIH BANYAK loh fitur-fitur lain yang ada di JavaEE nih coba [baca disini](http://docs.oracle.com/javaee/6/tutorial/doc/bnaaw.html) banyak banget modul-modul yang harus dikuasai klo mau serius di Java Programmer mulai dari Servlet, Web Service, Security dan masih banyak lagi.

<!--more-->

JSP ini berextensi ```.jsp``` bukan ```.html``` dan media internet typenya yaitu ```application/jsp``` dan yang spesialnya lagi untuk mendeploy aplikasi yang menggunakan JSP ini harus menggunakan Web Server yang memiliki **servlet container** seperti [Apache Tomcat](http://tomcat.apache.org/), [GlashFish punyanya Oracle](https://glassfish.java.net/), [Undertow punyanya JBoss](http://undertow.io/) dan lain-lain.

JSP component adalah sejenis dengan [Java Servlet](http://www.oracle.com/technetwork/java/index-jsp-135475.html) yang khusus di design supaya user membangun user interface dengan mudah untuk aplikasi java web. Dengan JSP kita bisa membuat halaman yang dinamis seperti input data, ngambil data dari database dan lain-lain.

tag JSP dapat digunakan seperti mengambil data dari database, meng-akses komponent JavaBeans, bertukar informasi yang berbeda halaman, request dan lain-lain.

Keuntungan menggunakan JSP adalah

* JSP selalu melakukan kompilasi terlebih dahulu sebelum diproses, ini memang konsep java sejak dulu supaya menghasilkan koding yang mengurangi erorr yang disebabkan oleh sintax erorr.
* JSP bisa mengakses semua fitur JavaEE seperti EJB, JavaBeans, JDBC, Persistance dan lain-lain.
* JSP bisa dikombinasikan dengan Servlet untuk menghandle proses bisnis.

Ok mungkin segitu dulu, postingan kali ini tentang JSP (Java Server Pages). semoga tertarik untuk belajar dan see you next post!.
