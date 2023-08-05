class PatternSerializer < ActiveModel::Serializer
  attributes(:id, :name, :author, :description, :craft_name)

  def craft_name
    object.craft.name
  end
end
