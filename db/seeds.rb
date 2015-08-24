# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

sub = Subject.create(title: "backbone.js")
sub.notes.create(content: "Keeping track of all the things")
sub.notes.create(content: "Is hard to do")

sub1 = Subject.create(title: "Ruby on Rails")
sub1.notes.create(content: "Little easier to handle")
