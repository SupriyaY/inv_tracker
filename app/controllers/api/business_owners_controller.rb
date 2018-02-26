class Api::BusinessOwnersController < ApplicationController
    def index
    @business_owners = BusinessOwner.all
    render json: @business_owners
    end
    
#     def show
#     @user = User.find(params[:id])
#     render json: @user 
#     end

#     def create
#     @user = User.create!(user_params)
#     render json: @user
#     end

#     def update
#     @user = User.find(params[:id])
#     @user.update!(user_params)
#     render json: @user
#     end

#     def destroy
#     @user = User.find(params[:id]).delete
#     render status: :ok
#     end

#     private
#     def user_params
#         params.require(:user).permit(:name, :photo_url)
#     end
end
