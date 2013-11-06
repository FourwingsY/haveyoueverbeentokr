#!/usr/bin/env python
# -*- coding: euc-kr -*- 
'''
Make sql insert Query statements from csv source.
'''
csv = open ("cities-utf8.csv");
for line in csv :
	ll = line.split(',');
	ll[2] = ll[2][0:-2];
	print "insert into cities (city_id, region_id, city_name) values ("+ll[0]+","+ll[1]+",'"+ll[2]+"');";