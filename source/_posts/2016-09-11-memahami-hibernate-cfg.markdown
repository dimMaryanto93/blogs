---
layout: post
title: "Memehami file konfigurasi hibernate (hibernate.cfg.xml)"
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

Halo kali ini saya mau membahas atau review apa yang telah kita buat di [postingan sebelumnya]({% post_url 2016-09-11-getting-stated-hibernate-core %}) yaitu membuat konfigurasi `hibernate.cfg.xml`.

<!--more-->

Ok langsung aja buka lagi file `hibernate.cfg.xml` nya, kalo kita lihat seperti berikut:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE hibernate-configuration PUBLIC "-//Hibernate/Hibernate Configuration DTD 3.0//EN" "http://hibernate.sourceforge.net/hibernate-configuration-3.0.dtd">
<hibernate-configuration>
    <session-factory>
        <!-- hibernate dialect  -->
        <property name="hibernate.dialect">org.hibernate.dialect.PostgreSQLDialect</property>

        <!-- hibernate connection -->
        <property name="hibernate.connection.driver_class">org.postgresql.Driver</property>
        <property name="hibernate.connection.url">jdbc:postgresql://localhost:5432/tutorial_hibernate</property>
        <property name="hibernate.connection.username">tutorial_hibernate</property>
        <property name="hibernate.connection.password">admin</property>
    </session-factory>
</hibernate-configuration>
{% endhighlight %}

Nah jadi konfigurasi yang wajib ada yaitu ada 2 hal yaitu

1. `hibernate.dialect`
2. `hibernate.connection.*`

## `hibernate.dialect`

Karena hibernate memiliki support database yang lumanyan banyak, maka kita harus tentukan `dialect` atau analogikanya seperti ini contohnya setiap negara punya bahasa masing masing di ibaratkan dengan DBMS seperti indonesia berhasasa indonesia sedangkan jepang berbahasa jepang tatapi bahasa internasinal tetap bahasa inggris. konsep tersebut juga serupa dengan hibernate ibaratnya bahasa internasinal. jadi apapun databasenya **Hibernate harus menentukan targetnya akan di proses ke database apa** atau bisa dikatakan Translator. itulah fungsi dari `hibernate.dialect`

beberapa `hibernate.dialect` yang paling sering digunakan atau berdasarkan database yang popular

| Database Name   | hibernate.dialect |
| :-------------  | :------------- |
| Oracle |  	org.hibernate.dialect.OracleDialect |
| MySQL | org.hibernate.dialect.MySQLDialect |
| SQL Server | org.hibernate.dialect.SQLServerDialect |
| PostgreSQL | org.hibernate.dialect.PostgreSQLDialect |
| HSQL | org.hibernate.dialect.HSQLDialect |
| DB2 | org.hibernate.dialect.DB2Dialect |

## `hibernate.connection.*`

Untuk `hibernate.connection` ini pada dasarnya sama dengan membuat koneksi biasa yaitu dengan JDBC. jadi saya tidak akan membahasnya lagi. klo gak ngerti bisa lihat [postingan berikut]({% post_url 2016-07-31-jdbc %})

## `hibernate.show_sql`

Property ini belum kita tambahkan tadi di file `hibernate.cfg.xml`, fungsinya untuk menampilkan SQL ketika hibernate malakukan pengiriman Data Definition Language (`CREATE`, 'ALTER', dan 'DROP'), Data Manipulation Language (`INSERT`, 'UPDATE', dan `DELETE`) serta perintah Querty ('SELECT').

berikut perintahnya:

{% highlight xml %}
<property name="hibernate.show_sql">true</property>
{% endhighlight %}

`hibernate.show_sql` hanya bernilai
1. `true` (untuk menampilkan SQL statement)
2. `false` (untuk mengembungikan SQL statement)

## `hibernate.hbm2ddl.auto`

Property ini digunakan untuk meng-generate table yang dibuat berdasarkan JavaBeans atau POJO yang menggunakan mapping hibernate (hbm.xml) atau annotation (`@Entity`).

Berikut perintahnya:

{% highlight xml %}
<property name="hibernate.hbm2ddl.auto">create</property>
{% endhighlight %}

`hibernate.hbm2ddl.auto` ini pada dasarnya terdapat 4 yaitu:

1. `create`, ketika `SessionFactory` dipanggil maka dia akan `create table` tetapi setelah `SessionFactory` berakhir atau di `close` datanya akan dihapus (`delete`).
2. `create-drop`, ketika `SessionFactory` dipanggil maka dia akan `drop table` yang ada setelah itu baru dia `create table`
3. `update`, ketika `SessionFactory` dipanggil pertama kali maka dia akan `create table` tetapi ketika ke dua kalinya sampai seterunya maka jika table dalam databasenya udah ada maka dia `update` atau perintah sqlnya `alter` tetapi jika kalo yang berubah adalah field atau column atau atribute maka dia akan membuat field tersebut `add column` bukan `alter column rename`
4. `validate`, ketika `SessionFactory` dipanggil maka dia **tidak akan melakukan generate** karena fungsinya hanya melakukan check aja. keteka table yang di panggil tidak ada maka terjadi error.

## `hibernate.cfg.xml` updated

Maka konfigurasi `hibernate.cfg.xml` kita sekarang seperti berikut:

{% gist page.gist "hibernate.cfg.xml" %}

Ok mungkin segitu dulu apa yang bisa saya jelaskan tentang memahami `hibernate.cfg.xml`. See you next post!.
