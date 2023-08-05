class CreatePatterns < ActiveRecord::Migration[7.0]
  def change
    create_table :patterns, id: :integer do |t|
      t.string :name, not_null: true
      t.string :author
      t.text :description
      t.integer :craft_id
      t.timestamps
    end
  end
end
