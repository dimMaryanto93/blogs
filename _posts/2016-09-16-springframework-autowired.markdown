---
layout: post
title: "Mengenal Autowired di Spring Framework"
date: 2016-09-16T19:53:52+07:00
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

Halo kembali lagi di blog saya, di [postingan sebelumnya]({% post_url 2016-09-16-springframework-component-scan %}) kita udah mengenal apa itu component scan. Sekarang kita akan belajar apa itu Autowired di Spring Framework menggunakan annotation.

<!--more-->

Ok mulai sekarang kita tidak akan membuat bean dari XML lagi melaikan dengan menggunakan `@Component` karena ribet jadi ubah konfigurasi springnya seperti berikut:

{% gist page.gist "SpringConfigAutowired.xml" %}

Kemudian khan kita menghapus 2 bean yaitu `refBean` dan `dataBean` sekarang kita pindahkan ke annotation base `@Component` seperti berikut:

{% gist page.gist "RefBeanAutowired.java" %}

Nah klo anda perhatikan koding tersebut beda sama koding sebelumnya yaitu saya mengganti dari `DataBean` menjadi kelas `Bean` setelah itu di atas method `setBean(Bean b)` tambahkan `@Autowired` supaya objek `Bean` ketika dipanggil tidak menghasilkan `NullPointerException` atau `Null` artinya objectnya diisi sedara otomatis ketika object `RefBean` diinisilaisisi oleh Spring Container. Sekarang coba anda buat main method untuk menjalankan atau mengecek apakah koding tersebut benar, seperti berikut:

{% gist page.gist "AppAutowired.java" %}

Sekarang klo anda run filenya dari Netbeans, maka outpunya seperti berikut:

{% highlight bash %}
INFO: Loading XML bean definitions from class path resource [SpringConfig.xml]
Bean relasi atribute pesan bernilai: Halo ini dari @Component
{% endhighlight %}

Ok mungkin cukup sekian dulu apa yang bisa saya share tentang Autowired di Spring Framework, See you next post!.
