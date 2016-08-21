---
layout: post
title: "Membuat project Java Web &amp; Deploy ke tomcat"
author: Dimas Maryanto
comments: yes
page_category: jsp
language: java
gist:
repository:
categories:
- Java
- WEB
tags:
- Java
- Web
- JSP
- Servlet
- ServerSide
references:
---

Halo di [postingan sebelumnya]({% post_url 2016-08-21-setup-env-java-web %}) kita telah mengetahui hal apa saja yang harus dilakukan untuk belajar Java Web atau JavaEE, kali ini saya akan membuat project Java Web dengan menggunakan Apache Maven dengan template project ```maven-archetype-webapp```. berikut adalah langkah-langkahnya:

<!--more-->

Membuat project dengan Apache maven

{% highlight bash %}
mvn archetype:generate
  -DartifactId=tutorial-javawebapp
  -DgroupId=com.dimmaryanto93.software
  -DarchetypeCatalog="internal"
{% endhighlight %}

Seperti berikut outputnya:

{% highlight bash %}
C:\Users\softw>cd Documents\temp

C:\Users\softw\Documents\temp>mvn archetype:generate -DartifactId=tutorial-javawebapp -DgroupId=software.dimmaryanto93.com -DarchetypeCatalog="internal"
[INFO] Scanning for projects...
[INFO]
[INFO] ------------------------------------------------------------------------
[INFO] Building Maven Stub Project (No POM) 1
[INFO] ------------------------------------------------------------------------
[INFO]
[INFO] >>> maven-archetype-plugin:2.4:generate (default-cli) > generate-sources @ standalone-pom >>>
[INFO]
[INFO] <<< maven-archetype-plugin:2.4:generate (default-cli) < generate-sources @ standalone-pom <<<
[INFO]
[INFO] --- maven-archetype-plugin:2.4:generate (default-cli) @ standalone-pom ---
[INFO] Generating project in Interactive mode
[INFO] No archetype defined. Using maven-archetype-quickstart (org.apache.maven.archetypes:maven-archetype-quickstart:1.0)
{% endhighlight %}

Nah sekarang kita disuruh milih template projectnya, pilih yang groupId=```org.apache.maven.archetypes``` dan dengan artifactId=```maven-archetype-webapp``` atau ketik ```10``` seperti berikut:

{% highlight bash %}
Choose archetype:
1: internal -> org.apache.maven.archetypes:maven-archetype-archetype (An archetype which contains a sample archetype.)
2: internal -> org.apache.maven.archetypes:maven-archetype-j2ee-simple (An archetype which contains a simplifed sample J2EE application.)
3: internal -> org.apache.maven.archetypes:maven-archetype-plugin (An archetype which contains a sample Maven plugin.)
4: internal -> org.apache.maven.archetypes:maven-archetype-plugin-site (An archetype which contains a sample Maven plugin site.
      This archetype can be layered upon an existing Maven plugin project.)
5: internal -> org.apache.maven.archetypes:maven-archetype-portlet (An archetype which contains a sample JSR-268 Portlet.)
6: internal -> org.apache.maven.archetypes:maven-archetype-profiles ()
7: internal -> org.apache.maven.archetypes:maven-archetype-quickstart (An archetype which contains a sample Maven project.)
8: internal -> org.apache.maven.archetypes:maven-archetype-site (An archetype which contains a sample Maven site which demonstrates
      some of the supported document types like APT, XDoc, and FML and demonstrates how
      to i18n your site. This archetype can be layered upon an existing Maven project.)
9: internal -> org.apache.maven.archetypes:maven-archetype-site-simple (An archetype which contains a sample Maven site.)
10: internal -> org.apache.maven.archetypes:maven-archetype-webapp (An archetype which contains a sample Maven Webapp project.)
Choose a number or apply filter (format: [groupId:]artifactId, case sensitive contains): 7: 10 # tekan enter
{% endhighlight %}

Selanjutnya kita akan diberikan confirmasi, tekan Enter aja seperti berikut:

{% highlight bash %}
[INFO] Using property: groupId = software.dimmaryanto93.com
[INFO] Using property: artifactId = tutorial-javawebapp
Define value for property 'version':  1.0-SNAPSHOT: :
[INFO] Using property: package = software.dimmaryanto93.com
Confirm properties configuration:
groupId: software.dimmaryanto93.com
artifactId: tutorial-javawebapp
version: 1.0-SNAPSHOT
package: software.dimmaryanto93.com
 Y: : # Tekan enter
{% endhighlight %}

Maka berikut outputnya:

{% highlight bash %}
[INFO] ----------------------------------------------------------------------------
[INFO] Using following parameters for creating project from Old (1.x) Archetype: maven-archetype-webapp:1.0
[INFO] ----------------------------------------------------------------------------
[INFO] Parameter: basedir, Value: C:\Users\softw\Documents\temp
[INFO] Parameter: package, Value: software.dimmaryanto93.com
[INFO] Parameter: groupId, Value: software.dimmaryanto93.com
[INFO] Parameter: artifactId, Value: tutorial-javawebapp
[INFO] Parameter: packageName, Value: software.dimmaryanto93.com
[INFO] Parameter: version, Value: 1.0-SNAPSHOT
[INFO] project created from Old (1.x) Archetype in dir: C:\Users\softw\Documents\temp\tutorial-javawebapp
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 54.691 s
[INFO] Finished at: 2016-08-22T00:02:09+07:00
[INFO] Final Memory: 15M/155M
[INFO] ------------------------------------------------------------------------

C:\Users\softw\Documents\temp>
{% endhighlight %}
