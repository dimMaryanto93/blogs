---
layout: post
title: "Query dengan HQL (Hibernate Query Language)"
date: 2016-12-02T23:57:19+07:00
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

Halo, kali ini saya mau share tentang Hibernate Query Language atau yang lebih dikenal dengan HQL. yang jadi pertanyaan apa sih HQL? bedakah dengan SQL (Structure Query Language)?.

<!--more-->

Udah gak asing khan dengan yang namanya SQL (Structure Query Language)? seperti perintah select, data manipulation language, transaction control language dan data definition language???? klo belum paham silahkan googling dulu ya...

Seperti yang telah saya katakan di awal, saya mau menjelakan

1. Apa itu HQL atau Hibernate Query Language?
2. Apa perbedaanya dengan perintah SQL?
3. Bagaimana cara menggunakannya?
4. Menampilkan data berupa `java.util.List`?
5. Menampilkan data dengan menggunakan clausa `where` atau memiliki parameters ?
6. Menampilkan data yang unique atau hanya mengembalikan beberapa data saja?

Ok saya jawab satu-per-satu jadi untuk poin pertama, pertanyaannya adalah

## 'Apa itu HQL?'

HQL bahasa yang digunakan untuk mengakses data, contohnya sama seperti SQL tetapi jika di SQL kita mengakses langsung table dan column yang ada di Database sedangkan di HQL kita meng-akses object persist (`@Entity`) yang dimapping oleh hibernate untuk di terjemahkan ke bahasa SQL sesuai dengan tipe databasenya, Jadi gambaran sederhananya seperti berikut:

* SQL --> Database --> Table --> Column
* HQL --> Java --> SQL --> Database --> Table --> Column.

Sekarang saya mau jawab pertanyaan no 3? knapa no 2 mana? coba baca lagi ya... saya rasa juga sudah cukup jelas kok perbedaanya,

## `Bagaimana cara menggunakannya?`

jika contohnya saya di database memiliki strukur data misalnya pada table `m_mahasiswa` seperti berikut:

| Column Name     | Tipe            |
| :-------------  | :-------------  |
| first_name      | Varchar(25)     |
| last_name       | Varchar(50)     |

jadi saya mengakses datanya adalah dengan query SQL seperti berikut:

{% highlight sql %}
select * from m_mahasiswa
{% endhighlight %}

Sekarang kita akan gunakan HQL, karena HQL berurusan dengan Java Class jadi berikut adalah contoh untuk entity classnya `Mahasiswa` seperti berikut:

{% highlight java %}
import javax.persistance.*;

@Entity
@Table(name="m_mahasiswa")
public class Mahasiswa{

  @Id
  private Integer nim;

  @Column(name="first_name")
  private String firstName;

  @Column(name="last_name")
  private String lastName;

  // setter & getter
}
{% endhighlight %}

jadi HQLnya seperti berikut:

{% highlight sql %}
from Mahasiswa
{% endhighlight %}

atau

{% highlight sql %}
select firstName, lastName from Mahasiswa;
{% endhighlight %}

Jadi ingat kita melihatnya di **sisi object si modelnya atau entity bukan dari sisi table dalam database**.

## Mendapatkan data berupa `java.util.List`?

Sebelumnya kita udah membahas tentang dasar HQL yaitu querynya sekarang kita akan berinteraksi langsung dengan object yang sesungguhnya yaitu mendapatkan data yang diperoreh dari query HQL.

{% gist page.gist "HqlSelectAll.java" %}

Jika di running menghasilkan object seperti berikut:

{% highlight bash %}
Hibernate:
    select
        dosen0_.id as id1_0_,
        dosen0_.nama as nama2_0_,
        dosen0_.no_induk_pegawai as no_induk3_0_
    from
        m_dosen dosen0_
data dosen : 1051234
data dosen : 234324234
{% endhighlight %}

## Bagaimana jika hanya 1 object saja?

Untuk menampilkan hanya 1 object saja kita bisa menggunakan fungsi `getUniqueResult()` tetapi anda harus memastikan bahwa datanya yang di hasilkan harus 1 contohnya kita melakukan querynya menggunakan parameter atau menggunakan clausa `where` seperti berikut.

Contohnya saya kali ini saya mau menampilkan dosen yang memiliki nip sama dengan `1051234` seperti berikut:

{% gist page.gist "HqlSelectWhereNip.java" %}

Jika di running menghasilkan seperti berikut:

{% highlight bash %}
Hibernate:
    select
        dosen0_.id as id1_0_,
        dosen0_.nama as nama2_0_,
        dosen0_.no_induk_pegawai as no_induk3_0_
    from
        m_dosen dosen0_
    where
        dosen0_.no_induk_pegawai=?
Dosen dengan nip 1051234 adalah Diana Efendi
{% endhighlight %}

## CRUD dengan HQL

Sebenarnya untuk penggunaan CRUD menggunakan HQL udah sangat jarang digunakan tetapi ada beberapa alasan kita menggunakan HQL seperti kita mau meng-update beberapa field saja tanpa harus mengubah semua object persist, karena biasanya kita udah menggunakan konsep JPA. berikut contohnya saya mau meng-update nama dari nip dosen `1051234` menjadi `Lusi Melian` berikut implementasinya:

{% gist page.gist "HqlUpdateDosen.java" %}

Berikut jika di running menghasilkan seperti berikut:

{% highlight bash %}
Hibernate:
    update
        m_dosen
    set
        nama=?
    where
        no_induk_pegawai=?
Hibernate:
    select
        dosen0_.id as id1_0_,
        dosen0_.nama as nama2_0_,
        dosen0_.no_induk_pegawai as no_induk3_0_
    from
        m_dosen dosen0_
    where
        dosen0_.no_induk_pegawai=?
Dosen dengan nip 1051234 adalah Lusi Melian
{% endhighlight %}

Ok mungkin cukup sekian dulu pembahasan tentang fundamental HQL, mohon maaf jika ada kesalahan atau tidak sesuia dengan kenyataan. see you next post!.
