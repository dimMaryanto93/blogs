---
layout: post
title: "Solusi transitive dependency di Hibernate menggunakan Embedded"
date: 2016-09-19T18:48:22+07:00
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

Halo kembali lagi di blog saya, di [postingan sebelumnya]({% post_url 2016-09-12-hibernate-crud %}) kita udah membuat CRUD polos, nah jadi kasus kali saya mau membahas tentang value yang bersifat transitive jika klo anda ingat matakuliah Normalisasi ada di 3NF klo lupa silahkan baca lagi tentang perancangan data dengan methode normalisasi.

<!--more-->
Ok langsung aja, jadi misalnya saya punya data di table mahasiswa seperti berikut:

{% highlight java %}
@Id
@GeneratedValue
private Long kode;
@Column(name = "nim_mahasiswa", nullable = false, unique = true, length = 8)
private String nim;
@Column(name = "nama_mahasiswa", nullable = false, length = 25)
private String nama;
@Column(name = "tahun_masuk", length = 4)
private Integer thnMasuk;
@Column(name = "alamat_rumah")
private String alamat;
{% endhighlight %}

Jadi hasil generate hibernatenya kurang lebih seperti berikut:

{% highlight postgresql-console %}
tutorial_hibernate=# select * from m_mahasiswa;
 kode |                               alamat_rumah                                | nama_mahasiswa | nim_mahasiswa | tahun_masuk
------+---------------------------------------------------------------------------+----------------+---------------+-------------
    4 | Jl.Bukit indah no B8 Rt.09 Rw.01 kec.Cilenyi kab.Bandung 40526 Jawa Barat | Dimas Maryanto | 10511148      |        2011
    5 | Jl.Dipatiukur no 111 Rt.10 Rw.2 kota.Bandung Jawa Barat                   | Karina         | 10512111      |        2012
(2 rows)
{% endhighlight %}

Nah sekarang coba anda perhatikan pada kolom `alamat_rumah` disitu nilainya tidak konsiten karena di baris ke 2 tidak memiliki kode pos sedangkan di baris pertama ada. Nah jadi klo misalnya kita extract jadi pada kolom tersebut memiliki nilai `alamat`, `rt`, `rw`, `kota`, `kelurahan`, `provinsi` dan `kodePos`.

Kita bisa pisahkan dengan membuat model baru misalnya namanya `Alamat` dalam package yang saya seperti `Mahasiswa` dengan atribut seperti berikut:

{% highlight java %}
private String kota;
private String kelurahan;
private String kecamatan;
private Integer rt;
private Integer rw;
private Integer kodePos;
private String provinsi;
{% endhighlight %}

Nah tapi yang jadi masalah mapping di Mahasiswanya seperti apa? jawabanya kita bisa menggunakan `@Embedded` jadi nanti si hibernate akan membuat kita relasinya tablenya semua atribute yang ada didalam kelas `Alamat` di masukan ke dalam `Mahasiswa` berikut kodingnya:

{% gist page.gist "AlamatEmbeddable.java" %}

Kemudian buat references di kelas `Mahasiswa` dengan atribute `Alamat` seperti berikut:

{% gist page.gist "MahasiswaEmbedded.java" %}

Sekarang coba drop dulu database kemudian buat lagi berikut perintahnya:

{% highlight sql %}
drop database tutorial_hibernate;
create database tutorial_hibernate;
{% endhighlight %}

Setelah itu coba run file `App` lalu lihat hasilnya di Database postgresql.

{% highlight postgresql-console %}
tutorial_hibernate=# \d m_mahasiswa
             Table "public.m_mahasiswa"
     Column     |          Type          | Modifiers
----------------+------------------------+-----------
 kode           | bigint                 | not null
 kecamatan      | character varying(255) |
 kelurahan      | character varying(255) |
 kodepos        | integer                |
 kota           | character varying(255) |
 provinsi       | character varying(255) |
 rt             | integer                |
 rw             | integer                |
 nama_mahasiswa | character varying(25)  | not null
 nim_mahasiswa  | character varying(8)   | not null
 tahun_masuk    | integer                |
Indexes:
    "m_mahasiswa_pkey" PRIMARY KEY, btree (kode)
    "uk_goryisfm0cedkbal2gs9diltt" UNIQUE CONSTRAINT, btree (nim_mahasiswa)
{% endhighlight %}

Nah jadi ini akan bermanfaat untuk membuat model menjadi lebih sederhana tidak perlu membuat attribute seperti pada table `m_mahasiswa`

{% highlight java %}
private String nim;
// atribute mahasiswa lain

private String provinsi
private String kota;
private String alamat;
private String kecamatan
// dan lain-lain
{% endhighlight %}

tapi kita bisa menggunakan `@Embedded` dan mudah untuk meng-organisasi modelnya, seperti kelas `Alamat` yang menggunakan `@Embeddable` kemudian di kelas `Mahasiswa` membuat atribute `private Kelas kelas` dengan menggunakan `@Embedded`.

Ok mungkin cukup sekian kita dulu apa yang bisa saya share tentang `@Embedded` di Hibernate. See you next post.
