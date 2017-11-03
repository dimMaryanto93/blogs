---
layout: post
title: "Include file css atau js di Spring Framework Web MVC"
date: 2016-09-18T17:06:41+07:00
author: Dimas Maryanto
comments: yes
page_category: spring-webmvc
language: java
image_path: /images/2016-09/spring-webmvc-6/
gist: dimMaryanto93/546c0ed6a01e0c986bda2a4610ae23cd
repository: https://github.com/dimMaryanto93/tutorial.spring-webmvc.git
categories:
- Java
- Framework
- Spring
- Web
- MVC
tags:
- Java
- WEB
- MVC
- springframework
- spring-webmvc
- CSS
references:
- https://projects.spring.io/spring-framework/
- http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/
---

Halo, nah kali ini saya mau share bagaimana cara include file `.css` atau `.js` dan lain-lain ke program yang kita buat yaitu menggunakan Spring Framework Web MVC.

<!--more-->

Nah jadi di beberapa bahasa pemograman seperti PHP meng-include-kan file `css` atau `js` itu udah hal biasa kita hanya perlu buat file misalnya `halo.css` kemudian kita taruh lah filenya di dalam project directory kita katakanlah namanya `styles` tapi klo di Java khususnya Spring Web MVC tidak sembarangan magsudnya?? ok langsung aja kita praktek.

Sekarang coba buat file dengan nama `halocss.css` dalam folder `WEB-INF/pages/style` seperti berikut:

![strucktur directory]({{ page.image_path }}spring-webmvc-0.png)

Berikut isinya:

{% highlight css %}
.halo{
    color: blue;
}
{% endhighlight %}

Setelah itu kita modifikasi file `halo.jsp` seperti berikut:

{% highlight jsp %}
<%@page contentType="text/html" pageEncoding="UTF-8" isELIgnored="false" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="st" %>

<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Page</title>
    <link rel="stylesheet" href="<st:url value="/style/halocss.css"/>" />
  </head>
  <body>
    <h3 class="halo">${pesan}</h3>
  </body>
</html>
{% endhighlight %}

Nah sekarang coba di run menggunakan perintah berikut:

{% highlight bash %}
mvn clean package tomcat7:run
{% endhighlight %}

Setelah server tomcatnya running sekarang coba browse url berikut:

```
http://localhost:8080/tutorial.spring-webmvc/halo
```

Maka tampil halaman halo kemudian **klik kanan** lalu **View Source** maka hasilnya seperti berikut:

![View source]({{ page.image_path }}spring-webmvc-1.png)

Setelah itu kita browse url berikut:

```
http://localhost:8080/tutorial.spring-webmvc/style/halocss.css
```

Maha hasilnya pasti seperti berikut:

![HTTP 404]({{ page.image_path }}spring-webmvc-2.png)

Jadi solusinya adalah kita harus daftarkan dulu file resources, jadi file `.css`, `.js` dll pokoknya selain file Java maka saya sebut resources ke konfigurasi Spring Framework Web MVC. tpi sebelum itu saya mau pindahkan dulu filenya dari `/WEB-INF/pages/style` menjadi `WEB-INF/style` supaya apa? supaya gak kecampur aja gak ada magsud lain kok heheh. jadi seperti ini klo digambarkan:

![resouces location]({{ page.image_path }}spring-webmvc-3.png)

Sekarang kita modifikasi file `KonfigurasiWeb` dalam package `com.hotmail.dimmaryanto.software` tambahkan seperti berikut:

{% highlight java %}
@Override
public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("/style/**")
              .addResourceLocations("/WEB-INF/style/");
}
{% endhighlight %}

Maka file `KonfigurasiWeb` nya seperti berikut:

{% gist page.gist "KonfigurasiWebIncludeCSS.java" %}

Nah sekarang coba anda restart server tomcatnya kemudian browse url berikut:

```
http://localhost:8080/tutorial.spring-webmvc/style/halocss.css
```

Maka hasilnya seperti berikut:

![Css view source]({{ page.image_path }}spring-webmvc-5.png)

Setelah itu berhasil diload sekarang coba akes ulr berikut:

```
http://localhost:8080/tutorial.spring-webmvc/halo
```

Maha hasilnya seperti berikut:

![CSS loaded]({{ page.image_path }}spring-webmvc-4.png)

Ok sekarang kita udah bisa meng-include-kan file `.css`, jika ingin lakukan hal yang sama untuk file `.js` kita bisa buat folder lagi misalnya `scripting` kemudian kita daftarkan lagi ke `KonfigurasiWeb` di method `addResourceHandlers()`. Ok mungkin sekian dulu hal yang bisa saya share tentang meng-include-kan file `css` atau `js` di Spring Framework WEB MVC, mohon maaf jika ada kesalahan. See you next post!.
