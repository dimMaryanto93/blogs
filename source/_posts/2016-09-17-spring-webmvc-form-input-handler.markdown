---
layout: post
title: "Handler Form Input dengan Spring Framework Web MVC"
date: 2016-09-17T19:49:07+07:00
author: Dimas Maryanto
comments: yes
page_category: spring-webmvc
language: java
image_path: /images/2016-09/spring-webmvc-4/
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
references:
- https://projects.spring.io/spring-framework/
- http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/
---

Halo kembali lagi di blog saya, di [postingan sebelumnya]({% post_url 2016-09-17-spring-webmvc-show-listvalue %}) kita udah menampilkan data product ke Table. Sekarang saya mau membahas tentang Form Input handler dengan JSP + Java Standard Tag Library di Spring Web MVC.

<!--more-->

Ok langsung aja, jadi kali ini kasusnya berbeda dengan yang sebelumnya kita akan membuat data mahasiswa. So kita buat kelas dengan nama `Mahasiswa` dalam package `com.hotmail.dimmaryanto.software.entity` seperti berikut:

{% gist page.gist "Mahasiswa.java" %}

Nah sekarang kita buat Controller untuk menampilkan form inputnya beserta proses submit yang nantinya nilai akan ditampilkan kembali ke file jsp. Ok sekarang buat controllernya dengan nama `MahasiswaController` dalam package `com.hotmail.dimmaryanto.software.controller` seperti berikut:

{% gist page.gist "MahasiswaController.java" %}

Jadi penjelasanya kita membuat 2 method yaitu `tampilForm()` dan `prosesForm()`, kita jelaskan 1/1 yaitu sebagai berikut:

1. Method `tampilForm()`, method tersebut digunakan untuk menampilkan form inputnya yaitu `/student/add.jsp` kemudian menggunakan method GET yang ditandai dengan `@GetMapping("/add")` lalu kita mendeklarasikan sebuat variable ke halaman `add.jsp` sebuah objek mahasiswa baru.
2. Method `prosesForm()`, method tersebut hanya menerima hasil input yang dilakukan oleh `add.jsp` kemudian nilainya ditangkap langsung ke Modelnya yaitu `@ModelAttribute Mahasiswa mhs` kemudian kita tambahkan lagi attribute ke halaman yang berbeda yaitu `/student/info.jsp`

Setelah menambahkan controller kita tambahkan file `add.jsp` dan `info.jsp` dalam folder `WEB-INF/pages/student/` seperti berikut:

Berikut file `add.jsp`

{% gist page.gist "add.jsp" %}

dan satunya lagi yaitu `info.jsp`

{% gist page.gist "info.jsp" %}

Jadi struktur directorynya sekarang seperti berikut:

![struktur directory]({{ page.image_path }}spring-webmvc-0.png)

Ok setelah itu anda bisa coba untuk di running dengan perintah seperti berikut:

{% highlight bash %}
mvn clean package tomcat7:run
{% endhighlight %}

Berikut outputnya:

{% highlight bash %}
[INFO] Running war on http://localhost:8080/tutorial.spring-webmvc
[INFO] Creating Tomcat server configuration at /home/dimmaryanto93/tutorial/spring-webmvc/target/tomcat
[INFO] create webapp with contextPath: /tutorial.spring-webmvc
Sep 17, 2016 7:42:17 PM org.apache.coyote.AbstractProtocol init
INFO: Initializing ProtocolHandler ["http-bio-8080"]
Sep 17, 2016 7:42:17 PM org.apache.catalina.core.StandardService startInternal
INFO: Starting service Tomcat
Sep 17, 2016 7:42:17 PM org.apache.catalina.core.StandardEngine startInternal
INFO: Starting Servlet Engine: Apache Tomcat/7.0.47
Sep 17, 2016 7:42:19 PM org.apache.catalina.core.ApplicationContext log
INFO: 1 Spring WebApplicationInitializers detected on classpath
Sep 17, 2016 7:42:19 PM org.apache.catalina.core.ApplicationContext log
INFO: Initializing Spring FrameworkServlet 'dispatcher'
Sep 17, 2016 7:42:19 PM org.springframework.web.servlet.DispatcherServlet initServletBean
INFO: FrameworkServlet 'dispatcher': initialization started
Sep 17, 2016 7:42:19 PM org.springframework.web.context.support.AnnotationConfigWebApplicationContext prepareRefresh
INFO: Refreshing WebApplicationContext for namespace 'dispatcher-servlet': startup date [Sat Sep 17 19:42:19 WIB 2016]; root of context hierarchy
Sep 17, 2016 7:42:19 PM org.springframework.web.context.support.AnnotationConfigWebApplicationContext loadBeanDefinitions
INFO: Registering annotated classes: [class com.hotmail.dimmaryanto.software.KonfigurasiWeb]
Sep 17, 2016 7:42:20 PM org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor <init>
INFO: JSR-330 'javax.inject.Inject' annotation found and supported for autowiring
Sep 17, 2016 7:42:20 PM org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter initControllerAdviceCache
INFO: Looking for @ControllerAdvice: WebApplicationContext for namespace 'dispatcher-servlet': startup date [Sat Sep 17 19:42:19 WIB 2016]; root of context hierarchy
Sep 17, 2016 7:42:20 PM org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping register
INFO: Mapped "{[/halo]}" onto public void com.hotmail.dimmaryanto.software.controller.HaloController.halo(org.springframework.ui.Model)
Sep 17, 2016 7:42:20 PM org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping register
INFO: Mapped "{[/student/add],methods=[GET]}" onto public void com.hotmail.dimmaryanto.software.controller.MahasiswaController.tampilForm(org.springframework.ui.Model)
Sep 17, 2016 7:42:20 PM org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping register
INFO: Mapped "{[/student/proses],methods=[POST]}" onto public java.lang.String com.hotmail.dimmaryanto.software.controller.MahasiswaController.prosesForm(com.hotmail.dimmaryanto.software.entity.Mahasiswa,org.springframework.ui.Model)
Sep 17, 2016 7:42:20 PM org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping register
INFO: Mapped "{[/product/list],methods=[GET]}" onto public void com.hotmail.dimmaryanto.software.controller.ProductController.listProduct(org.springframework.ui.Model)
Sep 17, 2016 7:42:21 PM org.springframework.web.servlet.DispatcherServlet initServletBean
INFO: FrameworkServlet 'dispatcher': initialization completed in 1144 ms
Sep 17, 2016 7:42:21 PM org.apache.coyote.AbstractProtocol start
INFO: Starting ProtocolHandler ["http-bio-8080"]
{% endhighlight %}

Kemudian anda bisa browse menggunakan url berikut:

```
http://localhost:8080/tutorial.spring-webmvc/student/add
```

Maka hasilnya seperti berikut kemudian kita input datanya mahasiswa hasilnya seperti ini:

![mahasiswa baru]({{ page.image_path }}spring-webmvc-1.png)

Dan ketika di submit maka hasilnya akan menampilkan seperti berikut:

![informasi mahasiswa]({{ page.image_path }}spring-webmvc-2.png)

Ok mungkin cukup sekian dulu apa yang saya bisa share, saya harap para pembaca mengerti dengan apa yang saya tulis. Mohon maaf jika ada kesalahan, See you next post!.
