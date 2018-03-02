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
photo: "https://i.imgur.com/j3G9sGw.jpg",
business_description: "Curating collections of denim for Couture Houses",
business_address: "123 Lakeview Street, London, England 12345",
business_email: "chung1@gmail.com",
business_phone: "07712345678"
)

jason = BusinessOwner.create(
name: "Jason Wu",
business_name: "Wu, Inc",
photo: "https://i.imgur.com/j3G9sGw.jpg",
business_description: "Curating collections of dressers for first ladies",
business_address: "123 Lakeview Street, New York, NY 12345",
business_email: "wu1@gmail.com",
business_phone: "07743345678"
)

marianna = BusinessOwner.create(
name: "Marianna Hewitt",
business_name: "Hewitt, Inc",
photo: "https://i.imgur.com/j3G9sGw.jpg",
business_description: "Curating a collection of nude heels",
business_address: "123 Lucille Street, Paris, France 12345",
business_email: "rousteing1@gmail.com",
business_phone: "07743343478"
)

jeans = Inventory.create(
category: "Clothing",
name: "Jeans",
description: "Cropped flared blue jeans"
)

dresses = Inventory.create(
category: "Clothing",
name: "Dresses",
description: "White a-line dresses"
)

heels = Inventory.create(
category: "Shoes",
name: "Stilettos",
description: "Four-inch nude stilettos"
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

BoInvSupplier.create(
    business_owner: jason,
    inventory: dresses,
    supplier: amazon
)

BoInvSupplier.create(
    business_owner: marianna,
    inventory: heels,
    supplier: amazon
)