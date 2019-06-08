# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
#Same as Routes.js this.state without id's
catchelors = [
                {
                    name: 'Tom-Tom',
                    age: '3',
                    enjoys: 'cat naps'
                    
                },
                {
                    name: 'Nibbles',
                    age: '2',
                    enjoys: 'eating catnip'
                    
                },
                {
                    name: 'Scratchy',
                    age: '4',
                    enjoys: 'scratching his post'
                    
                },
                {   name: 'Cattie',
                    age: '5',
                    enjoys: 'chatting'
                }
                ]
catchelors.each do |attributes|
  Cat.create(attributes)
end
