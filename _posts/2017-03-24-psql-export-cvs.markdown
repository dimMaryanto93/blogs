---
layout: post
title: "Export CVS di PostgreSQL dengan psql"
date: 2017-03-24T08:23:06+07:00
author: Dimas Maryanto
comments: yes
page_category: postgresql
language: postgresql
gist: 
repository: 
categories:
- Database
- PostgreSQL
- psql
- cvs
tags:
- Database
- PostgreSQL
- Console
- psql
- cvs
references:
- https://www.postgresql.org/docs/9.2/static/sql-copy.html
---

Halo, kali ini saya membahas tentang cara meng-export data dari sebuah table dari database PostgreSQL menggunakan perintah `COPY`.

<!--more-->

Ok sekarang kita login dulu dengan user postgres dan contohnya saya punya database dengan nama `spring_core`:


{% highlight bash %}
dimmaryanto93@E5-473G:~$ psql -h localhost -U postgres spring_core
psql (9.5.6)
SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
Type "help" for help.

spring_core=# 
{% endhighlight %}

Kemudian saya punya struktur tabel seperti berikut:

{% highlight bash %}
                                  Table "public.security_roles"
  Column   |          Type          |                          Modifiers                          
-----------+------------------------+-------------------------------------------------------------
 id        | integer                | not null default nextval('security_roles_id_seq'::regclass)
 role_id   | character varying(5)   | not null
 role_name | character varying(255) | not null
Indexes:
    "security_roles_pkey" PRIMARY KEY, btree (id)
    "security_roles_role_id_key" UNIQUE CONSTRAINT, btree (role_id)
{% endhighlight %}

Berikut cara meng-export dengan menggunakan terminal, buka new terminal kemudian masukan perintah berikut:

{% highlight bash %}
psql -h localhost -U postgres spring_core -c "COPY (SELECT * FROM security_roles) to STDOUT with CSV HEADER DELIMITER ',';" > filename.cvs
{% endhighlight %}

Berikut hasilnya:

![hasil-export](/images/2017-03/psql-export/psql-export.png)

Dan ini isinya:

![hasil-export-filename](/images/2017-03/psql-export/export-filename.png)

Ok, mungkin sekian dulu klo ada kekurangan mohon maaf.