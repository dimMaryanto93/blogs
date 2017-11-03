---
layout: post
title: "Menggunakan Embedded di Hibernate bagian 2"
date: 2016-09-20T08:19:58+07:00
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

Halo kembali lagi di blog saya, di [postingan sebelumnya]({% post_url 2016-09-19-hibernate-core-embedded %}) kita udah menggunakan component hibernate Embedded dengan mengimplementasikan alamat sebagai trasitive value, nah sekarang saya mau lanjutkan lagi nih tentang Embedded tapi studikasus kali ini memiliki 2 atau lebih alamat dalam 1 mahasiswa seperti 1 alamat untuk mahasiswa tersebut tinggal dan 1 lagi untuk alamat orang tua dari mahasiswa tersebut.

<!--more-->

Seperti yang saya jelaskan diatas jadi klo di postingan sebelumnya kita punya table di database seperti berikut:

{% highlight postgresql-console %}
psql (9.5.4)
SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
Type "help" for help.

tutorial_hibernate=# \d m_mahasiswa;
                Table "public.m_mahasiswa"
       Column        |          Type          | Modifiers
---------------------+------------------------+-----------
 kode                | bigint                 | not null
 kecamatan           | character varying(255) |
 kelurahan           | character varying(255) |
 kode_pos            | integer                |
 kota                | character varying(255) |
 provinsi            | character varying(255) |
 rt                  | integer                |
 rw                  | integer                |
 nama_mahasiswa      | character varying(25)  | not null
 nim_mahasiswa       | character varying(8)   | not null
 tahun_masuk         | integer                |
Indexes:
    "m_mahasiswa_pkey" PRIMARY KEY, btree (kode)
    "uk_goryisfm0cedkbal2gs9diltt" UNIQUE CONSTRAINT, btree (nim_mahasiswa)
{% endhighlight %}

Nah jadi saya mau punya 2 alamat yaitu alamat untuk mahasiswa dan orang tua mahahasiswa tersebut, jadi kurang lebih seperti ini nantinya di table mahasiswanya:

{% highlight postgresql-console %}
                Table "public.m_mahasiswa"
       Column         |          Type          | Modifiers
--------------------- +------------------------+-----------
# attribut untuk mahasiswa
kode                  | bigint                 | not null
nama_mahasiswa        | character varying(25)  | not null
nim_mahasiswa         | character varying(8)   | not null
tahun_masuk           | integer                |

# alamat untuk mahasiswa
kecamatan_mahasiswa   | character varying(255) |
kelurahan_mahasiswa   | character varying(255) | not null
kode_pos_mahasiswa    | integer                |
kota_mahasiswa        | character varying(255) | not null
provinsi_mahasiswa    | character varying(255) | not null
rt_mahasiswa          | integer                | not null
rw_mahasiswa          | integer                | not null

# alamat untuk orang tua mahasiswa
kecamatan_orang_tua   | character varying(255) |
kelurahan_orang_tua   | character varying(255) |
kode_pos_orang_tua    | integer                |
kota_orang_tua        | character varying(255) |
provinsi_orang_tua    | character varying(255) |
rt_orang_tua          | integer                |
rw_orang_tua          | integer                |

Indexes:
    "m_mahasiswa_pkey" PRIMARY KEY, btree (kode)
    "uk_goryisfm0cedkbal2gs9diltt" UNIQUE CONSTRAINT, btree (nim_mahasiswa)
{% endhighlight %}

Ok jadi kita tambah attribute `Alamat alamatOrangTua` di kelas `Mahasiswa` seperti berikut:

{% highlight java %}
@Entity
@Table(name = "m_mahasiswa")
public class Mahasiswa {

  @Id
  @GeneratedValue
  private Long kode;

  @Column(name = "nim_mahasiswa", nullable = false, unique = true, length = 8)
  private String nim;

  @Column(name = "nama_mahasiswa", nullable = false, length = 25)
  private String nama;

  @Column(name = "tahun_masuk", length = 4)
  private Integer thnMasuk;

  @Embedded
  private Alamat alamatMahasiswa;

  @Embedded
  private Alamat alamatOrangTua;
}
{% endhighlight %}

Tapi karena sifatnya `@Embedded` membuat atribute-atributenya menjadi 1 table dengan `@Entity` yang dibawanya **maka ketika di jalankan terjadi error karena nama column udah tersedia** jadi kita harus _override_ nama columnya dengan menggunakan annotation `@AttributeOverride` seperti berikut:

{% gist page.gist "MahasiswaEmbeddedAttributeOverrides.java" %}

Nah sekarang coba drop databasenya dulu dengan sql seperti berikut:

{% highlight postgresql-console %}
drop database tutorial_hibernate;
create database tutorial_hibernate;
{% endhighlight %}

Kemudian jalankan dari kelas `App` maka hasilnya seperti berikut:

{% highlight postgresql-console %}
psql (9.5.4)
SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
Type "help" for help.

tutorial_hibernate=# \d m_mahasiswa;
                Table "public.m_mahasiswa"
       Column        |          Type          | Modifiers
---------------------+------------------------+-----------
 kode                | bigint                 | not null
 kecamatan_mahasiswa | character varying(255) |
 kelurahan_mahasiswa | character varying(255) | not null
 kode_pos_mahasiswa  | integer                |
 kota_mahasiswa      | character varying(255) | not null
 provinsi_mahasiswa  | character varying(255) | not null
 rt_mahasiswa        | integer                | not null
 rw_mahasiswa        | integer                | not null
 kecamatan_orang_tua | character varying(255) |
 kelurahan_orang_tua | character varying(255) |
 kode_pos_orang_tua  | integer                |
 kota_orang_tua      | character varying(255) |
 provinsi_orang_tua  | character varying(255) |
 rt_orang_tua        | integer                |
 rw_orang_tua        | integer                |
 nama_mahasiswa      | character varying(25)  | not null
 nim_mahasiswa       | character varying(8)   | not null
 tahun_masuk         | integer                |
Indexes:
    "m_mahasiswa_pkey" PRIMARY KEY, btree (kode)
    "uk_goryisfm0cedkbal2gs9diltt" UNIQUE CONSTRAINT, btree (nim_mahasiswa)
{% endhighlight %}

Ok jadi dengan menggunakan

{% highlight java %}
@AttributeOverride(
  column = @Column( name="nama_kolom_baru" ), name="nama_kolom_lama"
)
{% endhighlight %}

Ok mungkin sekian dulu apa yang bisa saya share tentang Embedded, mohon maaf jika ada kesalahan. See you next post!.
