---
layout: post
title: "Implementasi CRUD dengan Hibernate"
date: 2016-09-12T09:34:36+07:00
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

Halo kembali lagi di blog saya, di postingan sebelumnya kita udah mempelajari [membuat entity]({% post_url 2016-09-11-membuat-entity %}) dan [aturan-aturan]({% post_url 2016-09-11-hibernate-basic-annotation %}) yang sebenarnya tidak baku tapi penting untuk diketahui. Sekarang saya akan membuat CRUD dengan menggunakan Hibernate Framework.

<!--more-->

Untuk membuat CRUD di hibernate sebenarnya sangat mudah, karena kita tidak perlu menggunakan query tetapi pemograman SQLnya masih tetap ada tapi nanti kita akan bahas di materi yang namananya Hibernate Query language atau yang lebih dikenal HQL.

## Create atau Insert data

Ok sekarang kita buat kelas dengan nama `AppSimpan` dalam package `com.hotmail.dimmaryanto.software` seperti berikut:

{% gist page.gist "AppSimpan.java" %}

Setelah itu coba di run file, maka outpunya seperti berikut:

{% highlight bash %}
# hibernate logger lain-lain.
Hibernate:
  select nextval ('hibernate_sequence')
Hibernate:
  insert into master_mahasiswa
    (nama_mahasiswa, nim_mahasiswa, tahun_masuk, kode)
  values
    (?, ?, ?, ?)
# hibernate logger lain-lain.
{% endhighlight %}

Untuk mengecek datanya bener telah diinput, coba `select * from master_mahasiswa` seperti berikut:

{% highlight postgresql %}
# login ke database
psql -h localhost -U tutorial_hibernate

# Query
select * from master_mahasiswa

# outputnya seperti berikut
tutorial_hibernate=# select * from master_mahasiswa;
 kode | nama_mahasiswa | nim_mahasiswa | tahun_masuk
------+----------------+---------------+-------------
    2 | Dimas Maryanto | 10511148      |        2011
(1 row)

tutorial_hibernate=#
{% endhighlight %}

### Penjelasan `AppSimpan`

Nah jadi penjelasannya dari koding yang kita tulis tadi yaitu sebagai berikut:

* `beginTransaction()`

{% highlight java %}
Session session = sessionFactory.openSession();
session.beginTransaction();
{% endhighlight %}

Jadi object `Session` ini satu level dengan `PreparedStatement` atau `Statement` jadi di fungsinya melakukan transaction seperti save, update, delete, findById, rollback, commit dan lain-lain. Perintah `session.beginTransaction()` ini supaya transaction yang ada sebelumnya dihapus.

* Membuat object Mahasiswa.

{% highlight java %}
Mahasiswa mhs = new Mahasiswa();
  mhs.setNama("Dimas Maryanto");
  mhs.setNim("10511148");
  mhs.setThnMasuk(2011);
{% endhighlight %}

Pada dasarnya sama dengan mengisi value biasa, tapi disini kita tidak lagi menginputkan secara manual `kode` pada atribut mahasiswa karena dia primary key yang memiliki annotation `@GeneratedValue` secara default dia akan diisi secara otomatis oleh hibernate.

* Transaction

{% highlight java %}
session.save(mhs);
session.getTransaction().commit();
{% endhighlight %}

Perintah `session.save(mhs);` digunakan untuk melakukan insert data mahasiswa ke database sedangkan untuk perintah `session.getTransaction().commit()` digunakan untuk melakukan penyimpanan secara permanen ke database.

* Clossing Connection.

{% highlight java %}
session.close();
sessionFactory.close();
{% endhighlight %}

Seperti biasa setelah kita melakukan transaksi kita tutup sessionnya supaya tidak menambah beban CPU pada database karena Session yang digunakan terlalu banyak ketika terjadi pemanggilan kembali objek `sessionFactory`.

## Cari berdasarkan Kode

Ok sebelum update data kita harus buat dulu fungsi cari data berdasarkan kode, jadi buat kelas baru dengan nama `AppGetKode` dalam package `com.hotmail.dimmaryanto.software` seperti berikut:

{% gist page.gist "AppGetKode.java" %}

