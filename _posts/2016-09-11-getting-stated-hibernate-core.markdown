---
layout: post
title: "Getting Started with Hibernate Core (JPA)"
date: 2016-09-11T16:41:04+07:00
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
image_path: /images/2016-09/getting-started-hibernate/
---

Halo kembali lagi di blog saya, di [postingan sebelumnya]({% post_url 2016-09-11-hibernate-intro %}) kita udah berkenalan nih dengan Hibernate Framework, jadi sekarang kita akan mulai untuk persiapan-persiapan apa aja yang perlu di setup sebelum memulai koding dengan Hibernate.

<!--more-->

Persiapan yang harus dilakukan diantarnya sebagai berikut:

1. Database, komponen ini paling penting karena Hibernate Framework adalah framework yang sifatnya ORM. Database yang di support oleh Hibernate Framework bisa dilihat [di sini](https://docs.jboss.org/hibernate/orm/3.6/reference/en-US/html/session-configuration.html#configuration-optional-dialects). klo saya Akan menggunakan PostgreSQL sebagai databasenya.
2. Maven, komponen ini sebenarnya optional karena kita membuat project secara manualpun bisa dilakukan tapi karena unsur praktis kita gunakan Apache Maven.
3. Text editor, komponen ini juga optional anda bisa menggunakan Netbeans, Eclipse, InteliJIDEA atau lain-lain. klo saya akan menggunakan Netbeans.

## Membuat Project

Seperti biasa klo membuat project saya selalu menggunakan terminal yaitu perintahnya seperti berikut:

{% highlight bash %}
mvn archetype:generate
  -DartifactId=tutorial.hibernate-core
  -DgroupId=com.hotmail.dimmaryanto.software
  -Dversion=1.0
  -DarchetypeArtifactId=maven-archetype-quickstart
  -DarchetypeCatalog='internal'
{% endhighlight %}

Sebelum masuk ke hibernate, kita setup dulu projectnya supaya enviromentnya sesuai dengan keadaan sekarang contohnya compilernya menjadi JDK 1.8 dengan menambahkan configurasi seperti berikut pada `pom.xml`

{% highlight xml %}
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.5.1</version>
            <configuration>
                <target>1.8</target>
                <source>1.8</source>
            </configuration>
        </plugin>        
    </plugins>
</build>
{% endhighlight %}

## Konfigurasi project Hibernate Core

Setelah kita ubah konfigurasi `maven-compiler-plugin` kita bisa setup supaya support dengan Hibernate dan Database PostgreSQL caranya cukup tambah dependency `org.hibernate-core` dan `org.postgresql` seperti berikut:

{% highlight xml %}
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>5.2.2.Final</version>
</dependency>
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <version>9.4.1209.jre7</version>
</dependency>
{% endhighlight %}

Nah jadi kurang lebih seperti ini library yang dibawa oleh `hibernate-core` dan `postgresql`

![Lib]({{ page.image_path }}hibernate-lib.png)

atau lebih jelasnya seperti berikut:

{% highlight bash %}
[INFO] com.hotmail.dimmaryanto.software:tutorial.hibernate-core:jar:1.0
[INFO] +- junit:junit:jar:4.12:test
[INFO] |  \- org.hamcrest:hamcrest-core:jar:1.3:test
[INFO] +- org.hibernate:hibernate-core:jar:5.2.2.Final:compile
[INFO] |  +- org.jboss.logging:jboss-logging:jar:3.3.0.Final:compile
[INFO] |  +- org.hibernate.javax.persistence:hibernate-jpa-2.1-api:jar:1.0.0.Final:compile
[INFO] |  +- org.javassist:javassist:jar:3.20.0-GA:compile
[INFO] |  +- antlr:antlr:jar:2.7.7:compile
[INFO] |  +- org.apache.geronimo.specs:geronimo-jta_1.1_spec:jar:1.1.1:compile
[INFO] |  +- org.jboss:jandex:jar:2.0.0.Final:compile
[INFO] |  +- com.fasterxml:classmate:jar:1.3.0:compile
[INFO] |  +- dom4j:dom4j:jar:1.6.1:compile
[INFO] |  +- org.hibernate.common:hibernate-commons-annotations:jar:5.0.1.Final:compile
[INFO] |  \- javax.enterprise:cdi-api:jar:1.1:compile
[INFO] |     +- javax.el:el-api:jar:2.2:compile
[INFO] |     +- org.jboss.spec.javax.interceptor:jboss-interceptors-api_1.1_spec:jar:1.0.0.Beta1:compile
[INFO] |     +- javax.annotation:jsr250-api:jar:1.0:compile
[INFO] |     \- javax.inject:javax.inject:jar:1:compile
[INFO] \- org.postgresql:postgresql:jar:9.4.1209.jre7:compile
{% endhighlight %}

## Setup Database

Nah sayangnya Hibernate ini tidak memiliki fitur untuk membuat Database, jadi hanya bisa menggenerate table, column dan object lagi seperti `constraint`, `auto_increment`, dan `sequance`. Ingat Database sama Table itu 2 hal yang berbeda ya!! kadang ada yang bilang Database sama Tabel itu sama dan terkandang juga Excel termasuk database padahal khan bukan ya.

Jadi kita buat dulu database dengan nama `tutorial_hibernate` seperti berikut:

{% highlight postgresql-console %}
# login as postgres
psql -h localhost -U postgres

# create user tutorial_hibernate
create user tutorial_hibernate with superuser login password 'admin';

# membuat database tutorial_hibernate dengan ownernya tutorial_hibernate
create database tutorial_hibernate with owner tutorial_hibernate
{% endhighlight %}

## Setup `hibernate.cfg.xml`

Meng-konfigurasi hibernate sebenarnya ada 2 cara yaitu dengan Java Konfigurasi dan juga XML. nah kali ini saya mau menggunakan konfigurasi XML karena pada kenyataannya konfigurasi XML itu mudah untuk di baca tetapi jujur saja saya sih lebih prepare ke Java Konfigurasi karena sekarang XML udah mulai ditinggalkan orang-orang. tapi gak apa-apa, khan namanya belajar kita harus mulai dari yang paling mudah dulu. untuk membuatnya kita bisa menggunakan Netbeans yaitu seperti berikut step by stepnya:

Klik kanan di project -> **New File** -> cari atau filter hibernate.cfg seperti berikut:

![hibernate.cfg]({{ page.image_path }}hibernate-cfg-1.png)

Pilih **Hibernate Configuration Wizard** lalu klik **Next**

![hibernate.cfg]({{ page.image_path }}hibernate-cfg-2.png)

Biarkan semuanya **default** langsung klik **Next**

![hibernate.cfg]({{ page.image_path }}hibernate-cfg-3.png)

Pada **Database Connection** kita pilih **New Connection Database** lalu akan muncul form seperti di atas

![hibernate.cfg]({{ page.image_path }}hibernate-cfg-4.png)

kemudian pilih **PostgreSQL** kemudian klik **Next**

![hibernate.cfg]({{ page.image_path }}hibernate-cfg-5.png)

Lalu customize connectionnya seperti yang telah kita buat sebelumnya yaitu

* Database: `tutorial_hibernate`
* User: `tutorial_hibernate`
* Password: `admin`

selain hal tersebut biarkan default, kemudian kita bisa Test Connection, jika sukses maka akan tampil seperti form diatas terdapat notif `Connection Successed` selanjutnya klik **Next**

![hibernate.cfg]({{ page.image_path }}hibernate-cfg-6.png)

Setelah itu pilih schema **Public** kemudian klik **Next** lagi

![hibernate.cfg]({{ page.image_path }}hibernate-cfg-7.png)

Kemudian pada **input connection name** boleh diganti supaya tidak terlalu panjang menjadi seperti diatas. setelah itu klik **Next**

![hibernate.cfg]({{ page.image_path }}hibernate-cfg-8.png)

dan yang terakhir klik **Finish** maka konfigurasinya akan menggenerate seperti berikut:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE hibernate-configuration PUBLIC "-//Hibernate/Hibernate Configuration DTD 3.0//EN" "http://hibernate.sourceforge.net/hibernate-configuration-3.0.dtd">
<hibernate-configuration>
    <session-factory>
        <property name="hibernate.dialect">org.hibernate.dialect.PostgreSQLDialect</property>
        <property name="hibernate.connection.driver_class">org.postgresql.Driver</property>
        <property name="hibernate.connection.url">jdbc:postgresql://localhost:5432/tutorial_hibernate</property>
        <property name="hibernate.connection.username">tutorial_hibernate</property>
        <property name="hibernate.connection.password">admin</property>
    </session-factory>
</hibernate-configuration>
{% endhighlight %}

kemudian pastikan `pom.xml` harus sama seperti berikut klo ada dependency yang source `unknown` dihapus aja karena tadi kita nambahinnya dari Netbeans bukan dari Maven repository.

{% gist page.gist "pom.xml" %}

## Membuat `SessionFactory`

SessionFactory ini pada dasarnya sama seperti objek `Connection` atau `DataSource`, jadi untuk mengeceknya kita harus membuatnya dulu. SessionFactory ini mengambil property settingnya yang ada pada file `hibernate.cfg.xml` jadi alurnya kita harus load file `hibernate.cfg.xml` tersebut dengan perintah seperti berikut, buat kelas baru dengan nama `KonfigurasiHibernate` pada package `com.hotmail.dimmaryanto.software.konfigurasi` seperti berikut:

{% gist page.gist "HibernateKonfigurasi.java" %}

Untuk menjalankanya kita gunakan kelas `App` dalam package `com.hotmail.dimmaryanto.software` seperti berikut:

{% highlight java %}
package com.hotmail.dimmaryanto.software;

import com.hotmail.dimmaryanto.software.konfigurasi.HibernateKonfiguras;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

public class App {

    public static void main(String[] args) {

        SessionFactory sessionFactory = HibernateKonfiguras.getSessionFactory();
        // membuka koneksi
        Session session = sessionFactory.openSession();
        session.beginTransaction();

        // lakukan transaksi CRUD

        // menutup koneksi
        session.close();
        sessionFactory.close();
    }
}
{% endhighlight %}

Jika di run file, maka outputnya seperti berikut:

{% highlight bash %}
Building Tutorial Hibernate Core 1.0
------------------------------------------------------------------------

--- exec-maven-plugin:1.2.1:exec (default-cli) @ tutorial.hibernate-core ---
Sep 11, 2016 4:37:12 PM org.hibernate.Version logVersion
INFO: HHH000412: Hibernate Core {5.2.2.Final}
Sep 11, 2016 4:37:12 PM org.hibernate.cfg.Environment <clinit>
INFO: HHH000206: hibernate.properties not found
Sep 11, 2016 4:37:12 PM org.hibernate.cfg.Environment buildBytecodeProvider
INFO: HHH000021: Bytecode provider name : javassist
Sep 11, 2016 4:37:12 PM org.hibernate.boot.jaxb.internal.stax.LocalXmlResourceResolver resolveEntity
WARN: HHH90000012: Recognized obsolete hibernate namespace http://hibernate.sourceforge.net/hibernate-configuration. Use namespace http://www.hibernate.org/dtd/hibernate-configuration instead.  Support for obsolete DTD/XSD namespaces may be removed at any time.
Sep 11, 2016 4:37:13 PM org.hibernate.annotations.common.reflection.java.JavaReflectionManager <clinit>
INFO: HCANN000001: Hibernate Commons Annotations {5.0.1.Final}
Sep 11, 2016 4:37:13 PM org.hibernate.engine.jdbc.connections.internal.DriverManagerConnectionProviderImpl configure
WARN: HHH10001002: Using Hibernate built-in connection pool (not for production use!)
Sep 11, 2016 4:37:13 PM org.hibernate.engine.jdbc.connections.internal.DriverManagerConnectionProviderImpl buildCreator
INFO: HHH10001005: using driver [org.postgresql.Driver] at URL [jdbc:postgresql://localhost:5432/tutorial_hibernate]
Sep 11, 2016 4:37:13 PM org.hibernate.engine.jdbc.connections.internal.DriverManagerConnectionProviderImpl buildCreator
INFO: HHH10001001: Connection properties: {user=tutorial_hibernate, password=****}
Sep 11, 2016 4:37:13 PM org.hibernate.engine.jdbc.connections.internal.DriverManagerConnectionProviderImpl buildCreator
INFO: HHH10001003: Autocommit mode: false
Sep 11, 2016 4:37:13 PM org.hibernate.engine.jdbc.connections.internal.PooledConnections <init>
INFO: HHH000115: Hibernate connection pool size: 20 (min=1)
Sep 11, 2016 4:37:13 PM org.hibernate.dialect.Dialect <init>
INFO: HHH000400: Using dialect: org.hibernate.dialect.PostgreSQLDialect
Sep 11, 2016 4:37:14 PM org.hibernate.engine.jdbc.env.internal.LobCreatorBuilderImpl useContextualLobCreation
INFO: HHH000424: Disabling contextual LOB creation as createClob() method threw error : java.lang.reflect.InvocationTargetException
Sep 11, 2016 4:37:14 PM org.hibernate.type.BasicTypeRegistry register
INFO: HHH000270: Type registration [java.util.UUID] overrides previous : org.hibernate.type.UUIDBinaryType@c03cf28
Sep 11, 2016 4:37:14 PM org.hibernate.engine.jdbc.connections.internal.DriverManagerConnectionProviderImpl stop
INFO: HHH10001008: Cleaning up connection pool [jdbc:postgresql://localhost:5432/tutorial_hibernate]
------------------------------------------------------------------------
BUILD SUCCESS
{% endhighlight %}

Berarti konfigurasi hibernatenya udah benar. Ok mungkin sekian dulu tentang getting started hibernate core. See you next post!.
