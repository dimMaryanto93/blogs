---
layout: post
title: "Handler Form Input Multivalues dengan Spring Web MVC"
date: 2016-09-18T07:42:43+07:00
author: Dimas Maryanto
comments: yes
page_category: spring-webmvc
language: java
image_path: /images/2016-09/spring-webmvc-5/
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

Halo, ini lanjutan dari [postingan sebelumnya]({% post_url 2016-09-17-spring-webmvc-form-input-handler %}) yaitu meng-handle Form input dengan menggunakan Spring Framework Web MVC, nah sekarang kita sama seperti tapi kita akan mengirimkan valuenya multivalues contoh kasusnya adalah Mahasiswa tersebut memilih daftar matakuliah yang akan di ambil.

<!--more-->

Ok sekarang kita modifikasi dulu kelas `Mahasiswa` seperti berikut:

{% gist page.gist "MahasiswaList.java" %}

Nah jadi kita disini hanya menambahkan model atribute `daftarMatakuliah` seperti berikut:

{% highlight java %}
private List<String> daftarMatakuliah = new ArrayList<>();

public List<String> getDaftarMatakuliah() {
    return daftarMatakuliah;
}

public void setDaftarMatakuliah(List<String> daftarMatakuliah) {
    this.daftarMatakuliah = daftarMatakuliah;
}
{% endhighlight %}

Kemudian setelah itu kita modifikasi file jspnya untuk `add.jsp` dan `info.jsp` seperti berikut:

Berikut untuk file `add.jsp`:

{% gist page.gist "addList.jsp" %}

Jadi kita hanya menambahkan field baru dengan tipe `select` seperti berikut:

{% highlight jsp %}
<div>
  <f:select path="daftarMatakuliah" multiple="true">
    <f:option value="Matematika" label="Matematika"/>
    <f:option value="Komputer" label="Komputer"/>
    <f:option value="Fisika" label="Fisika"/>
    <f:option value="Kimia" label="Kimia"/>
  </f:select>
</div>
{% endhighlight %}

Lalu berikut ini file yang `info.jsp`:

{% gist page.gist "infoList.jsp" %}

Untuk file `info.jsp` juga kita hanya menambahkan 1 kolom lagi kemudian kita tampilkan ke dalam element html `ul` atau list. Sekarang coba anda jalakan dengan menggunakan perintah berikut:

{% highlight bash %}
mvn clean package tomcat7:run
{% endhighlight %}

Outpunya kurang lebih sama seperti postingan sebelumnya karena kita tidak merubah kelas controllernya. Kemudian coba akses

```
http://localhost:8080/tutorial.spring-webmvc/student/add
```

Maka hasilnya akan menampilkan seperti berikut:

![img form]({{ page.image_path }}spring-webmvc-1.png)

Sekarang coba anda isi seperti berikut:

![img form field]({{ page.image_path }}spring-webmvc-2.png)

Ketika di submit maka hasilnya seperti berikut:

![img form submited]({{ page.image_path }}spring-webmvc-3.png)

Ok mungkin cukup sekian dulu apa yang bisa saya share tentang handle form multivalues menggunakan spring web mvc, mohon maaf jika ada kesalahan. See you next post!.
