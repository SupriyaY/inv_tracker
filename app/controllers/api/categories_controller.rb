require 'link'

class Api::CategoriesController < ApplicationController
    def index 
        @categories = Services::LinkServices.get_categories
        render json: @categories
    end

end
