require 'rails_helper'

describe 'Cats API' do
    it 'gets a list of Cats' do
        Cat.create(name:'Garfield', age:'55', enjoys:'spaghetti')
        get '/cats'
        json = JSON.parse(response.body)
        expect(response).to be_success
        expect(json.length).to eq(1)
    end
end