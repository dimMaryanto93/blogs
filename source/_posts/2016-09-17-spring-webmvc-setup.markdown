---
layout: post
title: "Setup project Spring Framework Web MVC"
date: 2016-09-17T11:48:37+07:00
author: Dimas Maryanto
comments: yes
page_category: spring-webmvc
language: java
image_path: /images/2016-09/spring-webmvc-2/
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

Halo, setelah kita [membuat project]({% post_url 2016-09-17-spring-webmvc-intro %}) untuk konfigurasi Java Web, sekarang kita akan melakukan konfigurasi untuk Spring Web MVC.

<!--more-->

Nah jadi di postingan sebelumnya kita udah membuat konfigurasi agar tomcatnya di embbed ke project mengguanakan `tomcat7-maven-plugin` nah sekarang untuk membuat setup project `spring-webmvc` kita harus menambahkan dulu dependencynya `spring-context` dan `spring-webmvc` seperti berikut:

{% highlight xml %}
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>4.3.2.RELEASE</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>4.3.2.RELEASE</version>
</dependency>
{% endhighlight %}

Nah jadi konfigurasi `pom.xml` kita sekarang menjadi seperti berikut:

{% gist page.gist "pom.xml" %}

Nah setelah menambahkan dependency `spring-webmvc` Sekarang kita akan membuat konfigruasi dengan menggunakan Java Konfigurasi, loh kok pake konfigurasi berbasis Java? bukannya harusnya pake `web.xml` nah jadi jaman dulu kita memang membuatnya dengan `web.xml` tapi jaman sekarang kita membuatnya dengan Menggunakan Java Konfigurasi karena saya sendiri lebih suka menggunakan Java Konfigurasi ketimbang XML Konfigruasi. ok lanjut ke topik, jadi klo dilihat `maven-archetype-webapp` udah membuatkan kita file `web.xml` seperti berikut:

![Konfigurasi web.xml]({{ page.image_path }}spring-webmvc-1.png)

Nah sekarang coba hapus file `web.xml`nya dalam folder `WEB-INF` kemudian kita akan membuat konfigurasi Spring dengan Java Konfigurasi, pertama buat kelas dengan nama `KonfigurasiWeb` dalam package `com.hotmail.dimmaryanto.software` seperti berikut:

{% gist page.gist "KonfigurasiWeb.java" %}

Nah jadi penjelasan dengan menggunakan `@EnableWebMvc` kita langsung akan mengaktifkan fitur `spring-webmvc` kemudian kita harus setting dimana lokasi file `.jsp` akan disimpan yaitu di dengan koding seperti berikut:

{% highlight java %}
@Override
public void configureViewResolvers(ViewResolverRegistry registry) {
    registry.jsp("/WEB-INF/pages/", ".jsp");
}
{% endhighlight %}

Nah kemudian kita buat kelas sebagai triger untuk menjalankan kelas `KonfigurasiWeb` tersebut dengan nama `ServletInit` dalam package yang sama seperti kelas tersebut seperti ini:

{% gist page.gist "ServletDispatcherInit.java" %}

Kemudian kita bisa test dengan membuat sebuah controller dengan nama `HaloController` dalam package `com.hotmail.dimmaryanto.software.controller` seperti berikut:

{% gist page.gist "HaloController.java" %}

Lalu kita buat file `halo.jsp` dalam folder `/WEB-INF/pages/` seperti berikut:

![Web jsp]({{ page.image_path }}spring-webmvc-2.png)

Berikut kodingnya:

{% gist page.gist "halo.jsp" %}

Sekarang coba anda run dengan menggunakan peritah seperti berikut:

{% highlight bash %}
mvn clean package tomcat7:run
{% endhighlight %}

Berikut output yang dihasilkan

{% highlight bash %}
[INFO] Running war on http://localhost:8080/tutorial.spring-webmvc
[INFO] Creating Tomcat server configuration at /home/dimmaryanto93/tutorial/spring-webmvc/target/tomcat
[INFO] create webapp with contextPath: /tutorial.spring-webmvc
Sep 17, 2016 11:43:12 AM org.apache.coyote.AbstractProtocol init
INFO: Initializing ProtocolHandler ["http-bio-8080"]
Sep 17, 2016 11:43:12 AM org.apache.catalina.core.StandardService startInternal
INFO: Starting service Tomcat
Sep 17, 2016 11:43:12 AM org.apache.catalina.core.StandardEngine startInternal
INFO: Starting Servlet Engine: Apache Tomcat/7.0.47
Sep 17, 2016 11:43:15 AM org.apache.catalina.core.ApplicationContext log
INFO: 1 Spring WebApplicationInitializers detected on classpath
Sep 17, 2016 11:43:15 AM org.apache.catalina.core.ApplicationContext log
INFO: Initializing Spring FrameworkServlet 'dispatcher'
Sep 17, 2016 11:43:15 AM org.springframework.web.servlet.DispatcherServlet initServletBean
INFO: FrameworkServlet 'dispatcher': initialization started
Sep 17, 2016 11:43:15 AM org.springframework.web.context.support.AnnotationConfigWebApplicationContext prepareRefresh
INFO: Refreshing WebApplicationContext for namespace 'dispatcher-servlet': startup date [Sat Sep 17 11:43:15 WIB 2016]; root of context hierarchy
Sep 17, 2016 11:43:15 AM org.springframework.web.context.support.AnnotationConfigWebApplicationContext loadBeanDefinitions
INFO: Registering annotated classes: [class com.hotmail.dimmaryanto.software.KonfigurasiWeb]
Sep 17, 2016 11:43:15 AM org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor <init>
INFO: JSR-330 'javax.inject.Inject' annotation found and supported for autowiring
Sep 17, 2016 11:43:16 AM org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping register
INFO: Mapped "{[/halo]}" onto public void com.hotmail.dimmaryanto.software.controller.HaloController.halo(org.springframework.ui.Model)
Sep 17, 2016 11:43:16 AM org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter initControllerAdviceCache
INFO: Looking for @ControllerAdvice: WebApplicationContext for namespace 'dispatcher-servlet': startup date [Sat Sep 17 11:43:15 WIB 2016]; root of context hierarchy
Sep 17, 2016 11:43:16 AM org.springframework.web.servlet.DispatcherServlet initServletBean
INFO: FrameworkServlet 'dispatcher': initialization completed in 1194 ms
Sep 17, 2016 11:43:16 AM org.apache.coyote.AbstractProtocol start
INFO: Starting ProtocolHandler ["http-bio-8080"]
{% endhighlight %}

Kemudian coba anda browse url berikut:

```
http://localhost:8080/tutorial.spring-webmvc/halo
```

Maka hasilnya akan menampilkan seperti berikut:

![Hasil jsp]({{ page.image_path }}spring-webmvc-3.png)

Ok mungkin sekian dulu hal yang bisa saya share tentang setup project untuk `spring-webmvc`. See you next post!.
