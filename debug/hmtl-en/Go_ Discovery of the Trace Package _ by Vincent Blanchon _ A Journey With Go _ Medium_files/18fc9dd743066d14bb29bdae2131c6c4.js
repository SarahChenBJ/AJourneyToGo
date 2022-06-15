document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-39872b2714d6.css">')
document.write('<div id=\"gist99597989\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-task-go\" class=\"file my-2\">\n    \n    <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-go  \">\n\n        \n<div class=\"js-check-bidi js-blob-code-container blob-code-content\">\n\n  <template class=\"js-file-alert-template\">\n  <div data-view-component=\"true\" class=\"flash flash-warn flash-full d-flex flex-items-center\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n  \n    <span>\n      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.\n      <a href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n    <\/span>\n\n\n  <div data-view-component=\"true\" class=\"flash-action\">      <a href=\"{{ revealButtonHref }}\" data-view-component=\"true\" class=\"btn-sm btn\">  Show hidden characters\n  \n<\/a>\n<\/div>\n<\/div><\/template>\n<template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table class=\"highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file\" data-tab-size=\"8\" data-paste-markdown-skip data-tagsearch-lang=\"Go\" data-tagsearch-path=\"task.go\">\n        <tr>\n          <td id=\"file-task-go-L1\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"1\"><\/td>\n          <td id=\"file-task-go-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>func<\/span> <span class=pl-en>main<\/span>() {<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L2\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"2\"><\/td>\n          <td id=\"file-task-go-LC2\" class=\"blob-code blob-code-inner js-file-line\">	<span class=pl-s1>ctx<\/span>, <span class=pl-s1>task<\/span> <span class=pl-c1>:=<\/span> <span class=pl-s1>trace<\/span>.<span class=pl-en>NewTask<\/span>(<span class=pl-s1>context<\/span>.<span class=pl-en>Background<\/span>(), <span class=pl-s>&quot;main start&quot;<\/span>)<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L3\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"3\"><\/td>\n          <td id=\"file-task-go-LC3\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L4\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"4\"><\/td>\n          <td id=\"file-task-go-LC4\" class=\"blob-code blob-code-inner js-file-line\">	<span class=pl-k>var<\/span> <span class=pl-s1>wg<\/span> sync.<span class=pl-smi>WaitGroup<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L5\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"5\"><\/td>\n          <td id=\"file-task-go-LC5\" class=\"blob-code blob-code-inner js-file-line\">	<span class=pl-s1>wg<\/span>.<span class=pl-en>Add<\/span>(<span class=pl-c1>2<\/span>)<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L6\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"6\"><\/td>\n          <td id=\"file-task-go-LC6\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L7\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"7\"><\/td>\n          <td id=\"file-task-go-LC7\" class=\"blob-code blob-code-inner js-file-line\">	<span class=pl-k>go<\/span> <span class=pl-k>func<\/span>() {<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L8\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"8\"><\/td>\n          <td id=\"file-task-go-LC8\" class=\"blob-code blob-code-inner js-file-line\">		<span class=pl-k>defer<\/span> <span class=pl-s1>wg<\/span>.<span class=pl-en>Done<\/span>()<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L9\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"9\"><\/td>\n          <td id=\"file-task-go-LC9\" class=\"blob-code blob-code-inner js-file-line\">		<span class=pl-s1>r<\/span> <span class=pl-c1>:=<\/span> <span class=pl-s1>trace<\/span>.<span class=pl-en>StartRegion<\/span>(<span class=pl-s1>ctx<\/span>, <span class=pl-s>&quot;reading file&quot;<\/span>)<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L10\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"10\"><\/td>\n          <td id=\"file-task-go-LC10\" class=\"blob-code blob-code-inner js-file-line\">		<span class=pl-k>defer<\/span> <span class=pl-s1>r<\/span>.<span class=pl-en>End<\/span>()<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L11\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"11\"><\/td>\n          <td id=\"file-task-go-LC11\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L12\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"12\"><\/td>\n          <td id=\"file-task-go-LC12\" class=\"blob-code blob-code-inner js-file-line\">		<span class=pl-s1>ioutil<\/span>.<span class=pl-en>ReadFile<\/span>(<span class=pl-s>\`n1.txt\`<\/span>)<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L13\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"13\"><\/td>\n          <td id=\"file-task-go-LC13\" class=\"blob-code blob-code-inner js-file-line\">	}()<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L14\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"14\"><\/td>\n          <td id=\"file-task-go-LC14\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L15\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"15\"><\/td>\n          <td id=\"file-task-go-LC15\" class=\"blob-code blob-code-inner js-file-line\">	<span class=pl-k>go<\/span> <span class=pl-k>func<\/span>() {<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L16\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"16\"><\/td>\n          <td id=\"file-task-go-LC16\" class=\"blob-code blob-code-inner js-file-line\">		<span class=pl-k>defer<\/span> <span class=pl-s1>wg<\/span>.<span class=pl-en>Done<\/span>()<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L17\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"17\"><\/td>\n          <td id=\"file-task-go-LC17\" class=\"blob-code blob-code-inner js-file-line\">		<span class=pl-s1>r<\/span> <span class=pl-c1>:=<\/span> <span class=pl-s1>trace<\/span>.<span class=pl-en>StartRegion<\/span>(<span class=pl-s1>ctx<\/span>, <span class=pl-s>&quot;writing file&quot;<\/span>)<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L18\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"18\"><\/td>\n          <td id=\"file-task-go-LC18\" class=\"blob-code blob-code-inner js-file-line\">		<span class=pl-k>defer<\/span> <span class=pl-s1>r<\/span>.<span class=pl-en>End<\/span>()<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L19\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"19\"><\/td>\n          <td id=\"file-task-go-LC19\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L20\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"20\"><\/td>\n          <td id=\"file-task-go-LC20\" class=\"blob-code blob-code-inner js-file-line\">		<span class=pl-s1>ioutil<\/span>.<span class=pl-en>WriteFile<\/span>(<span class=pl-s>\`n2.txt\`<\/span>, []<span class=pl-smi>byte<\/span>(<span class=pl-s>\`42\`<\/span>), <span class=pl-c1>0644<\/span>)<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L21\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"21\"><\/td>\n          <td id=\"file-task-go-LC21\" class=\"blob-code blob-code-inner js-file-line\">	}()<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L22\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"22\"><\/td>\n          <td id=\"file-task-go-LC22\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L23\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"23\"><\/td>\n          <td id=\"file-task-go-LC23\" class=\"blob-code blob-code-inner js-file-line\">	<span class=pl-s1>wg<\/span>.<span class=pl-en>Wait<\/span>()<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L24\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"24\"><\/td>\n          <td id=\"file-task-go-LC24\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L25\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"25\"><\/td>\n          <td id=\"file-task-go-LC25\" class=\"blob-code blob-code-inner js-file-line\">	<span class=pl-k>defer<\/span> <span class=pl-s1>task<\/span>.<span class=pl-en>End<\/span>()<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-task-go-L26\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"26\"><\/td>\n          <td id=\"file-task-go-LC26\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n    <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/blanchonvincent/18fc9dd743066d14bb29bdae2131c6c4/raw/5c5799e7a166709d46adb88de147c145f76454ae/task.go\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/blanchonvincent/18fc9dd743066d14bb29bdae2131c6c4#file-task-go\">\n          task.go\n        <\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