Setelah itu coba di run file, maka outputnya seperti berikut:

{% highlight bash %}
# hibernate logger lain-lain
Hibernate:
select
  mahasiswa0_.kode as kode1_0_0_,
  mahasiswa0_.nama_mahasiswa as nama_mah2_0_0_,
  mahasiswa0_.nim_mahasiswa as nim_maha3_0_0_,
  mahasiswa0_.tahun_masuk as tahun_ma4_0_0_
from master_mahasiswa mahasiswa0_
where mahasiswa0_.kode=?

# output dari System.out.println();
Mahasiswa dengan kode 2 adalah 10511148, Dimas Maryant
{% endhighlight %}

### Penjelasan `AppGetKode`

Koding berikut

{% highlight java %}
Mahasiswa mhs = session.get(Mahasiswa.class, 2L);
{% endhighlight %}

Pada method `get(arg1, arg2);`

* arg1 adalah Mapping kelas artinya kita mau query ke kelas mana contohnya `Mahasiswa.class` berarti klo di perintah sqlnya kita mau cari `select * from Mahasiwa where kode ?`
* arg2 adalah primary key, atau kode. magsud dari nilai `2L` adalah khan di kelas `Mahasiswa` ada primary keynya bernilai `java.lang.Long` jadi nilai tersebut adalah conversi dari Integer ke Long.

Nah mungkin dari kalian ada yang bertanya? mana method `session.getTransaction().commit();` ingat perintah `commit` ini berlaku jika hanya terjadi perubahan pada database, karena query kita hanya bersifat read-only jadi gak perlu pake method tersebut.

## Update data

Ok klo update kurang lebih alurnya adalah kita cari dulu data mahasiswanya setelah itu kita set nilainya lalu di update kemudian dicommit transaction. Buat kelas baru dengan nama `AppUpdate` dalam package `com.hotmail.dimmaryanto.software` yaitu seperti berikut:

{% gist page.gist "AppUpdate.java" %}

Klo anda run file, berikut outputnya:

{% highlight bash %}
# hibernate logger lain-lain.
Hibernate:
select
  mahasiswa0_.kode as kode1_0_0_,
  mahasiswa0_.nama_mahasiswa as nama_mah2_0_0_,
  mahasiswa0_.nim_mahasiswa as nim_maha3_0_0_,
  mahasiswa0_.tahun_masuk as tahun_ma4_0_0_
from
  master_mahasiswa mahasiswa0_
where
  mahasiswa0_.kode=?

# perintah dari System.out.println() sebelum melakukan update()
Mahasiswa dengan kode 2 adalah sebelum update - 10511148, Dimas Maryanto, 2011

Hibernate:
update master_mahasiswa
  set nama_mahasiswa=?, nim_mahasiswa=?, tahun_masuk=?
where kode=?

# perintah dari System.out.println() setelah update()
Mahasiswa dengan kode 2 adalah setelah update - 10511148, Dimas, 2012
{% endhighlight %}

Ok kali saya tidak akan menjelaskan terlalu dalam karena basicnya sebenarnya sama dengan Cari dan Simpan data.

## Hapus Data

Untuk hapus data mahasiswa kurang lebih sama dengan Update yaitu caranya kita cari dulu datanya ke database setelah datanya ketemu baru dihapus kemudian di commit transaction. Ok buat kelas baru dengan nama `AppDelete` dalam package `com.hotmail.dimmaryanto.software` seperti berikut:

{% gist page.gist "AppDelete.java" %}

Sekarang coba di run file, maka outpunya seperti berikut:

{% highlight bash %}
# hibernate logger lain-lain.
Hibernate:
select
  mahasiswa0_.kode as kode1_0_0_,
  mahasiswa0_.nama_mahasiswa as nama_mah2_0_0_,
  mahasiswa0_.nim_mahasiswa as nim_maha3_0_0_,
  mahasiswa0_.tahun_masuk as tahun_ma4_0_0_
from
  master_mahasiswa mahasiswa0_
where
  mahasiswa0_.kode=?

Hibernate:
  delete from master_mahasiswa where kode=?
{% endhighlight %}

Ok mungkin sekian dulu pembahasan tentang CRUD di Hibernate. See you next post!.
