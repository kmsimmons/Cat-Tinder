class CatsController < ApplicationController
    def index
        cats = Cat.all
        render json: cats
    end
    def create
        cat = Cat.create(cat_params)
        if cat.valid?
            render json: cat
        else
            render json: cat.errors, status: :unprocessable_entity
        end
    end
    def cat_params
        params.require(:cat).permit(:name, :age, :enjoys, :avatar)
    end
    def update
        cat = Cat.find(params[:id])
        cat.update_attributes(user_params)
        render :show
    end
    def show
        json.name @cat.name
        json.age @cat.age
        json.enjoys @cat.enjoys
        json.avatar_url url_for(@cat.avatar)
    end

end
