class BusinessOwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :business_name, :business_description, :business_address, :business_email, :business_phone, :inventories, :suppliers

end
