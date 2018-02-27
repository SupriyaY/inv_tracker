class Api::BusinessOwnersController < ApplicationController
    def index
    @business_owners = BusinessOwner.all
    render json: @business_owners
    end
    
    def show
    @business_owner = BusinessOwner.find(params[:id])
    render json: @business_owner 
    end

    def create
    @business_owner = BusinessOwner.create!(business_owners_params)
    render json: @business_owner
    end

    def update
    @business_owners = BusinessOwner.find(params[:id])
    @business_owner.update!(business_owner_params)
    render json: @business_owner
    end

    def destroy
    @business_owner = BusinessOwner.find(params[:id]).delete
    render status: :ok
    end

    private
    def user_params
        params.require(:business_owner).permit(:name, :business_name, :business_description, :business_address, :business_email, :business_phone)
    end
end
