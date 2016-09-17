---
layout: post
title: "Menampilkan daftar nilai menggunakan Spring Framework Web MVC"
date: 2016-09-17T16:03:02+07:00
author: Dimas Maryanto
comments: yes
page_category: spring-webmvc
language: java
image_path: /images/2016-09/spring-webmvc-3/
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

Halo kembali lagi di blog saya, di [postingan sebelumnya]({% post_url 2016-09-17-spring-webmvc-setup %}) kita udah membuat dan test menampilkan data menggunakan Spring Framework Web MVC yaitu dengan mengirim nilai ke file `halo.jsp` dari `HaloController.java` dengan menggunakan menggunakan method HTTP GET. Sekarang kita akan menampilkan data berupa `java.util.List` artinya kita mengirim daftar nilai ke file `jsp` sama seperti sebelumnya kemudian di tampilkan ke dalam Table.

<!--more-->

Ok langsung aja ya, jadi karena saya belum menggunakan database jadi kita langsung aja ya membuat modelnya dengan nama `Product` dalam package `com.hotmail.dimmaryanto.software.entity` seperti berikut kodingnya:

{% gist page.gist "Product.java" %}

Kemudian kita buat controllernya dengan nama `ProductController` dalam package `com.hotmail.dimmaryanto.controller` berikut kodingnya:

{% gist page.gist "ProductController.java" %}

Penjelasannya dari koding diatas adalah kita membuat daftar product dengan data static value yang diisi nilainya melalui static method. seperti berikut:

{% highlight java %}
private static List<Product> daftarProduct = new ArrayList<>();
static {
    daftarProduct.add(new Product("Sabun Cuci", new BigDecimal(10000), 10));
    daftarProduct.add(new Product("Lemari", new BigDecimal(1200000), 5));
    daftarProduct.add(new Product("Ember", new BigDecimal(5000), 3));
}
{% endhighlight %}

Kemudian kita buat file `list.jsp` dalam folder `WEB-INF/pages/product/` seperti berikut:

![lokasi jsp]({{ page.image_path }}spring-webmvc-1.png)

Kemudian kodingnya seperti berikut:

{% gist page.gist "list.jsp" %}

Setelah semunya selesai coba anda running dengan perintah seperti berikut:

{% highlight bash %}
mvn clean package tomcat7:run
{% endhighlight %}

Maka outputnya seperti berikut:

{% highlight bash %}
[INFO] Running war on http://localhost:8080/tutorial.spring-webmvc
[INFO] Creating Tomcat server configuration at /home/dimmaryanto93/tutorial/spring-webmvc/target/tomcat
[INFO] create webapp with contextPath: /tutorial.spring-webmvc
Sep 17, 2016 3:55:30 PM org.apache.coyote.AbstractProtocol init
INFO: Initializing ProtocolHandler ["http-bio-8080"]
Sep 17, 2016 3:55:31 PM org.apache.catalina.core.StandardService startInternal
INFO: Starting service Tomcat
Sep 17, 2016 3:55:31 PM org.apache.catalina.core.StandardEngine startInternal
INFO: Starting Servlet Engine: Apache Tomcat/7.0.47
Sep 17, 2016 3:55:34 PM org.apache.catalina.core.ApplicationContext log
INFO: 1 Spring WebApplicationInitializers detected on classpath
Sep 17, 2016 3:55:34 PM org.apache.catalina.core.ApplicationContext log
INFO: Initializing Spring FrameworkServlet 'dispatcher'
Sep 17, 2016 3:55:34 PM org.springframework.web.servlet.DispatcherServlet initServletBean
INFO: FrameworkServlet 'dispatcher': initialization started
Sep 17, 2016 3:55:34 PM org.springframework.web.context.support.AnnotationConfigWebApplicationContext prepareRefresh
INFO: Refreshing WebApplicationContext for namespace 'dispatcher-servlet': startup date [Sat Sep 17 15:55:34 WIB 2016]; root of context hierarchy
Sep 17, 2016 3:55:34 PM org.springframework.web.context.support.AnnotationConfigWebApplicationContext loadBeanDefinitions
INFO: Registering annotated classes: [class com.hotmail.dimmaryanto.software.KonfigurasiWeb]
Sep 17, 2016 3:55:35 PM org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor <init>
INFO: JSR-330 'javax.inject.Inject' annotation found and supported for autowiring
Sep 17, 2016 3:55:35 PM org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping register
INFO: Mapped "{[/halo]}" onto public void com.hotmail.dimmaryanto.software.controller.HaloController.halo(org.springframework.ui.Model)
Sep 17, 2016 3:55:35 PM org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping register
INFO: Mapped "{[/product/list],methods=[GET]}" onto public void com.hotmail.dimmaryanto.software.controller.ProductController.listProduct(org.springframework.ui.Model)
Sep 17, 2016 3:55:36 PM org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter initControllerAdviceCache
INFO: Looking for @ControllerAdvice: WebApplicationContext for namespace 'dispatcher-servlet': startup date [Sat Sep 17 15:55:34 WIB 2016]; root of context hierarchy
Sep 17, 2016 3:55:36 PM org.springframework.web.servlet.DispatcherServlet initServletBean
INFO: FrameworkServlet 'dispatcher': initialization completed in 1481 ms
Sep 17, 2016 3:55:36 PM org.apache.coyote.AbstractProtocol start
INFO: Starting ProtocolHandler ["http-bio-8080"]
{% endhighlight %}

Kemudian coba kita browse menggunakan url berikut:

```
http://localhost:8080/tutorial.spring-webmvc/product/list
```

Maka hasilnya seperti berikut:

![hasil list]({{ page.image_path }}spring-webmvc-2.png)

Ok saya rasa cukup ya pembahasan tentang menampilkan data daftar menggunakan Spring Web MVC tanpa Database. See you next post!.
