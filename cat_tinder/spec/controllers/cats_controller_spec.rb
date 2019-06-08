require 'rails_helper'

RSpec.describe CatsController, type: :controller do
    describe "Index" do
        it "should get a count of cats" do
        Cat.create(name: "catt", age: "2", enjoys: "napping")
        Cat.create(name: "mark", age: "5", enjoys: "sleeping")
        Cat.create(name: "catt", age: "2", enjoys: "napping")
        get :index
        json = JSON.parse(response.body)
        expect(response).to be_success
        expect(json.length).to eq(3)
        end 
    end 
    # describe "create" do
    #     it "should create a new cat" do
    #       a_cat=Cat.create(name: "catt", age: "2", enjoys: "napping")
    #       expect(a_cat.name).to eq "catt"
    #   end 
    # end 
end
