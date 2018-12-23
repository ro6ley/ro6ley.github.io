---
layout: post
title:  "Web Scraping with Python."
date:   2018-10-9 10:00:00 +0300
categories: tutorials
---

## Introduction

Web scraping is a technique employed to extract a large amount of data from websites and format it for use in a variety of applications. Web scraping allows us to automatically extract data and present it in a usable configuration, or process and store the data elsewhere. The data collected can also be part of a pipeline where it is treated as an input for other programs.

In the past, extracting information from a website meant copying the text available on a web page manually. This method is highly inefficient and not scalable. These days, there are some nifty packages in Python that will help us automate the process! In this post, I'll walk through some use cases for web scraping, highlight the most popular open source packages, and walk through an example project to scrape publicly available data on Github.


## Web Scraping Use Cases

Web scraping is a powerful data collection tool when used efficiently. Some examples of areas where web scraping is employed are:

- **Search:** Search engines use web scraping to index websites for them to appear in search results. The better the scraping techniques, the more accurate the results.

- **Trends:** In communication and media, web scraping can be used to track the latest trends and stories since there is not enough manpower to cover every new story or trend. With web scraping, you can achieve more in this field.

- **Branding:** Web scraping also allows communications and marketing teams scrape information about their brand’s online presence. By scraping for reviews about your brand, you can be aware of what people think or feel about your company and tailor outreach and engagement strategies around that information.

- **Machine Learning:** Web scraping is extremely useful in mining data for building and training machine learning models.

- **Finance:** It can be useful to scrape data that might affect movements in the stock market. While some online aggregators exist, building your own collection pool allows you to manage latency and ensure data is being correctly categorized or prioritized.

## Tools & Libraries

There are several popular online libraries that provide programmers with the tools to quickly ramp up their own scraper. Some of my favorites include:
