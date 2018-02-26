# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

BusinessOwner.destroy_all
Inventory.destroy_all
Supplier.destroy_all
BoInvSupplier.destroy_all


ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

alexa = BusinessOwner.create(
name: "Alexa Chung",
business_name: "Chung, Inc",
business_description: "Curating collections of denim for Couture Houses",
business_address: "123 Lakeview Street, London, England 12345",
business_email: "chung1@gmal.com",
business_phone: "07712345678"
)


jeans = Inventory.create(
category: "Clothing",
name: "Jeans",
description: "Cropped flared blue jeans"
)


amazon =  Supplier.create(
name: "Amazon",
address: "123 Silcon Street, Atlanta, GA 30308",
contact_name: "Supriya Yerramilli",
contact_email: "sups@amazon.com",
contact_phone: "7407084979"
)

BoInvSupplier.create(
    business_owner: alexa,
    inventory: jeans,
    supplier: amazon
)