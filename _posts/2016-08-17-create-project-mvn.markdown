---
layout: post
title: "Memulai membuat project dengan Maven Archetype"
date: 2016-08-17T12:53:46+07:00
author: Dimas Maryanto
comments: yes
page_category: maven
language: java
repository: https://github.com/dimMaryanto93/belajar-apache-maven.git
categories:
- Java
- BuildTool
- Maven
tags:
- Java
- Build Tools
- Apache Maven
- Netbeans
- Eclipse
- IDEA
references:
- https://maven.apache.org/
- http://software.endy.muhardin.com/java/apache-maven/
- http://maven.apache.org/plugins/maven-assembly-plugin/usage.html
---

Maven archetype adalah software yang digunakan untuk meng-generate template project yang disediakan oleh maven repository central (template-template project yang tersedia di repositorynya maven), sekarang kita akan membuat project dengan ```maven-archetype``` dengan perintah terminal atau command prompt seperti berikut:

{% highlight bash %}
mvn archetype:generate
{% endhighlight %}

Atau kita juga bisa membuat project yang tersedia di internal mavennya dengan menggunakan perintah seperti berikut:

{% highlight bash %}
mvn archetype:generate -DarchetypeCatalog='internal'
{% endhighlight %}

Berikut adalah outpunya kita disuruh milih template projectnya:

<!--more-->

{% highlight bash %}
Choose archetype:
1: internal -> org.apache.maven.archetypes:maven-archetype-archetype (An archetype which contains a sample archetype.)
2: internal -> org.apache.maven.archetypes:maven-archetype-j2ee-simple (An archetype which contains a simplifed sample J2EE application.)
3: internal -> org.apache.maven.archetypes:maven-archetype-plugin (An archetype which contains a sample Maven plugin.)
4: internal -> org.apache.maven.archetypes:maven-archetype-plugin-site (An archetype which contains a sample Maven plugin site.
      This archetype can be layered upon an existing Maven plugin project.)
5: internal -> org.apache.maven.archetypes:maven-archetype-portlet (An archetype which contains a sample JSR-268 Portlet)
6: internal -> org.apache.maven.archetypes:maven-archetype-profiles ()
7: internal -> org.apache.maven.archetypes:maven-archetype-quickstart (An archetype which contains a sample Maven project.)
8: internal -> org.apache.maven.archetypes:maven-archetype-site (An archetype which contains a sample Maven site which demonstrates
      some of the supported document types like APT, XDoc, and FML and demonstrates how
      to i18n your site. This archetype can be layered upon an existing Maven project.)
9: internal -> org.apache.maven.archetypes:maven-archetype-site-simple (An archetype which contains a sample Maven site.)
10: internal -> org.apache.maven.archetypes:maven-archetype-webapp (An archetype which contains a sample Maven Webapp project.)
Choose a number or apply filter (format: [groupId:]artifactId, case sensitive contains): 7:
{% endhighlight %}

nah jadi kita secara default no ```7``` jadi kita akan dibuatkan template project dengan artifactId ```org.apache.maven.archetypes:maven-archetype-quickstart```, karena kita mau bikin aplikasi desktop jadi biarkan default ja maka tekan **Enter** kemudian kita akan di minta untuk milih versinya dan pilih yang paling beru, setelah itu kita input ```groupId``` seperti berikut:

{% highlight bash %}
Define value for property 'groupId': : com.hotmail.dimmaryanto.software
{% endhighlight %}

jadi maksudnya adalah kita akan membuat workspace yaitu di folder klo di Windows jadi ```C:\User\dimmaryanto\.m2\repository\com\hotmail\dimmaryanto\software``` setelah itu tekan **Enter** dan selanjutnya kita akan diminta untuk input ```artifactId``` seperti berikut:

{% highlight bash %}
  Define value for property 'artifactId': : template-mvn-quickstart
{% endhighlight %}

Jadi kita disini menginputkan nama aplikasinya dengan nama ```template-mvn-quickstart```, Kemudian kita akan ditanya versi dari softwarenya kita biarin default aja. Tekan **Enter**

{% highlight bash %}
  Define value for property 'version':  1.0-SNAPSHOT: :
{% endhighlight %}

Lalu kita akan ditanya mau menyimpan di package yang udah disediakan atau mau diganti, klo saya biarin default aja

{% highlight bash %}
  Define value for property 'package':  com.hotmail.dimmaryanto.software: :
{% endhighlight %}

Kemudian kita melakukan confirmasi atas konfigurasi yang telah kita buat seperti berikut:

{% highlight bash %}
Confirm properties configuration:
groupId: com.hotmail.dimmaryanto.software
artifactId: template-mvn-quickstart
version: 1.0-SNAPSHOT
package: com.hotmail.dimmaryanto.software
 Y: :
{% endhighlight %}

Kemudian tekan **Enter** dan maka berikut adalah log nya:

{% highlight bash %}
[INFO] ----------------------------------------------------------------------------
[INFO] Using following parameters for creating project from Old (1.x) Archetype: maven-archetype-quickstart:1.1
[INFO] ----------------------------------------------------------------------------
[INFO] Parameter: basedir, Value: /home/dimmaryanto/temp/dimmaryanto-blog/java-buildtools-mvn
[INFO] Parameter: package, Value: com.hotmail.dimmaryanto.software
[INFO] Parameter: groupId, Value: com.hotmail.dimmaryanto.software
[INFO] Parameter: artifactId, Value: template-mvn-quickstart
[INFO] Parameter: packageName, Value: com.hotmail.dimmaryanto.software
[INFO] Parameter: version, Value: 1.0-SNAPSHOT
[INFO] project created from Old (1.x) Archetype in dir: /home/dimmaryanto/temp/dimmaryanto-blog/java-buildtools-mvn/template-mvn-quickstart
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 36:58 min
[INFO] Finished at: 2016-06-14T10:45:06+07:00
[INFO] Final Memory: 16M/168M
[INFO] ------------------------------------------------------------------------
{% endhighlight %}

berikut adalah hasil berupa gambar:

![Hasil generate template-mvn-quickstart]({{ site.baseurl }}/images/2016-07/apache-maven/ls-mvn-template.png)

Nah sekarang kita telah memiliki template project yang telah dibuatkan oleh maven-archetype, berikut adalah struktur direktorinya:

{% highlight bash %}
.
├── pom.xml
├── src
│   ├── main
│   │   └── java
│   │       └── com
│   │           └── hotmail
│   │               └── dimmaryanto
│   │                   └── software
│   │                       └── App.java
│   └── test
│       └── java
│           └── com
│               └── hotmail
│                   └── dimmaryanto
│                       └── software
│                           └── AppTest.java
└── target # akan muncul jika telah dicompile
    ├── classes
    │   └── com
    │       └── hotmail
    │           └── dimmaryanto
    │               └── software
    │                   └── App.class
    └── maven-status
        └── maven-compiler-plugin
            └── compile
                └── default-compile
                    ├── createdFiles.lst
                    └── inputFiles.lst

23 directories, 6 files
{% endhighlight %}{: .output }

Ok mungkin segitu dulu postingan kali ini tentang membuat project java deskop di Apache Maven. See you next post!.
