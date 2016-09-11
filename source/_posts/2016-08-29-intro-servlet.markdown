---
layout: post
title: "Pengenalan Pemograman Servlet (Basic Java WEB)"
date: 2016-08-29T14:52:47+07:00
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
image_path: /images/2016-08/java-web-3/
---

Halo kembali lagi di blog saya, nah di postingan sebelumnya kita telah melakukan setup supaya webservernya di embeded oleh project yaitu dengan menggunakan `tomcat7-maven-plugin`. Nah sekarang saya mau membahas tentang basic pemograman Java Web yaitu Servlet. Apa itu Servlet?

<!--more-->

Pemograman Servlet, hal yang pertama yang anda harus ketahui jika kita ingin menggunakan teknologi Java Web karena sebelum kita menggunakan framework seperti JSP, SpringMVC, Struct2 dan lain-lain. Basic dari pemograman Java Web adalah Servlet. Nah sekarang kita masuk ke materi apa itu Servlet?

> Servlet adalah bahasa pemograman java yang khusus dibuat untuk Web, servlet ini akan menghasilkan request dan response dari Web Server. Web Server akan me-request dinamic web page dengan tujuan (response) mengenerate page static berupa html ke client (browser).

atau kalo kurang mengerti berikut penjelasan dari [tutorial point](http://www.tutorialspoint.com/servlets/servlets_overview.htm)

> Java Servlets are programs that run on a Web or Application server and act as a middle layer between a request coming from a Web browser or other HTTP client and databases or applications on the HTTP server.

Ok nah sekarang kita akan memulai membuat Servlet, untuk membuat servlet itu sebenarnya sangatlah mudah pertama kita harus tambahkan dulu dependency Servlet karena kita khan pake Java SE jadi package ```javax.servlet.*``` kita belum punya jadi kita tambahkan dlu ke ```pom.xml``` seperti berikut:

{% highlight xml %}
<dependency>
  <groupId>javax.servlet</groupId>
  <artifactId>servlet-api</artifactId>
  <version>2.5</version>
  <scope>provided</scope>
</dependency>
{% endhighlight %}

Setelah menambahkan dependencynya servlet, kita buat kelas baru dengan nama ```HaloController``` dalam package ```com.hotmail.dimmaryanto.software.controller``` isinya seperti berikut:

{% gist page.gist HaloController.java %}

Nah setelah kita membuat servlet, apa yang harus kita lakukan??? mungkin di benak anda mana urlnya untuk mengakses?? yak tepat sekali, kita perlu mapping urlnya untuk servlet tersebut. berikut adalah caranya:

1. Ubah file ```src/main/webapp/WEB-INF/web.xml```
2. Menggunakan annotation atau ```@WebServlet```

Jadi ada 2 cara yaitu dengan menggunakan web descriptor (xml) atau biasa menggunakan annotation ```@WebServlet```, nah sekarang kita coba dulu menggunakan yang XML dulu supaya tau gimana jaman dulu klo bikin Java Web itu seperti apa OK.

nah coba buka file ```web.xml``` seperti yang saya sebutkan tadi lokasinya. kemudian tambahkan tag ```<servlet></servlet>``` seperti berikut:

{% highlight xml %}
<!DOCTYPE web-app PUBLIC
 "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
 "http://java.sun.com/dtd/web-app_2_3.dtd" >

<web-app>
  <display-name>Archetype Created Web Application</display-name>
  <servlet>
    <servlet-name>Halo</servlet-name>
    <servlet-class>belajar.java.web.controller.HaloController</servlet-class>
  </servlet>

  <servlet-mapping>
    <servlet-name>Halo</servlet-name>
    <url-pattern>/selamat/datang</url-pattern>
  </servlet-mapping>

</web-app>
{% endhighlight %}

Nah sekarang coba running aplikasinya menggunakan maven plugin tomcat7 seperti beritku:

{% highlight bash %}
mvn clean package tomcat7:run
{% endhighlight %}

kemudian coba akses alamat berikut:

{% highlight bash %}
http://localhost:8080/tutorial-javawebapp/selamat/datang
{% endhighlight %}

maka hasilnya akan seperti berikut:

![servelt pertama]({{ page.image_path }}servlet-1.png)

Jadi penjelasanya adalah kita membuat ketika browser me-request alamat ```http://localhost:8080/tutorial-javawebapp/selamat/datang``` maka akan ditambkan oleh servlet dengan nama ```Halo``` yang mereferensi ke klass servlet yaitu ```belajar.java.web.controller.HaloController```. Ada pertanyaan silakan komentar atau mau lihat versi videonya seperti berikut:

{% youtube "watch?v=vPrviQt4YsQ" %}

OK mungkin sekian dulu postingan kali ini tentang dasar pemograman Java Web dengan Servlet. See you next post!.
