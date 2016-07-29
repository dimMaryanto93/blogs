---
layout: post
title: "How to install PostgreSQL database on Fedora 24/23 via dnf"
date: 2016-07-29T21:46:00+07:00
author: Dimas Maryanto
comments: yes
os:
- linux
- redhat
language: postgresql
repository:
categories:
- Database
- Postgresql
tags:
- Linux
- Fedora
- Database
- PostgreSQL
- SQL
references:
- https://fedoraproject.org/wiki/PostgreSQL
- http://www.if-not-true-then-false.com/2012/install-postgresql-on-fedora-centos-red-hat-rhel/
---

Halo, hai balik lagi di blog saya. Nah kali ini saya mau menginstall salah satu **Database OpenSource** yang paling populer menurut [webiste db_enginers](http://db-engines.com/en/ranking "dilihat pada tanggal 29 juli 2016") PostgreSQL adalah database top 5 untuk kategori database dan top 4 untuk database relational yang bersanding bersama Oracle, Mysql dan Microsoft SQL Server jadi langsung aja **let's rock!**

<!--more-->

seperti biasa klo berbicara _operation system_ yang berkaitan dengan Linux atau UNIX pasti tidak akan lepas dari yang namanya **command line (terminal)** so buka terminalnya kemudian masukan script berikut:

{% highlight bash %}
$ sudo dnf install postgresql-server postgresql-contrib pgadmin3 -y
{% endhighlight %}

setelah semuanya di install tahap selajutnya adalah melakukan inisialisasi config untuk data. masukan command berikut berikut ini:

{% highlight bash %}
$ sudo postgresql-setup initdb
{% endhighlight %}



![Perintah initdb](/images/2016-07/install-postgresql-f23/postgresql-setup-initdb.png)

jika berhasil maka hasilnya seperti berikut:

![Hasil initdb](/images/2016-07/install-postgresql-f23/postgresql-initdb-post.png)

tetapi jika menemukan error seperti berikut:

![Error initdb](/images/2016-07/install-postgresql-f23/postgresql-initdb-error.png)

solusinya adalah hapus folder ```pgsql/data```

{% highlight bash %}
$ sudo rm -rf /var/lib/pgsql/
{% endhighlight %}

setelah itu lakukan lakukan **initdb lagi**, klo berhasil masuk ke step selanjutnya untuk saat ini berarti anda sudah menginstall Database di System anda, apakah udah selesai? tentu belum, kita harus **setting untuk menjalankan servicenya** tpi ini optional sih apakah mau dijalankan secara otomatis atau dijalankan secara manual oleh kita? klo mau otomatis berikut adalah perintahnya:

{% highlight bash %}
$ systemctl enable postgresql.service
{% endhighlight %}

nah klo outputnya seperti ini maka settingan ini udah bener:

{% highlight bash %}
Created symlink from /etc/systemd/system/multi-user.target.wants/postgresql.service to /usr/lib/systemd/system/postgresql.service.
{% endhighlight %}

nah sekarang kita harus jalankan servicenya untuk melakukan configurasi password untuk user atau schema defaultnya yaitu ```postgres``` dengan menggunakan perintah berikut:

{% highlight bash %}
$ sudo systemctl start postgresql.service
{% endhighlight %}

setelah itu bisa cek statusnya apakah sudah jalan atau failed dengan perintah berikut:

{% highlight bash %}
$ sudo systemctl status postgresql.service
{% endhighlight %}

ini adalah hasilnya:

{% highlight bash %}
postgresql.service - PostgreSQL database server
   Loaded: loaded (/usr/lib/systemd/system/postgresql.service; disabled; vendor preset: disabled)
   Active: active (running) since Mon 2016-04-18 08:16:38 WIB; 7h ago
  Process: 5930 ExecStart=/usr/libexec/postgresql-ctl start -D ${PGDATA} -s -w -t ${PGSTARTTIMEOUT} (code=exited, status=0/SUCCESS)
  Process: 5926 ExecStartPre=/usr/libexec/postgresql-check-db-dir %N (code=exited, status=0/SUCCESS)
 Main PID: 5934 (postgres)
   CGroup: /system.slice/postgresql.service
           ├─5934 /usr/bin/postgres -D /var/lib/pgsql/data
           ├─5935 postgres: logger process   
           ├─5937 postgres: checkpointer process   
           ├─5938 postgres: writer process   
           ├─5939 postgres: wal writer process   
           ├─5940 postgres: autovacuum launcher process   
           └─5941 postgres: stats collector process   

Apr 18 08:16:37 localhost.localdomain systemd[1]: Starting PostgreSQL databas...
Apr 18 08:16:37 localhost.localdomain postgresql-ctl[5930]: LOG:  redirecting...
Apr 18 08:16:37 localhost.localdomain postgresql-ctl[5930]: HINT:  Future log...
Apr 18 08:16:38 localhost.localdomain systemd[1]: Started PostgreSQL database...
Hint: Some lines were ellipsized, use -l to show in full.
{% endhighlight %}

tahap selanjutnya jika servicenya udah jalan seperti output diatas kita harus update configurasi file berikut dengan cara update file ```/var/lib/pgsql/data/pg_hba.conf``` untuk lebih mudah bisa gunakan text editor default fedora yaitu ```gedit```

{% highlight bash %}
$ sudo gedit /var/lib/pgsql/data/pg_hba.conf
{% endhighlight %}

setelah file tersebut terbuka di ```gedit``` maka ubahlah **method** menjadi ```md5``` seperti berikut:

{% highlight ini %}
# TYPE  DATABASE        USER            ADDRESS                 METHOD

# "local" is for Unix domain socket connections only
local   all             all                                     md5
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
# IPv6 local connections:
host    all             all             ::1/128                 ident
{% endhighlight%}

kemudian restart servicenya

{% highlight bash %}
$ sudo systemctl restart postgresql.service
{% endhighlight %}

setelah itu coba login dengan user postgres dan db postgres (masih dalam root):

{% highlight bash %}
psql -h localhost -U postgres postgres
{% endhighlight %}

berikut outputnya:

{% highlight bash %}
Password for user postgres:
psql (9.4.7)
Type "help" for help.

postgres=#
{% endhighlight %}

setelah itu ubah password defaultnya menjadi (bebas terserah anda) klo saya menggunakan ```admin``` menggunakan perintah berikut

{% highlight sql %}
\password
{% endhighlight %}

berikut outpunya:

{% highlight bash %}
postgres=# \password
Enter new password: # admin
Enter it again: # admin
{% endhighlight %}

kemudian exit dari terminal dan buka lagi terminalnya setelah itu coba login sebagai postgres.

berikut hasilnya:

![Login as user normal](/images/2016-07/install-postgresql-f23/login-as-postgres.png)

penjelasanya:

* ```-h``` adalah hostname / ip address
* ```-U``` adalah username kemudian yang diikuti dengan nama databasenya, jadi klo kita perhatikan params diatas ada 2 postgres jadi maksudnya adalah **postgres yang pertama nama user / role** dan **postgres yang kedua adalah nama database**.
* ```-W``` digunakan untuk memastikan bahwa user tersebut memiliki password tetapi jika tidak memiliki password bisa menggukan ```-w```

jika masih kurang jelas berikut adalah versi videonya:

{% youtube "https://www.youtube.com/watch?v=IQ3WeCPo0B4" %}

ok mungkin cukup sekian dulu tentang bagaimana cara install postgresql, see you next time!.
