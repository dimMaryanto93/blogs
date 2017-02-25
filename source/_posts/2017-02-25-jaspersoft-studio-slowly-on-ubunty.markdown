---
layout: post
title: "Jaspersoft Studio v6.3.1 tekesan lambat di Ubuntu 16.10"
date: 2017-02-25T16:15:31+07:00
author: Dimas Maryanto
comments: yes
page_category: ubuntu
language: ubuntu 
gist: 84d0a6b3e64cba87426140c5ee9219ed
repository: 
categories:
- Linux
- Ubuntu
- Jaspersoft Studio
tags:
- Report Generator
- Ubuntu
- Jaspersoft Studio
- Eclipse 
references:
---

Halo, setelah sekain lama udah tidak posting lagi karena kerjaan dikantor yang seabrek hehe, ok baiklah sekarang mau nulis tentang kanapa ya 
[Jaspersoft Studio v6.3.1](http://community.jaspersoft.com/project/jaspersoft-studio) di Ubuntu 16.10 kok sering hang padahal dari 
spesifikasi leptop saya lumayan mempuni seperti berikut

- RAM : 12GB
- CPU : Intel® Core™ i5-4210U CPU @ 1.70GHz × 4 
- Storage : SSD Samsung Evo 256GB
- VGA : GeForce 920M

Setelah searcing2 di google saya mendapatkan...

<!--more-->

Oh ternyata kita harus mengganti settingan theme Eclipsenya seperti ini:

buka configurasi file ```/path/TIBCO/JaspersoftStudio/Jaspersoft Studio.ini```

{% highlight ini %}
--launcher.GTK_version
2

// dan juga menambahkan memory jvm ya...

-Dosgi.requiredJavaVersion=1.8

// ya secukupnya aja sesuai dengan spec komputer
// contohnya

-XX:MaxPermSize=512M
{% endhighlight %}

Berikut file konfigurasi yang saya gunakan:

{% gist page.gist jaspersoft-studio.ini %}

Hasilnya wala... siap buat koding lagi, sekarang udah normal dan berasa ngebut lagi. Sekian dulu postingan tentang optimize 
software Jaspersoft Studio v6.3.1 di Ubuntu 16.10.