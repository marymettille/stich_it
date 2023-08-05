class CreateCrafts < ActiveRecord::Migration[7.0]
  def self.up
    create_table :crafts, id: :integer do |t|
      t.string :name
    end

    Craft.create(name: 'Quilting')
    Craft.create(name: 'Handsewing')
    Craft.create(name: 'English Paper Piecing')
  end

  def self.down
    drop_table 'crafts'
  end
end
