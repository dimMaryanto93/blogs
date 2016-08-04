---
layout: post
title: "How to export file .sql used pg_dump and PgAdminIII"
date: 2016-08-05T00:28:13+07:00
author: Dimas Maryanto
comments: yes
page_category: postgresql
language: postgresql
gist:
repository:
categories:
- Database
- PostgreSQL
tags:
- Database
- PostgreSQL
- PgAdmin3
references:
- https://www.postgresql.org/docs/9.5/static/app-pgdump.html
---

Halo kali ini saya mau share bagaimana cara export data dari database ke file ```.sql``` dengan menggunakan PgAdminIII dan perintah ```pg_dump```, Ok langsung aja kita praktek tapi sebelum itu kita harus siapkan dulu database, tabel, dan datanya yaitu sebagai berikut:

<!--more-->

Tahap pertama adalah login dulu sebagai default system atau system adminstratornya di PostgreSQl yaitu ```postgres``` menggunakan perintah seperti berikut:

{% highlight bash %}
psql -h localhost -U postgres
{% endhighlight %}

Kemudian kita diminta masukan password untuk user ```postgres``` setelah itu anda akan lihat output sebagai berikut jika berhasil login:

{% highlight bash %}
C:\Users\softw>psql -h localhost -U postgres
psql (9.5.3)
WARNING: Console code page (850) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.
Type "help" for help.

postgres=#
{% endhighlight %}

Setelah login kita buat database dengan nama ```universitas``` berikut adalah perintahnya:

{% highlight sql %}
CREATE DATABASE universitas WITH OWNER postgres;
{% endhighlight %}

Kemudian jalankan script diatas maka outpunya seperti berikut:

{% highlight bash %}
postgres=# CREATE DATABASE universitas WITH OWNER postgres;
CREATE DATABASE
postgres=#
{% endhighlight %}

Setelah database terbuat kita ubah atau kita koneksikan ke database universitas dengan perintah berikut:

{% highlight sql %}
\c universitas
{% endhighlight %}

Maka outputnya seperti berikut:

{% highlight bash %}
postgres=# \c universitas
WARNING: Console code page (850) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.
You are now connected to database "universitas" as user "postgres".
universitas=#
{% endhighlight %}

Setelah membuat database dan masuk sebagai database universitas kita sekarang akan membuat table dengan perancangan seperti berikut:

| Column          | Type                  | Modifiers     |
| :-------------  | :-------------        | ------------- |
| npm*            | integer               | not null      |
| nama            | character varying(50) | not null      |

Berikut ada perintah sqlnya:

{% highlight sql %}
create table mahasiswa(
  npm int primary key not null,
  nama character varying(50) not null
);
{% endhighlight %}

Setelah itu kita check apakah sesuai dengan perancangan menggunakan perintah seperti berikut:

{% highlight sql %}
\d mahasiswa
{% endhighlight %}

Berikut outputnya:

{% highlight bash %}
universitas=# \d mahasiswa;
          Table "public.mahasiswa"
 Column |         Type          | Modifiers
--------+-----------------------+-----------
 npm    | integer               | not null
 nama   | character varying(50) | not null
Indexes:
    "mahasiswa_pkey" PRIMARY KEY, btree (npm)
{% endhighlight %}

Setelah itu kita tambahkan beberapa data yaitu seperti berikut:

{% highlight sql %}
insert into mahasiswa values
  (148, 'Dimas Maryanto'),
  (173, 'Muhamad Hanif Muhsin'),
  (150, 'Riansyah Permana Putra');
{% endhighlight %}

Setelah itu coba tampilkan dengan perintah seperti berikut:

{% highlight sql %}
SELECT * FROM mahasiswa;
{% endhighlight %}

Berikut adalah outputnya:

{% highlight bash %}
universitas=# select * from mahasiswa;
 npm |          nama
-----+------------------------
 148 | Dimas Maryanto
 173 | Muhamad Hanif Muhsin
 150 | Riansyah Permana Putra
(3 rows)
{% endhighlight %}

Nah tahap persiapannya sudah selesai sekarang kita akan meng-export objek yang ada di database universitas yaitu mahasiswa ke file ```.sql``` berikut adalah caranya:

Anda keluar dulu dari user ```postgres``` atau command prompt yang tadi kita gunakan di close kemudian dibuka kembali setelah itu gunakan perintah berikut untuk meng-export dengan menggunakan ```pg_dump```

{% highlight bash %}
C:\Users\softw>cd Documents

C:\Users\softw\Documents>pg_dump -h localhost -U postgres universitas > export.sql
{% endhighlight %}

Setelah dijalankan kemudian anda cek file nya di ```C:\Users\nama-user\Documents\export.sql``` klo saya ada disini:

{% highlight bash %}
C:\Users\softw\Documents>dir
 Volume in drive C has no label.
 Volume Serial Number is DEE3-0EB1

 Directory of C:\Users\softw\Documents

08/05/2016  12:15 AM    <DIR>          .
08/05/2016  12:15 AM    <DIR>          ..
08/05/2016  12:15 AM             1,608 export.sql
//folder lain-lain

               3 File(s)         29,613 bytes
              12 Dir(s)  862,526,533,632 bytes free

C:\Users\softw\Documents>
{% endhighlight %}

berikut isi dari file ```export.sql```

![Export SQL pg_dump](/images/2016-08/pgdump-export/export-sql.png)

Satu lagi, setelah kita meng-export menggunakan ```pg_dump``` ada alternatif lain yaitu dengan menggunakan software GUI yaitu PgAdminIII berikut caranya:

Login sebagai ```postgres``` kemudian buka koneksi pada database ```universitas``` seperti berikut:

![PgAdminIII](/images/2016-08/pgdump-export/pg_admin-export.png)

Sekarang coba anda perhatikan pada tab **Object browser** setelah itu buka **Database** dengan nama **Universitas** lalu pada scheme **public** terdapat **Tables** buka lalu klik **mahasiswa** setelah itu anda perhatikan pada tab **SQL pane** disitu ada DDL (Data Definition Language). Nah mungkin saya rasa cukup untuk postingan tentang bagaimana cara export dari database ke file ```.sql```, see you next post!.
