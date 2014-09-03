# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

me = User.create(username: "josh", password: "hi")
t1 = me.tasks.create(action: "Walk the dogs", priority: "Low")
t2 = me.tasks.create(action: "Write cover letter", priority: "High")
t3 = me.tasks.create(action: "Go to the gym", priority: "Low")
t4 = me.tasks.create(action: "Make care package video", priority: "Medium")
