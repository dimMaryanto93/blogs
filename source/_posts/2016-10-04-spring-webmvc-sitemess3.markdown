---
layout: post
title: "Template Spring Web MVC dengan Sitemesh3"
date: 2016-10-04T21:16:58+07:00
author: Dimas Maryanto
comments: yes
page_category: spring-webmvc
language: java
image_path: /images/2016-10/spring-webmvc-8/
gist: dimMaryanto93/546c0ed6a01e0c986bda2a4610ae23cd
repository: https://github.com/dimMaryanto93/tutorial.spring-webmvc.git
categories:
- Java
- Framework
- Spring
- Web
- MVC
- Sitemesh3
tags:
- Java
- WEB
- MVC
- springframework
- spring-webmvc
- Sitemesh3
references:
- https://projects.spring.io/spring-framework/
- http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/
- http://wiki.sitemesh.org/wiki/display/sitemesh3/Home
---

Halo sudah hampir seminggu saya gak nulis gara" sibuk di kantor, nah di postingan kali ini saya mau membahas templating dengan menggunakan Sitemesh 3 di Spring Web MVC. magsudnya templating disini bukan css framework ya seperti bootstrap, materializecss dan kawan-kawannya. Jadi Sitemmesh3 ini digunakan untuk mengatur file JSP supaya bisa berinteraksi dengan JSP, sistem nya sama seperti tag `<% include %>` tapi ini sistemnya mereplace jika kurang jelas silahkan [baca disini](http://wiki.sitemesh.org/wiki/display/sitemesh3/Home)

<!--more-->

Ok langsung aja, seperti biasa kita tambahkan depedencynya dulu seperti berikut di file `pom.xml`:

{% highlight xml %}
<!-- https://mvnrepository.com/artifact/org.sitemesh/sitemesh -->
<dependency>
    <groupId>org.sitemesh</groupId>
    <artifactId>sitemesh</artifactId>
    <version>3.0.1</version>
</dependency>
{% endhighlight %}


Setelah menambahkan dependency kita buat configurasinya untuk mengaktifkan **Sitemesh3** yaitu dengan membuat kelas dengan nama `SitemeshFilterDecorator` seperti berikut:

{% gist page.gist "SitemeshFIterDocorator.java" %}

Setelah itu kita harus merubah konfigurasi webnya dari servlet context ke root seperti berikut:

{% gist page.gist "ServletInitRootConfig.java" %}

Lalu sekarang anda buat folder seperti aturan pada kelas `SitemeshFilterDecorator` yaitu `/WEB-INF/template/` kemudian buat file dengan nama `main.jsp`, isinya seperti berikut

{% gist page.gist "main.jsp" %}

nah jadi dengan menggunakan tag `<sitemesh:write property="body"/>` secara otomatis elements yang nanti dipanggil dari serlvet atau url akan di replace atau ditampilkan di halaman seperti itu contohnya kita ubah file `WEB-INF/pages/product/listproduct.jsp` menjadi seperti berikut:

{% gist page.gist "listproduct.jsp" %}

Jadi kesimpulanya kita buang tag `<html><body></body></html>` dari yang awalnya seperti berikut:

{% highlight jsp %}
<%@page contentType="text/html" pageEncoding="UTF-8" isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>List of Product</title>
    </head>
    <body>
        <!-- isi table -->
    </body>
</html>
{% endhighlight %}

Sekarang coba anda jalankan, maka hasilnya seperti berikut:

`http://localhost:8080/tutorial.spring-webmvc/product/list`

![hasilnya]({{ page.image_path }}sitemesh3-1.png)

Jadi intinya semua halaman akan memiliki element yang didefinisikan di file `main.jsp` tadi. Ok mungkin cukup sekian dulu hal yang bisa saya share, semoga bermanfaat dan mohom maaf jika ada kesalahan. See you next post!.
