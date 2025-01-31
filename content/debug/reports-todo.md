---
title: "Reports to create"
slug: "reports-todo"
category: "debug"
maxwidth: true
---

A list of reports that would be useful to have

* Internal links that don't have a trailing slash
* External links (can be manually audited or run curl against using Github Actions)
  * Check for 302/404/500
  * Dump CSP headers to file and check that links appear in CSP header somehow
* Pages with a malformed timestamp
* Pages sorted by age
* Add a parameters denoting frequency and list next page to be updated (ie now or about)
* Basic regex to check what posts appear in robots.txt, rss.xml
* Duplicates ie; layouts that are exactly the same
* Generated filesizes (content + pagesizes)
* Reviews to port over
  * Manually define list and check against non-existent files
* Comparison of `folder/index.md` to `file.md` distribution
* Detection for smart quotes
* Places where the word here contains a link (as that's usually a rubbish way to do links)

Ideally, there'd be alerting on these pages too