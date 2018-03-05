class BusinessOwner < ApplicationRecord
    has_many :bo_inv_suppliers, dependent: :destroy
    has_many :inventories, through: :bo_inv_suppliers
    has_many :suppliers, through: :bo_inv_suppliers

validates :name, presence: true
validates :business_name, presence: true
validates :business_description, presence: true
validates :business_address, presence: true
validates :business_email, presence: true
validates :business_phone, presence: true

end
