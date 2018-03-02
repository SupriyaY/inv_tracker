class CreateBusinessOwners < ActiveRecord::Migration[5.1]
  def change
    create_table :business_owners do |t|
      t.string :name
      t.string :business_name
      t.string :photo
      t.string :business_description
      t.string :business_address
      t.string :business_email
      t.string :business_phone

      t.timestamps
    end
  end
end
