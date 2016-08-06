---
layout: post
title: "JDBC - Modularisasi untuk JDBC"
author: Dimas Maryanto
comments: yes
page_category: jdbc
language: java
gist: dimMaryanto93/9670215f595e5415326e78df2d22977a
repository: https://github.com/dimMaryanto93/belajar-java-jdbc.git
categories:
- Java
- JDBC
- MariaDB
tags:
- Java
- JDBC
- MariaDB
- Netbeans
references:
---

Halo kembali lagi di blog saya, jadi kali ini saya akan membahas tentang kelanjutan dari [Optimalisasi JDBC dengan JavaBeans]({% post_url 2016-08-02-javabeans-jdbc %}) yaitu tadinya kita memisahkan antara yang sifatnya value dengan sturuktur JDBCnya. Sekarang kita akan memecah kembali karena khan pada dasarnya klo kita ngoding untuk bikin apalikasi tidak hanya untuk 1 tabel tapi bisa menjadi ratusan tabel bahkan ribuan table dalam 1 database, jadi disini kita bakalan membahas tentang modularisasi dengan konsep Repository.

<!--more-->

Nah sebelum kita melanjutkan ke topik utama sebelumnya sama mau menambahkan dulu tabel untuk database yang kemarin yaitu ```jdbc_mysql``` yang berelasi ke table ```mahasiswa``` yaitu ```jurusan```. berikut adalah perintah sqlnya:

{% gist page.gist jdbc-mysql-v.1.sql %}

silahkan eksekusi kemudian check hasilnya maka akan menampilkan output seperti berikut:

{% highlight bash %}
MariaDB [jdbc_mysql]> drop database if exists jdbc_mysql;
Query OK, 0 rows affected (0.00 sec)

MariaDB [(none)]> create database if not exists jdbc_mysql;
Query OK, 1 row affected (0.00 sec)

MariaDB [(none)]> use jdbc_mysql;
Database changed
MariaDB [jdbc_mysql]> CREATE TABLE IF NOT EXISTS mahasiswa(
    ->     nim varchar(8) primary key,
    ->     nama varchar(25) not null,
    ->     id_jurusan varchar(2) not null
    -> );
Query OK, 0 rows affected (0.26 sec)

MariaDB [jdbc_mysql]>
MariaDB [jdbc_mysql]> CREATE TABLE IF NOT EXISTS JURUSAN(
    ->     id varchar(2) primary key,
    ->     nama varchar(25) not null
    -> );
Query OK, 0 rows affected (0.19 sec)

MariaDB [jdbc_mysql]>
{% endhighlight %}

kemudian setelah itu kita buat kelas baru dengan nama ```Jurusan.java``` seperti berikut:

{% gist page.gist Jurusan.java %}

Kemudian setelah itu kita update kelas ```Mahasiswa.java``` atau supaya tidak menggangu kelas yang sebelumnya kita buat ja kelas baru misalnya ```MahasiswaUpdated.java``` seperti berikut:

{% gist page.gist MahasiswaUpdated.java %}

Jadi kita hanya mengganti tipe data yang tadinya

{% highlight java %}
private String jurusan;

public void setJurusan(String jurusan){
  this.jurusan = jurusan;
}

public String getJurusan(){
  return this.jurusan;
}
{% endhighlight %}

Menjadi seperti berikut:

{% highlight java %}
private Jurusan jurusan;

public void setJurusan(Jurusan jurusan){
  this.jurusan = jurusan;
}

public Jurusan getJurusan(){
  return this.jurusan;
}
{% endhighlight %}
