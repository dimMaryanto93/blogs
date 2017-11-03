---
layout: post
title: "Pengenalan Spring Framework"
date: 2016-08-18T14:57:46+07:00
author: Dimas Maryanto
comments: yes
page_category: springframework
language: java
gist:
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
image_path: /images/2016-08/spring-di/
---

Jaman sekarang semua orang (Java Programmer) termasuk saya berbodong-bondong menggunakan Spring Framework, nah yang jadi pertanyaan apa itu Spring Framework? trus kenapa dan Apa kelebihanya? apakah dapat mepercepet proses development?

<!--more-->

Ok saya jawab satu-persatu, yang pertama apa itu Spring Framework ini udah di jawab di [dokumentasinya Spring-Framework](http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#overview-getting-started-with-spring) gini katanya

> The Spring Framework is a Java platform that provides comprehensive infrastructure support for developing Java applications. Spring handles the infrastructure so you can focus on your application.

Jadi intinya adalah si Spring Framework ini menyediakan insfrastruktur untuk memanage objek-objek dengan mudah dengan membawa konsep **Dependency Injection dan Inversion of Control**, yang perlu di inget adalah **Dependency Management dengan Dependency Injection adalah hal yang berbeda** tapi memang fungsinya sedikit agak mirip. Mungkin dari benak teman-teman muncul lagi pertanyaan, apa sih Dependency Injection. OK2 saya jelaskan

Dependency Injection ini sebenarnya bukanlah konsep yang baru di dunia Programming Language, sudah ada sejak lama tepatnya telah diperkenalkan oleh [Martin Fowler](http://martinfowler.com/) , untuk memahami apa magsud dari Dependency Injection kita harus extract yaitu Dependency dan Injection. Dependency menurut beberapa pandangan dari para ahli yaitu objek-objek yang ketergantungan sedangkan untuk Injection sediri arti dasarnya masukan atau suntikan. kalo kita gabungkan maka hasilnya Objek-objek yang ketergantungan dari objek lain yang di infuse dari luar??? ngerti gak?? aneh ya? OK kita buat koding sederhana ya

disini saya punya tiga kelas yaitu Koneksi, DAO, DaoImpl yang saling berhubungan kurang lebih gini kalo digambarkan dengan Class Diagram:

![no dependency injection]({{ page.image_path }}no-di.jpg)

Klo kita koding tanpa menggunakan depedency injection jadi seperti ini:

{% highlight java %}
public class Koneksi{
 // method
}

public class DAO{
 // method
}

public class DaoImpl{
  private Koneksi konek = null;
  private DAO dao = null;

  // inisialisasi di contructor
  DaoImpl(){
    this.connect = new Koneksi();
  }

  // inisialisasi di method
  public void save(){
    this.dao = new Dao();
  }
}
{% endhighlight %}

Coba anda perhatikan pada method ```DaoImpl``` dan ```save``` disana kita meng-instance objek kelas ```DAO``` dan ```Koneksi```, itu sebenarnya gak masalah klo cuman ada 2 kelas bagaimana kalo ada 100 kelas?? yang saling berkaitan seperti akar pohon?? jadi source code kita kotor kayak sampah isinya inisialisasi semua?? setuju gak?. Nah sedangkan untuk yang menggunakan konsep Dependency Injection kurang lebih kayak gini:

{% highlight java %}
public class Koneksi{
 // method
}

public class DAO{
 // method
}

public class DaoImpl{
  // sediakan infrastructur
  private Koneksi konek;
  private DAO dao;

  // contruktor injection
  DaoImpl(Koneksi konek){
    this.connect = konek;
  }

  // setter injection
  public void setDao(DAO dao){
    this.dao = dao;
  }

  public void save(){}
}

public class MainImpl(){
  // inilah namanya Injection
  public static void main(String[] args){
    // objek dari kelas Koneksi dibuat dari luar source code (dependency)
    DaoImpl impl = new DaoImpl(new Koneksi());
    impl.save();
  }
}
{% endhighlight %}

Oh ia by the way koding diatas belum menggunakan Spring Framework ya!, sebenarnya konsep dependency injection ini tidak harus menggunakan Framework seperti Spring Framework, Play Framework dan lain-lain karena Dependency Injection ini adalah salah satu implementasi dari Design Pattern yaitu Inversion of Control. Gimana lebih nyaman dilihat dan dibaca khan? perbedaannya dari ke dua source code tersebut yaitu

* Dependency mudah dibaca contohnya klo yang DI (Dependency Injection) kelas ```DaoImpl``` membutuhkan objeck ```Koneksi``` dan ```DAO``` sedangkan tanpa DI ?? meskipun hasilnya sama butuh ```DAO``` dan ```Koneksi``` tapi yang DI ketika di intance harus meng-inject kelas ```Koneksi``` klo tidak maka akan error karena kita meng-inject dari contruktor
* Koding lebih bersih, (opini saya)
* Gampang di manage, jadi ketika aplikasinya udah kompleks dan menggunakan dependency yang banyak ini akan lebih mudah diatur ketimbang tanpa dependency injection.

Ok pertanyaan pertama dan ke dua udah terjawab ya, sekarang pertanyaan terakhir yaitu apakah akan mempercepat proses development? jawabanyan tergantu tapi dari pengalaman saya mengerjakan project itu bisa mengurangi biasya cost ketika terjadi perubahan infrastruktur. Ok mungkin segini dulu penjelasan mengenai penjelasan tentang Spring Framework. See you next post!.
