---
layout: post
title: "Servlet dengan Annotation"
date: 2016-09-08T08:21:34+07:00
author: Dimas Maryanto
comments: yes
page_category: java-servlet
language: java
gist:
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
---

Halo kembali lagi di blog saya, di postingan sebelumnya kita telah membuat servlet dengan menggunakan **xml-mapping**, jaman sekarang configurasi di xml udah usang atau jarang dipake sekarang udah **jamannya annotation** maka dari itu saya bakalan membahas tentang servlet dengan annotation.

<!--more-->

Jadi pada dasarnya untuk membuat servlet itu sama ja dengan postingan sebelumnya yang masih menggunakan xml artinya kita me-mapping servlet tersebut secara terpisah nah klo yang menggunakan annotation ini kita bisa langsung definisikan secara inline dalam kelas servlet tersebut contohnya seperti berikut tapi syaratnya kita harus ubah dulu configurasi `servlet-api` di file `pom.xml` menjadi versi seperti berikut:

{% highlight xml %}
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>3.1.0</version>
    <scope>provided</scope>
</dependency>
{% endhighlight %}

Kemudian kita bisa gunakan versi annotation seperti berikut:

{% highlight java %}
package belajar.java.web.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = {"/servlet-annotation"}, name = "configAnnotation")
public class ServletAnnotation extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // lakukan proses get
    }

}
{% endhighlight %}

klo anda perhatikan, di beris ke  terdapat sepenggalan koding seperti berikut:

{% highlight java %}
@WebServlet(urlPatterns = {"/servlet-annotation"}, name = "configAnnotation")
{% endhighlight %}

nah klo ini sama seperti configurasi di xmlnya seperti berikut:

{% highlight xml %}
<servlet>
    <servlet-name>configAnnotation</servlet-name>
    <servlet-class>belajar.java.web.controller.ServletAnnotation</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>configAnnotation</servlet-name>
    <url-pattern>/servlet-annotation</url-pattern>
</servlet-mapping>
{% endhighlight %}

Gimana perbandingannya cukup praktiskan untuk configurasi menggunakan Annotation. Nah jadi mulai saat ini kita akan terus menggunakan Annotation karena supaya lebih memudahkan dan mempercepat proses mapping url. Ok sekian dulu penjelasan tentang servlet menggunakan Annotation. See you next post!.
