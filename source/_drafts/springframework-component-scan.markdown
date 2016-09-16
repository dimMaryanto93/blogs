---
layout: post
title: "Mengenal Component Scan di Spring Framework"
author: Dimas Maryanto
comments: yes
page_category: springframework
language: java
gist: dimMaryanto93/466c313fb585e753cd2e33e6fa6b7660
repository: https://github.com/dimMaryanto93/tutorial.springframework-ioc.git
categories:
- Java
- Framework
- SpringFramework
tags:
- Java
- Spring Framework
- Dependency Injection
references:
- https://projects.spring.io/spring-framework/
- http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/
---

Halo balik lagi di blog saya, di [postingan sebelumnya]({% post_url 2016-09-15-springframework-ref-bean %}) kita udah membuat dan mengenal bean references dari bean lain. Sekarang kita akan bahas tentang Component Scan di Spring Framework menggunakan konfigurasi XML.

<!--more-->

Kalo anda perhatikan kita setiap membuat bean di XML kita pasti membuat tag seperti berikut

{% highlight xml %}
<bean id="id" class="lokasi.package.nama.Class"></bean>
{% endhighlight %}

nah klo lama-lama atau setiap kita membuat bean seperti khan jadi numpuk nih di XML konfigurasinya seperti contohnya:

{% gist page.gist "SpringConfigRef.xml" %}

Nah jadi kita bisa sederhanakan, menggunakan menggunakan configurasi `componentScan` kemudian di setiap bean menggunakan annotation `@Component` atau `@Controller` atau `@Service` atau `@Repository`. nah sekarang coba hapus bean dengan id `aBean` seperti berikut

{% gist page.gist "SpringConfigComponentScan.xml" %}

Kemudian kita ubah, kelas `Bean` seperti berikut:

{% gist page.gist "BeanComponent.java" %}

Kemudian kita seperti biasa buat main methodnya seperti berikut:

{% gist page.gist "AppBeanComponent.java" %}

Setelah itu coba di run file, maka outputnya seperti berikut:

{% highlight bash %}
INFO: Loading XML bean definitions from class path resource [SpringConfig.xml]
Halo ini dari @Component
{% endhighlight %}

Penjelasanya jadi kita cukup menambahkan header xml seperti berikut:

{% highlight xml %}
<?xml version="1.0" encoding="windows-1252"?>
<beans
    xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation=  "http://www.springframework.org/schema/beans
                            http://www.springframework.org/schema/beans/spring-beans-4.3.xsd
                            http://www.springframework.org/schema/context
                            http://www.springframework.org/schema/context/spring-context-4.3.xsd"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:cache="http://www.springframework.org/schema/cache">

    <context:component-scan base-package="com.hotmail.dimmaryanto.software"/>    
</beans>
{% endhighlight %}
