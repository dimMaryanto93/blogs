---
layout: post
title: "Pengetahuan basic tentang Annotation di Hibernate"
date: 2016-09-11T22:22:45+07:00
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

Halo kembali lagi di blog, [sebelumnya]({% post_url 2016-09-11-membuat-entity %}) kita telah membuat entity dengan menggunakan Annotation. Sekarang saya mau membahas tentang aturan-aturan dasar menggunakan hibernate dengan Annotation.

<!--more-->

Adapun aturan dasar yang harus teman-teman ketahui adalah:

## `@Entity`

`@Entity` mendakan bahwa Java Class tersebut akan dibuatkan menjadi sebuah table. contohnya seperti berikut:

{% highlight java %}
@Entity
public class Kelas{
  @Id @GeneratedValue
  private Long id;
}
{% endhighlight %}

Maka hibernate akan menggenerate sebuah table baru dengan nama `Kelas` yang memiliki kolom `id` dengan tipe data `bigint` yang memiliki constraint `primary key`. selain itu juga Setiap JavaBeans yang memiliki annotation `@Entity` harus memiliki `@Id` atau primary key.

{% highlight java %}
@Entity
public class Mahasiswa{
  @Id
  private String id;
}
{% endhighlight %}

## `@Table`

`@Table(name = "nama_table")` hanya bisa digunakan untuk annotation `@Entity` tidak bisa digunakan untuk `@Embedded` atau sejenisnya karena `@Table` ini mendakan bahwa hanya yang akan digenerate menjadi table saja yang akan diubah. contohnya:

{% highlight java %}
// secara default hibernate akan me-mapping
// bahwa kelas `Mahasiswa` akan diubah nama
// tablenya di database menjadi `m_mahasiswa`
@Entity
@Table(name="m_mahasiswa")
public class Mahasiswa{
  @Id
  private String nim;
}
{% endhighlight %}

Untuk penamaan table atau kolom disarankan hurus kecil jika ada atau mengandung unsur lebih dari 2 kalimat maka pisahkan dengan `_` (underscore) tetapi di koding di Javanya tetap menggunakan **Camel Case** contohnya seperti berikut:

{% highlight java %}
@Entity
// nama table dalam database akan diubah menjadi master_mahasiswa
@Table(name="master_mahasiswa")
public class Mahasiswa{
  @Id
  private String nim;
  // kolom dalam table master_mahasiswa akan diubah menjadi nama_mahasiswa
  @Column(name = "nama_mahasiswa")
  private String namaMahasiswa;
}
{% endhighlight %}


### `@Column`

`@Column` hanya digunakan untuk merubah tipe data, constraint, dan length jika tidak menggunakan maka kolom tersebut akan di generate dengan ketentuan maksimal dari setiap tipe data contohnya seperti berikut:

{% highlight java %}
// maka akan dibuat `nama character varying(255)` jika di PostgreSQL
private String nama;
{% endhighlight %}

Adapun atribute pada annotation `@Column` sebagai berikut:

1. `name` adalah untuk mengubah nama column di dalam tabel.
2. `nullable` adalah pengaturan boleh bernilai null atau tidak, hanya bersifat `true` atau `false`.
3. `unique` adalah peraturan boleh ada yang sama atau tidak dalam satu baris dalam table, hanya bernilai `true` atau `false`.
4. `length` adalah peraturan tentang jumlah karakter yang bisa diinputkan. contohnya `8` berarti maksimal 8 karakter.

Ok mungkin sekian dulu apa yang bisa saya sharing tentang pengetahuan dasar berbasis Annotation pada Hibernate framework. See you next post!.
