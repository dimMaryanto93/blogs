---
layout: post
title: "Membuat entity dengan Annotation"
date: 2016-09-11T20:12:14+07:00
author: Dimas Maryanto
comments: yes
page_category: hibernate
language: java
gist: dimMaryanto93/e8d2abb5361e811860d6a462270f119b
repository: https://github.com/dimMaryanto93/tutorial.hibernate-core.git
categories:
- Java
- Framework
- JPA
- Hibernate
tags:
- Java
- Hibernate
- Maven
- JPA
- ORM
references:
- http://docs.jboss.org/hibernate/orm/5.2/quickstart/html_single/
- http://docs.jboss.org/hibernate/orm/5.2/userguide/html_single/Hibernate_User_Guide.html
---

Halo kembali lagi, di [postingan sebelumnya]({% post_url 2016-09-11-hibernate-cfg %}) kita udah memahami bagaimana dan apa fungsinya file `hibernate.cfg.xml`. Sekarang kita akan membuat entity dengan menggunakan Annotation? kenapa Annotation? tidak menggunakan XML seperti file `hibernate.cfg.xml`?? Jawabanya gak ah males klo harus berurusan dengan XML mulu heheh... just kidding :). Sebenarnya sih alasanya supaya kita gak terlalu banyak file ya jadi kita buat di satu Kelas ja, kalo menggunakan XML minimalnya kita membuat 2 buat file yaitu JavaBeans dan `hbm.xml` atau bisa dibilang mapping kelasnya.

<!--more-->

Untuk membuat entity pada dasarnya sama dengan membuat JavaBeans, klo belum tau apa itu JavaBeans silahkan [googleing](https://en.wikipedia.org/wiki/JavaBeans) dulu atau baca [artikel ini]({% post_url 2016-08-02-javabeans-jdbc %}) hanya memiliki tambahan annotation seperti `@Entity`, `@Column`, `@Table` dan lain-lain nanti kita akan bahas lebih lanjut di masing-masing annotation pada hibernate.

Ok sekarang kita buat kelas baru dengan nama `Mahasiswa` dalam package `com.hotmail.dimmaryanto.software.entity` seperti berikut:

{% gist page.gist "Mahasiswa.java" %}

Dengan koding tersebut sama seperti kita membuat Data Definition Language seperti berikut:

{% highlight postgresql %}
create table master_mahasiswa (
  kode int8 not null,
  nama_mahasiswa varchar(25) not null,
  nim_mahasiswa varchar(8) not null,
  tahun_masuk int4,
  primary key (kode)
)
{% endhighlight %}

*note tidak perlu diexecute ke database ini hanya perumpamaan saja, karena seperti yang kita bahas diawal dengan menggunakan hibernate kita tidak perlu membuat table.

Tahap selanjutnya kita perlu daftarkan JavaBeans `Mahasiswa` tersebut untuk di mapping oleh hibernate, caranya dengan buka kembali konfigurasi `SessionFactory` pada kelas `HiternateKonfigurasi` kemudian modifikasi kodingnya seperti berikut:

{% highlight java %}
public static SessionFactory getSessionFactory(){
  return new Configuration()
      .addAnnotatedClass(Mahasiswa.class)
      .configure().buildSessionFactory();
}
{% endhighlight %}

Sekarang coba anda **Run File** kelas `App` maka outputnya seperti berikut:

{% highlight bash %}
Building Tutorial Hibernate Core 1.0
------------------------------------------------------------------------

--- exec-maven-plugin:1.2.1:exec (default-cli) @ tutorial.hibernate-core ---
Sep 11, 2016 7:49:05 PM org.hibernate.Version logVersion
INFO: HHH000412: Hibernate Core {5.2.2.Final}
Sep 11, 2016 7:49:05 PM org.hibernate.cfg.Environment <clinit>
INFO: HHH000206: hibernate.properties not found
Sep 11, 2016 7:49:05 PM org.hibernate.cfg.Environment buildBytecodeProvider
INFO: HHH000021: Bytecode provider name : javassist
INFO: HHH000262: Table not found: master_mahasiswa

# hibernate logger lain-lain
Hibernate:
  create table master_mahasiswa (
    kode int8 not null,
    nama_mahasiswa varchar(25) not null,
    nim_mahasiswa varchar(8) not null,
    tahun_masuk int4,
    primary key (kode)
  )
Hibernate:
  alter table master_mahasiswa
  drop constraint UK_gld9llgpgky9s6dmyygi9r2lp
Hibernate:
  alter table master_mahasiswa
  add constraint UK_gld9llgpgky9s6dmyygi9r2lp unique (nim_mahasiswa)
Hibernate:
  create sequence hibernate_sequence start 1 increment 1
------------------------------------------------------------------------
BUILD SUCCESS
{% endhighlight %}

Nah jadi sekarang coba anda periksa table master_mahasiswa dalam database tutorial_hibernate berikut perintahnya:

{% highlight postgresql %}
# login ke database tutorial_hibernate
psql -h localhost -U tutorial_hibernate

psql (9.5.4)
SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
Type "help" for help.

# check daftar table
\dt

                      List of relations
 Schema |       Name       | Type  |       Owner        
--------+------------------+-------+--------------------
 public | master_mahasiswa | table | tutorial_hibernate
(1 row)


# lihat struktur table master_mahasiswa
\d master_mahasiswa

Table "public.master_mahasiswa"
    Column     |         Type          | Modifiers
----------------+-----------------------+-----------
kode           | bigint                | not null
nama_mahasiswa | character varying(25) | not null
nim_mahasiswa  | character varying(8)  | not null
tahun_masuk    | integer               |
Indexes:
   "master_mahasiswa_pkey" PRIMARY KEY, btree (kode)
   "uk_gld9llgpgky9s6dmyygi9r2lp" UNIQUE CONSTRAINT, btree (nim_mahasiswa)
{% endhighlight %}

Ok ya gimana gampang khan? jadi kesimpulanya dengan Hibernate framework ini kita bisa mudah membuat table tanpa perlu hafal dengan SQL dari setiap Database. Mungkin sekian dulu apa yang bisa saya sharing tentang Membuat entity dengan Annotation. See you next post!.
