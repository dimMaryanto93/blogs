---
layout: post
title: "Pengenalan Hibernate Framework"
date: 2016-09-11T12:20:27+07:00
author: Dimas Maryanto
comments: yes
page_category: hibernate
language: java
gist:
repository:
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
image_path: /images/2016-09/hibernate-intro/
---

Halo kali ini saya mau menbahas salah satu framework yang sifatnya ORM (Object Relational Mapping) yaitu Hibernate Framework.

<!--more-->

Jaman dulu sebelum ada konsep JPA (Java Persistance API) atau murni kita menggunakan JDBC semuanya kita harus atur mulai dari Open Connection ke database, Data Definision Language, Data Manipulation Language dll. klo digambarin alurnya seperti beriku:

1. Membuat DDL statement untuk membuat database, table.
2. Membuat Konfigurasi Koneksi untuk Java dapat berkomunikasi ke database. biasanya dengan menggunakan configrasi `DataSource` atau `Connection`
3. Membuat perintah query dalam Java yang dikirim ke database menggunakan `PrepareStatement` dan `Statement`.
4. Menjalankan query atau mengirim ke database dengan menggunakan `executeUpdate()` atau `executeQuery()`.
5. Jika menampilkan data ke database menggunakan `ResultSet`
6. Menutup koneksi

Jadi jaman sekarang kita tidak perlu dipusingkan lagi dengan menggunakan query-query tersebut, meskipun saya background dari Database System Management tapi jujur aja saya juga rada males sih klo berurusan dengan SQL, PL/SQL, dan sejenisnya soalnya sekarang khan Database itu banyak versinya mulai dari Oracle, MySQL, PostgreSQL, MariaDB dan lain-lain toh juga fungsinnya cuman mempermudah proses penyimpanan, update, hapus dan pencarian data.

Nah jadi klo menggunakan Hibernate kita cukup membuat konfigurasinya kemudian tanpa menggunakan query (DDL maupun DML) udah bisa digunakan. adapun berikut alur lebih jelasnya:

1. Membuat konfigurasi `SessionFactory`
2. Membuat `POJO` (Plain Old Java Object) atau katalainnya `JavaBeans`
3. Kita bisa memanggil fungsi-fungsi yang disedian oleh hibernate contohnya `save(obj)`, `update(obj)`,  `get(obj)` dan `delete(obj)`.

Selain itu juga, framework hibernate ini bisa menggenarate table dalam database secara otomatis sesuia dengan Model yang kita buat di Java Source Code yang di tandai dengan `@Entity` atau membuat mapping dengan XML. jadi kesimpulannya kita tidak perlu lagi membuat Table dengan perintah SQL.

karena Hibernate ini support dengan banyak database, framework hibernate sekarang udah sangat cerdas magsunya bisa membedakan antara database yang menggunakan `AUTO_INCREMENT` atau `SEQUENCE` contohnya klo `SessionFactory` kita menggunakan MySQL maka akan otomatis akan dibuatkan `AUTO_INCREMENT` ketika menggunakan `@GeneratedValue` sedangkan jika `SessionFactory` kita menggunakan Oracle atau PostgreSQL maka secara otomatis juga akan dibuatkan menggunakan `SEQUANCE`

Ok mungkin segini dulu apay yang bisa saya jelaskan tentang Pengenalan Hibernate Framework. See you next post!.
