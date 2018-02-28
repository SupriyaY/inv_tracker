class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :shortName
      t.string :fullName

      t.timestamps
    end
  end
end
